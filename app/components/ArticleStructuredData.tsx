interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
}

export default function ArticleStructuredData({ 
  title, 
  description, 
  datePublished, 
  dateModified, 
  slug 
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": "Rümpel Schmiede",
      "url": "https://ruempelschmiede.de"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rümpel Schmiede",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ruempelschmiede.de/Logo.png",
        "width": 800,
        "height": 600
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ruempelschmiede.de/artikel/${slug}`
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": {
      "@type": "ImageObject",
      "url": "https://ruempelschmiede.de/Logo.png",
      "width": 800,
      "height": 600
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Rümpel Schmiede Ratgeber",
      "url": "https://ruempelschmiede.de/artikel"
    },
    "about": {
      "@type": "Service",
      "name": "Entrümpelung",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Rümpel Schmiede",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Waldbadstraße 9-13",
          "addressLocality": "Steinhagen",
          "postalCode": "33803",
          "addressCountry": "DE"
        },
        "telephone": "+49 157 55854945"
      }
    },
    "keywords": "Entrümpelung, Haushaltsauflösung, Bielefeld, Steinhagen, OWL, Kosten, Tipps, Ratgeber"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}