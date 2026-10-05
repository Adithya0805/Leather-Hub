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
      "Artisanal full-grain leather wallets and belts handcrafted in Ambur, Tamil Nadu. Factory-direct pricing with complimentary custom initial embossing.",
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
      "name": "Dino Leathers Genuine Leather Products",
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
              "image": product.imageAngles[0]?.startsWith("http")
                ? product.imageAngles[0]
                : `https://amburleather.in${product.imageAngles[0]}`,
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
        "image": product.imageAngles.map((img) =>
          img.startsWith("http") ? img : `https://amburleather.in${img}`
        ),
        "sku": product.id,
        "mpn": `DINO-${product.id.toUpperCase()}`,
        "brand": {
          "@type": "Brand",
          "name": "Dino Leathers",
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Dino Leathers",
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
