export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rümpel Schmiede",
    "description": "Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung in Bielefeld, Steinhagen & OWL seit 2017",
    "url": "https://ruempelschmiede.de",
    "telephone": "+49 157 55854945",
    "email": "info@ruempelschmiede.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Waldbadstraße 9-13",
      "addressLocality": "Steinhagen",
      "postalCode": "33803",
      "addressCountry": "DE",
      "addressRegion": "Nordrhein-Westfalen"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.0026",
      "longitude": "8.4065"
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
        "Friday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    },
    "foundingDate": "2017",
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
        "name": "Steinhagen"
      },
      {
        "@type": "City", 
        "name": "Bielefeld"
      },
      {
        "@type": "City",
        "name": "Gütersloh"
      },
      {
        "@type": "City",
        "name": "Herford"
      },
      {
        "@type": "City",
        "name": "Paderborn"
      },
      {
        "@type": "City",
        "name": "Bad Salzuflen"
      },
      {
        "@type": "City",
        "name": "Osnabrück"
      },
      {
        "@type": "City",
        "name": "Detmold"
      },
      {
        "@type": "City",
        "name": "Lemgo"
      },
      {
        "@type": "City",
        "name": "Lage"
      },
      {
        "@type": "City",
        "name": "Spenge"
      },
      {
        "@type": "City",
        "name": "Halle Westfalen"
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