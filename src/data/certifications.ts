export interface Certification {
  name: string;
  provider: string;
  category: "cloud" | "security" | "languages" | "management";
  pdf: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS — Introdução à Blockchain",
    provider: "AWS",
    category: "cloud",
    pdf: "AWS-462_3_5089400_1709578177_AWS Course Completion Certificate.pdf",
  },
  {
    name: "Azure — Arquitetura de Serviços",
    provider: "Microsoft",
    category: "cloud",
    pdf: "MICROSOFT-azure-arquitetura-servicos.pdf",
  },
  {
    name: "Azure — Conceitos de Nuvem",
    provider: "Microsoft",
    category: "cloud",
    pdf: "MICROSOFT-azure-conceitos-nuvem.pdf",
  },
  {
    name: "Azure — Governança e Gerenciamento",
    provider: "Microsoft",
    category: "cloud",
    pdf: "MICROSOFT-azure-governanca-gerenciamento.pdf",
  },
  {
    name: "Docker Essentials",
    provider: "IBM",
    category: "cloud",
    pdf: "IBM-Docker_Essentials__A_Developer_Introduction_Badge20240403-29-pws0d.pdf",
  },
  {
    name: "Open Source Foundations",
    provider: "IBM",
    category: "cloud",
    pdf: "IBM-Open_Source_Foundations_Badge20240402-29-4w8w2a.pdf",
  },
  {
    name: "Ethical Hacker",
    provider: "Cisco",
    category: "security",
    pdf: "CISCO-Ethical_Hacker_Badge20240418-45-9c1yzp.pdf",
  },
  {
    name: "Endpoint Security",
    provider: "Cisco",
    category: "security",
    pdf: "CISCO-Endpoint_Security_Badge20240424-31-s8qw2h.pdf",
  },
  {
    name: "Cyber Threat Management",
    provider: "Cisco",
    category: "security",
    pdf: "CISCO-Cyber_Threat_Management_Badge20240418-31-n3014g.pdf",
  },
  {
    name: "Hacker do Bem",
    provider: "Senai",
    category: "security",
    pdf: "SENAI-certificado-hacker-do-bem-Rafael-Ferreira-Da-Silva.pdf",
  },
  {
    name: "Python Essentials 1 & 2",
    provider: "Cisco",
    category: "languages",
    pdf: "CISCO-Python_Essentials_1_Badge20240321-34-qqcn9d.pdf",
  },
  {
    name: "JavaScript Essentials 1 & 2",
    provider: "Cisco",
    category: "languages",
    pdf: "CISCO-JavaScript_Essentials_1_Badge20240318-29-xehkpx.pdf",
  },
  {
    name: "API ASP.NET Core",
    provider: "Microsoft",
    category: "languages",
    pdf: "MICROSOFT-api-aspnet-core.pdf",
  },
  {
    name: "C# — Primeiro Código",
    provider: "Microsoft",
    category: "languages",
    pdf: "MICROSOFT-c-sharp-primeiro-codigo.pdf",
  },
  {
    name: "SQL Server 2022",
    provider: "Microsoft",
    category: "languages",
    pdf: "MICROSOFT-sql-introducao-sql-2022.pdf",
  },
  {
    name: "Power BI — Módulos 1 & 2",
    provider: "Microsoft",
    category: "languages",
    pdf: "MICROSOFT-PowerBI-1.pdf",
  },
  {
    name: "Desenvolvimento Web Completo",
    provider: "Udemy",
    category: "languages",
    pdf: "UDEMY-certificado-desenvolvimento-web.pdf",
  },
  {
    name: "Laravel",
    provider: "Udemy",
    category: "languages",
    pdf: "UDEMY-certificado-laravel.pdf",
  },
  {
    name: "React Native",
    provider: "Udemy",
    category: "languages",
    pdf: "UDEMY-certificado-reac-native.pdf",
  },
  {
    name: "React Redux",
    provider: "Udemy",
    category: "languages",
    pdf: "UDEMY-certificado-react-redux.pdf",
  },
  {
    name: "Ruby on Rails",
    provider: "Udemy",
    category: "languages",
    pdf: "UDEMY-certificado-ruby-rails.pdf",
  },
  {
    name: "Scrum Master + Agile",
    provider: "Udemy",
    category: "management",
    pdf: "UDEMY-UC-1c3afb70-61c7-45ac-9366-ff0765356b47.pdf",
  },
  {
    name: "Mini MBA Technology",
    provider: "Udemy",
    category: "management",
    pdf: "UDEMY-UC-2ada9651-d4be-42b6-8895-7dc5e0d80ba6.pdf",
  },
];

export const categoryLabels: Record<
  Certification["category"],
  Record<string, string>
> = {
  cloud: { pt: "Cloud & Infra", en: "Cloud & Infra", es: "Cloud & Infra", he: "Cloud & Infra" },
  security: { pt: "Cybersecurity", en: "Cybersecurity", es: "Cybersecurity", he: "Cybersecurity" },
  languages: {
    pt: "Linguagens & Dev",
    en: "Languages & Dev",
    es: "Lenguajes & Dev",
    he: "שפות & Dev",
  },
  management: {
    pt: "Gestão & Metodologias",
    en: "Management & Methods",
    es: "Gestión & Metodologías",
    he: "ניהול & מתודולוגיות",
  },
};
