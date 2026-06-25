import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PERSON_NAME,
  PROFILE_IMAGE_URL,
  SITE_URL,
} from "./seo";

export const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON_NAME,
      url: SITE_URL,
      image: PROFILE_IMAGE_URL,
      email: EMAIL,
      jobTitle: "Senior Full Stack Developer · Tech Lead",
      worksFor: {
        "@type": "Organization",
        name: "Andv — Sistemas, Aplicativos e Automação com IA",
        url: SITE_URL,
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "UFBRA — Centro Universitário",
        },
        {
          "@type": "EducationalOrganization",
          name: "ETRJ — Escola Técnica do Rio de Janeiro",
        },
      ],
      knowsAbout: [
        "Laravel",
        "Livewire",
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "System Architecture",
        "Microservices",
        "Artificial Intelligence",
        "Process Automation",
        "DevOps",
        "Docker",
        "AWS",
      ],
      sameAs: [LINKEDIN_URL, GITHUB_URL, SITE_URL],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${PERSON_NAME} — Portfolio`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: ["pt-BR", "en", "es"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${PERSON_NAME} — Portfolio`,
      description:
        "Portfólio de Rafael Ferreira da Silva — Desenvolvedor Full Stack Sênior, Tech Lead, Laravel, IA e automação. Disponível CLT e PJ.",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "pt-BR",
    },
  ],
};
