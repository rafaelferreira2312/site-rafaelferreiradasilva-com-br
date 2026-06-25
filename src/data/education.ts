import type { Locale } from "./i18n";

export interface EducationItem {
  id: string;
  translations: Record<
    Locale,
    {
      institution: string;
      degree: string;
      period: string;
      location: string;
      detail?: string;
    }
  >;
}

export const educationItems: EducationItem[] = [
  {
    id: "ufbra",
    translations: {
      pt: {
        institution: "UFBRA — Centro Universitário",
        degree: "Graduação em Análise de Sistemas",
        period: "Nível superior",
        location: "Rio de Janeiro, RJ",
        detail: "Formação em desenvolvimento de software, modelagem de sistemas e engenharia de software.",
      },
      en: {
        institution: "UFBRA — University Center",
        degree: "Bachelor's in Systems Analysis",
        period: "Undergraduate degree",
        location: "Rio de Janeiro, Brazil",
        detail: "Software development, systems modeling and software engineering.",
      },
      es: {
        institution: "UFBRA — Centro Universitario",
        degree: "Graduación en Análisis de Sistemas",
        period: "Nivel superior",
        location: "Río de Janeiro, RJ",
        detail: "Formación en desarrollo de software, modelado de sistemas e ingeniería de software.",
      },
      he: {
        institution: "UFBRA — University Center",
        degree: "Bachelor's in Systems Analysis",
        period: "Undergraduate degree",
        location: "Rio de Janeiro, Brazil",
        detail: "Software development, systems modeling and software engineering.",
      },
    },
  },
  {
    id: "etrj",
    translations: {
      pt: {
        institution: "ETRJ — Escola Técnica do Rio de Janeiro",
        degree: "Técnico em Informática",
        period: "Nível médio técnico",
        location: "Rio de Janeiro, RJ",
        detail: "Base técnica em programação, redes, banco de dados e infraestrutura de TI.",
      },
      en: {
        institution: "ETRJ — Rio de Janeiro Technical School",
        degree: "IT Technician Diploma",
        period: "Technical secondary education",
        location: "Rio de Janeiro, Brazil",
        detail: "Technical foundation in programming, networks, databases and IT infrastructure.",
      },
      es: {
        institution: "ETRJ — Escuela Técnica de Río de Janeiro",
        degree: "Técnico en Informática",
        period: "Nivel medio técnico",
        location: "Río de Janeiro, RJ",
        detail: "Base técnica en programación, redes, bases de datos e infraestructura de TI.",
      },
      he: {
        institution: "ETRJ — Rio de Janeiro Technical School",
        degree: "IT Technician Diploma",
        period: "Technical secondary education",
        location: "Rio de Janeiro, Brazil",
        detail: "Technical foundation in programming, networks, databases and IT infrastructure.",
      },
    },
  },
  {
    id: "mini-mba",
    translations: {
      pt: {
        institution: "Udemy",
        degree: "Mini MBA Technology",
        period: "2024",
        location: "Online",
        detail: "Gestão de tecnologia, produto digital, liderança e estratégia.",
      },
      en: {
        institution: "Udemy",
        degree: "Mini MBA Technology",
        period: "2024",
        location: "Online",
        detail: "Technology management, digital product, leadership and strategy.",
      },
      es: {
        institution: "Udemy",
        degree: "Mini MBA Technology",
        period: "2024",
        location: "Online",
        detail: "Gestión de tecnología, producto digital, liderazgo y estrategia.",
      },
      he: {
        institution: "Udemy",
        degree: "Mini MBA Technology",
        period: "2024",
        location: "Online",
        detail: "Technology management, digital product, leadership and strategy.",
      },
    },
  },
];
