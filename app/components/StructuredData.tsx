export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rümpelschmiede",
    "description": "Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung deutschlandweit",
    "url": "https://ruempelschmiede.de",
    "telephone": "+49 521 12000510",
    "email": "info@ruempelschmiede.de",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressRegion": "Nordrhein-Westfalen"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.0302",
      "longitude": "8.5325"
    },
    "image": "https://ruempelschmiede.de/Logo.png",
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1200"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Entrümpelungsdienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Haushaltsauflösung",
            "description": "Komplette Wohnungsauflösungen mit Wertanrechnung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gewerbeauflösung",
            "description": "Büros, Praxen, Läden - schnell und diskret"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Messie-Wohnungen",
            "description": "Sensible Räumung mit Desinfektion"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Express-Service",
            "description": "Garantierte Räumung innerhalb von 48 Stunden"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Berlin"
      },
      {
        "@type": "City",
        "name": "Hamburg"
      },
      {
        "@type": "City",
        "name": "München"
      },
      {
        "@type": "City",
        "name": "Köln"
      },
      {
        "@type": "City",
        "name": "Frankfurt"
      },
      {
        "@type": "City",
        "name": "Stuttgart"
      },
      {
        "@type": "City",
        "name": "Düsseldorf"
      },
      {
        "@type": "City",
        "name": "Leipzig"
      },
      {
        "@type": "City",
        "name": "Dortmund"
      },
      {
        "@type": "City",
        "name": "Essen"
      },
      {
        "@type": "City",
        "name": "Bremen"
      },
      {
        "@type": "City",
        "name": "Dresden"
      },
      {
        "@type": "City",
        "name": "Hannover"
      },
      {
        "@type": "City",
        "name": "Nürnberg"
      },
      {
        "@type": "City",
        "name": "Duisburg"
      },
      {
        "@type": "City",
        "name": "Bochum"
      },
      {
        "@type": "City",
        "name": "Wuppertal"
      },
      {
        "@type": "City",
        "name": "Bielefeld"
      },
      {
        "@type": "City",
        "name": "Bonn"
      },
      {
        "@type": "City",
        "name": "Münster"
      }
    ],
    "sameAs": [
      "https://ruempelschmiede.com",
      "https://rümpel-schmiede.de",
      "https://rümpel-schmiede.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}