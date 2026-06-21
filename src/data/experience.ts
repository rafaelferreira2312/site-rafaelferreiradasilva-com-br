import type { Locale } from "./i18n";

export interface ExperienceItem {
  id: string;
  translations: Record<
    Locale,
    {
      role: string;
      company: string;
      period: string;
      stack: string;
      achievements: string[];
    }
  >;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "vancouver-tec",
    translations: {
      pt: {
        role: "Fundador & Desenvolvedor Full Stack Sênior",
        company: "Vancouver Tec Soluções em Tecnologia",
        period: "2018 — Presente",
        stack: "Next.js · Laravel · Node.js · React · Docker · AWS · VPS · CI/CD",
        achievements: [
          "Fundou agência digital no Rio de Janeiro focada em sites, sistemas, apps e DevOps",
          "Entregou projetos para Fiocruz/Fiotec e JBS/Seara (via GROWE)",
          "Mantém infraestrutura própria em VPS com CloudPanel no Ubuntu 24.04 LTS",
          "Desenvolve PROSPERA — automação de prospecção com WhatsApp e IA",
        ],
      },
      en: {
        role: "Founder & Senior Full Stack Developer",
        company: "Vancouver Tec Technology Solutions",
        period: "2018 — Present",
        stack: "Next.js · Laravel · Node.js · React · Docker · AWS · VPS · CI/CD",
        achievements: [
          "Founded digital agency in Rio de Janeiro focused on websites, systems, apps and DevOps",
          "Delivered projects for Fiocruz/Fiotec and JBS/Seara (via GROWE)",
          "Maintains own VPS infrastructure with CloudPanel on Ubuntu 24.04 LTS",
          "Building PROSPERA — prospecting automation with WhatsApp and AI",
        ],
      },
      es: {
        role: "Fundador & Desarrollador Full Stack Senior",
        company: "Vancouver Tec Soluciones en Tecnología",
        period: "2018 — Presente",
        stack: "Next.js · Laravel · Node.js · React · Docker · AWS · VPS · CI/CD",
        achievements: [
          "Fundó agencia digital en Río de Janeiro enfocada en sitios, sistemas, apps y DevOps",
          "Entregó proyectos para Fiocruz/Fiotec y JBS/Seara (vía GROWE)",
          "Mantiene infraestructura propia en VPS con CloudPanel en Ubuntu 24.04 LTS",
          "Desarrolla PROSPERA — automatización de prospección con WhatsApp e IA",
        ],
      },
      he: {
        role: "מייסד & Senior Full Stack Developer",
        company: "Vancouver Tec Technology Solutions",
        period: "2018 — היום",
        stack: "Next.js · Laravel · Node.js · React · Docker · AWS · VPS · CI/CD",
        achievements: [
          "ייסד סוכנות דיגיטלית ב-Rio de Janeiro",
          "מסר פרויקטים ל-Fiocruz/Fiotec ו-JBS/Seara (via GROWE)",
          "מנהל תשתית VPS עצמית עם CloudPanel על Ubuntu 24.04 LTS",
          "מפתח PROSPERA — אוטומציה של prospecting עם WhatsApp ו-AI",
        ],
      },
    },
  },
  {
    id: "protel",
    translations: {
      pt: {
        role: "Desenvolvedor Ruby on Rails",
        company: "Protel — RJ",
        period: "2022",
        stack: "Ruby on Rails · Docker · MySQL · Bootstrap · Capistrano · Sidekiq",
        achievements: [
          "Desenvolveu sistema financeiro robusto com Ruby on Rails",
          "Implementou deploy automatizado com Capistrano e filas Sidekiq",
          "Entregou soluções escaláveis com Docker e MySQL",
        ],
      },
      en: {
        role: "Ruby on Rails Developer",
        company: "Protel — RJ",
        period: "2022",
        stack: "Ruby on Rails · Docker · MySQL · Bootstrap · Capistrano · Sidekiq",
        achievements: [
          "Built robust financial system with Ruby on Rails",
          "Implemented automated deploy with Capistrano and Sidekiq queues",
          "Delivered scalable solutions with Docker and MySQL",
        ],
      },
      es: {
        role: "Desarrollador Ruby on Rails",
        company: "Protel — RJ",
        period: "2022",
        stack: "Ruby on Rails · Docker · MySQL · Bootstrap · Capistrano · Sidekiq",
        achievements: [
          "Desarrolló sistema financiero robusto con Ruby on Rails",
          "Implementó deploy automatizado con Capistrano y colas Sidekiq",
          "Entregó soluciones escalables con Docker y MySQL",
        ],
      },
      he: {
        role: "Ruby on Rails Developer",
        company: "Protel — RJ",
        period: "2022",
        stack: "Ruby on Rails · Docker · MySQL · Bootstrap · Capistrano · Sidekiq",
        achievements: [
          "פיתח מערכת פיננסית עם Ruby on Rails",
          "יישם deploy אוטומטי עם Capistrano ו-Sidekiq",
          "מסר פתרונות scalable עם Docker ו-MySQL",
        ],
      },
    },
  },
  {
    id: "atime",
    translations: {
      pt: {
        role: "Desenvolvedor Full Stack",
        company: "Atime — RJ",
        period: "2022",
        stack: "React · React Native · REST API · Trello",
        achievements: [
          "Liderou projeto de aplicativo de chat multi-plataforma",
          "Desenvolveu APIs RESTful e interfaces React/React Native",
          "Gerenciou entregas com metodologia ágil via Trello",
        ],
      },
      en: {
        role: "Full Stack Developer",
        company: "Atime — RJ",
        period: "2022",
        stack: "React · React Native · REST API · Trello",
        achievements: [
          "Led multi-platform chat application project",
          "Built RESTful APIs and React/React Native interfaces",
          "Managed deliveries with agile methodology via Trello",
        ],
      },
      es: {
        role: "Desarrollador Full Stack",
        company: "Atime — RJ",
        period: "2022",
        stack: "React · React Native · REST API · Trello",
        achievements: [
          "Lideró proyecto de aplicación de chat multi-plataforma",
          "Desarrolló APIs RESTful e interfaces React/React Native",
          "Gestionó entregas con metodología ágil vía Trello",
        ],
      },
      he: {
        role: "Full Stack Developer",
        company: "Atime — RJ",
        period: "2022",
        stack: "React · React Native · REST API · Trello",
        achievements: [
          "הנהיג פרויקט אפליקציית chat multi-platform",
          "פיתח RESTful APIs וממשקי React/React Native",
          "ניהל deliveries עם agile methodology",
        ],
      },
    },
  },
  {
    id: "iff",
    translations: {
      pt: {
        role: "Analista de Sistemas",
        company: "Instituto Fernandes Figueira (IFF) — Banco de Leite Humano",
        period: "2019 — 2021",
        stack: "PHP · Laravel · Linux · MySQL · Metodologias Ágeis",
        achievements: [
          "Liderou transição de PHP estruturado para frameworks modernos",
          "Estabeleceu ambientes de desenvolvimento e homologação",
          "Garantiu qualidade com documentação detalhada e entregas ágeis",
        ],
      },
      en: {
        role: "Systems Analyst",
        company: "Instituto Fernandes Figueira (IFF) — Human Milk Bank",
        period: "2019 — 2021",
        stack: "PHP · Laravel · Linux · MySQL · Agile Methodologies",
        achievements: [
          "Led transition from structured PHP to modern frameworks",
          "Established development and staging environments",
          "Ensured quality with detailed documentation and agile delivery",
        ],
      },
      es: {
        role: "Analista de Sistemas",
        company: "Instituto Fernandes Figueira (IFF) — Banco de Leche Humana",
        period: "2019 — 2021",
        stack: "PHP · Laravel · Linux · MySQL · Metodologías Ágiles",
        achievements: [
          "Lideró transición de PHP estructurado a frameworks modernos",
          "Estableció entornos de desarrollo y homologación",
          "Garantizó calidad con documentación detallada y entregas ágiles",
        ],
      },
      he: {
        role: "Systems Analyst",
        company: "Instituto Fernandes Figueira (IFF) — Human Milk Bank",
        period: "2019 — 2021",
        stack: "PHP · Laravel · Linux · MySQL · Agile",
        achievements: [
          "הוביל מעבר מ-PHP structured ל-frameworks מודרניים",
          "הקים סביבות development ו-staging",
          "הבטיח quality עם documentation מפורט",
        ],
      },
    },
  },
  {
    id: "fiocruz",
    translations: {
      pt: {
        role: "Programador PHP",
        company: "Fiocruz — Fundação Oswaldo Cruz",
        period: "2016 — 2018",
        stack: "PHP · Laravel · Linux · MySQL · DevOps",
        achievements: [
          "Desenvolveu sistemas eficientes e escaláveis em ambiente Linux",
          "Implementou práticas DevOps e metodologias ágeis",
          "Contribuiu para entregas de alta qualidade em sistemas institucionais",
        ],
      },
      en: {
        role: "PHP Programmer",
        company: "Fiocruz — Oswaldo Cruz Foundation",
        period: "2016 — 2018",
        stack: "PHP · Laravel · Linux · MySQL · DevOps",
        achievements: [
          "Developed efficient and scalable systems in Linux environment",
          "Implemented DevOps practices and agile methodologies",
          "Contributed to high-quality deliveries in institutional systems",
        ],
      },
      es: {
        role: "Programador PHP",
        company: "Fiocruz — Fundación Oswaldo Cruz",
        period: "2016 — 2018",
        stack: "PHP · Laravel · Linux · MySQL · DevOps",
        achievements: [
          "Desarrolló sistemas eficientes y escalables en entorno Linux",
          "Implementó prácticas DevOps y metodologías ágiles",
          "Contribuyó a entregas de alta calidad en sistemas institucionales",
        ],
      },
      he: {
        role: "PHP Programmer",
        company: "Fiocruz — Oswaldo Cruz Foundation",
        period: "2016 — 2018",
        stack: "PHP · Laravel · Linux · MySQL · DevOps",
        achievements: [
          "פיתח מערכות efficient ו-scalable בסביבת Linux",
          "יישם DevOps practices ו-agile methodologies",
          "תרם ל-deliveries באיכות גבוהה",
        ],
      },
    },
  },
];

export const CV_PDF = "/assets/pdf/Curriculo-Rafael-Ferreira-da-Silva-2026.pdf";
export const PROFILE_IMAGE = "/assets/img/rafael-ferreira-2026.png";
