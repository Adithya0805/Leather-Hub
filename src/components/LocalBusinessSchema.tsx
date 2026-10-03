import React from "react";
import { PRODUCTS } from "@/data/products";

export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "Organization"],
    "@id": "https://amburleather.in/#organization",
    "name": "Ambur Leather Works",
    "alternateName": ["Ambur Craft", "Ambur Bovine Leather Co."],
    "url": "https://amburleather.in",
    "logo": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&h=630&q=85",
    "description":
      "Artisanal full-grain leather wallets and belts handcrafted in Ambur, Tamil Nadu. Factory-direct pricing with complimentary custom initial embossing.",
    "telephone": "+91-94432-63580",
    "email": "craft@amburleather.in",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MC Road, Ambur Tannery Cluster",
      "addressLocality": "Ambur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "635802",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.7904,
      "longitude": 78.7166,
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "09:00",
        "closes": "20:00",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ambur Genuine Leather Products",
      "itemListElement": PRODUCTS.map((product) => ({
        "@type": "OfferCatalog",
        "name": product.name,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": product.name,
              "description": product.description,
              "image": product.imageAngles[0],
            },
          },
        ],
      })),
    },
  };

  const productSchemas = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `https://amburleather.in/#product-${product.id}`,
        "name": product.name,
        "description": product.description,
        "image": product.imageAngles,
        "sku": product.id,
        "mpn": `AMB-${product.id.toUpperCase()}`,
        "brand": {
          "@type": "Brand",
          "name": "Ambur Leather Works",
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Ambur Leather Works",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ambur",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN",
          },
        },
        "material": product.leatherType,
        "countryOfOrigin": {
          "@type": "Country",
          "name": "India",
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "url": `https://amburleather.in/#${product.category}`,
          "seller": {
            "@type": "Organization",
            "name": "Ambur Leather Works",
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "IN",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 15,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn",
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "INR",
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "IN",
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY",
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 2,
                "maxValue": 4,
                "unitCode": "DAY",
              },
            },
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating.toString(),
          "reviewCount": product.reviewsCount.toString(),
          "bestRating": "5",
          "worstRating": "1",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }}
      />
    </>
  );
}
