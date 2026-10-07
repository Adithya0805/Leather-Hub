import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      business_name,
      contact_name,
      phone,
      city,
      product_interest,
      quantity,
      gstin,
      notes,
    } = body;

    // Server-side validation
    if (!business_name || typeof business_name !== "string" || !business_name.trim()) {
      return NextResponse.json(
        { error: "Business name is required" },
        { status: 400 }
      );
    }

    if (!contact_name || typeof contact_name !== "string" || !contact_name.trim()) {
      return NextResponse.json(
        { error: "Contact person name is required" },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || "").toString().replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "A valid 10-digit phone number is required" },
        { status: 400 }
      );
    }

    if (!city || typeof city !== "string" || !city.trim()) {
      return NextResponse.json(
        { error: "City is required" },
        { status: 400 }
      );
    }

    const parsedQty = parseInt(quantity, 10);
    if (isNaN(parsedQty) || parsedQty < 1) {
      return NextResponse.json(
        { error: "Quantity must be at least 1" },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: "Database configuration is not available on this server" },
        { status: 503 }
      );
    }

    // Call PostgreSQL SECURITY DEFINER function via server route
    const { data, error } = await supabase.rpc("submit_wholesale_inquiry", {
      p_business_name: business_name.trim(),
      p_contact_name: contact_name.trim(),
      p_phone: cleanPhone,
      p_city: city.trim(),
      p_product_interest: (product_interest || "Both Wallets & Belts").toString(),
      p_quantity: parsedQty,
      p_gstin: gstin && typeof gstin === "string" && gstin.trim() ? gstin.trim() : null,
      p_notes: notes && typeof notes === "string" && notes.trim() ? notes.trim() : null,
    });

    if (error) {
      console.error("[Wholesale Inquiry API Error]", error);
      return NextResponse.json(
        { error: error.message || "Failed to submit wholesale inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
        message: "Wholesale inquiry received and registered successfully",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("[Wholesale Inquiry API Handler]", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
