export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Opyjo Consulting",
    url: "https://opyjo.com",
    logo: "https://opyjo.com/logo.png",
    description:
      "Professional freelance web development services specializing in Next.js, React, and TailwindCSS for small businesses and startups in Canada.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
    founder: {
      "@type": "Person",
      name: "Johnson Ojo",
    },
  }
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johnson Ojo",
    jobTitle: "Freelance Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Opyjo Consulting",
    },
    url: "https://opyjo.com",
    sameAs: ["https://github.com/johnsonojo", "https://linkedin.com/in/johnsonojo"],
    knowsAbout: ["React", "Next.js", "TypeScript", "TailwindCSS", "Web Development", "Frontend Engineering"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://opyjo.com",
    name: "Opyjo Consulting",
    image: "https://opyjo.com/logo.png",
    description:
      "Freelance web developer in Canada specializing in Next.js and TailwindCSS development for small businesses and startups.",
    url: "https://opyjo.com",
    telephone: "+1-XXX-XXX-XXXX",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "CA",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  }
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Opyjo Consulting",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
            description: "Build modern, responsive websites using Next.js and React",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development",
            description: "Create beautiful user interfaces with React and TailwindCSS",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description: "Build full-stack web applications with modern technologies",
          },
        },
      ],
    },
  }
}
