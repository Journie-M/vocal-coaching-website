export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://journiejohnsonvoice.com/#business",
    name: "Journie Johnson Voice",
    description:
      "Professional vocal coaching and singing lessons in Los Angeles. Experienced voice teacher offering online and in-person lessons for all skill levels.",
    url: "https://journiejohnsonvoice.com",
    email: "journiem@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522", // Los Angeles coordinates
      longitude: "-118.2437",
    },
    image: "https://journiejohnsonvoice.com/JournieSmileHeadshot.png",
    priceRange: "$$",
    openingHours: "Mo-Su", // Adjust to your actual hours
    areaServed: {
      "@type": "City",
      name: "Los Angeles",
    },
    sameAs: [
      // Add your social media profiles here
      "https://www.instagram.com/goingonajournie",
      // "https://www.facebook.com/yourprofile",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vocal Coaching Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Introductory Lesson",
            description: "Free first lesson for new students",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "One-on-One Vocal Coaching",
            description: "Private vocal coaching sessions for all levels",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Coaching",
            description: "Stage presence and performance coaching",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audition Preparation",
            description: "Professional audition coaching and preparation",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
      // Update these as you get more reviews
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
