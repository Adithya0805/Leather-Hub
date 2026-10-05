import React from "react";
import { PRODUCTS } from "@/data/products";

export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "Organization"],
    "@id": "https://dinoleathers.in/#organization",
    "name": "Dino Leathers",
    "alternateName": ["Dino Leathers Ambur", "Dino Leather Co."],
    "url": "https://dinoleathers.in",
    "logo": "https://dinoleathers.in/images/logo.png",
    "image": "https://dinoleathers.in/images/logo.png",
    "description":
      "Artisanal full-grain leather wallets and belts handcrafted in Ambur, Tamil Nadu. Direct workshop pricing with complimentary custom initial embossing.",
    "telephone": "+91-94432-63580",
    "email": "craft@dinoleathers.in",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dino Leathers Handcrafted Products",
      "itemListElement": PRODUCTS.map((product) => {
        const primaryImg = product.images?.[0] || product.cardImage || "/images/logo.png";
        const fullImg = primaryImg.startsWith("http") ? primaryImg : `https://dinoleathers.in${primaryImg}`;
        return {
          "@type": "OfferCatalog",
          "name": product.name,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": product.name,
                "description": product.description,
                "image": fullImg,
              },
            },
          ],
        };
      }),
    },
  };

  const productSchemas = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PRODUCTS.map((product, index) => {
      const images = (product.images.length > 0 ? product.images : [product.cardImage || "/images/logo.png"]).map(
        (img) => (img.startsWith("http") ? img : `https://dinoleathers.in${img}`)
      );
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "@id": `https://dinoleathers.in/#product-${product.id}`,
          "name": product.name,
          "description": product.description,
          "image": images,
          "sku": product.id,
          "mpn": `DINO-${product.id.toUpperCase()}`,
          "brand": {
            "@type": "Brand",
            "name": "Dino Leathers",
          },
          "offers": {
            "@type": "Offer",
            "url": "https://dinoleathers.in/#collection",
            "priceCurrency": "INR",
            "price": product.price.toString(),
            "priceValidUntil": "2027-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": product.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            "seller": {
              "@type": "Organization",
              "name": "Dino Leathers",
            },
          },
        },
      };
    }),
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
