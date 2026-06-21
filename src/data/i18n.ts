export type Locale = "pt" | "en" | "es" | "he";

export const locales: Locale[] = ["pt", "en", "es", "he"];

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  he: "HE",
};

export const rtlLocales: Locale[] = ["he"];

export interface Translation {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    architecture: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  metrics: {
    title: string;
    items: { value: string; label: string; detail: string }[];
  };
  experience: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    challenge: string;
    architecture: string;
    result: string;
    viewRepo: string;
    viewDemo: string;
    comingSoon: string;
    inProduction: string;
    openSource: string;
  };
  architecture: {
    title: string;
    subtitle: string;
    layers: { name: string; description: string }[];
    patterns: string[];
    cta: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: { name: string; items: string[] }[];
    certificationsTitle: string;
    viewCertificate: string;
    downloadCvPt: string;
    downloadCvEn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    linkedin: string;
    orConnect: string;
  };
  footer: {
    copyright: string;
    architecture: string;
    lighthouse: string;
    performance: string;
    accessibility: string;
    bestPractices: string;
    seo: string;
  };
}

export const translations: Record<Locale, Translation> = {
  pt: {
    meta: {
      title: "Rafael Ferreira da Silva | Tech Lead & Senior Fullstack Developer",
      description:
        "Desenvolvedor Full Stack Sênior com 8+ anos de experiência. Especialista em Laravel, Livewire, Node.js, IA e automação. Atualmente na Andv.",
      ogTitle: "Rafael Ferreira da Silva — Tech Lead & Senior Fullstack",
      ogDescription:
        "Desenvolvedor Full Stack Sênior com 8+ anos construindo sistemas reais para Fiocruz, JBS/Seara e clientes B2B.",
    },
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      architecture: "Arquitetura",
      contact: "Contato",
      downloadCv: "Baixar CV",
    },
    hero: {
      badge: "Senior Full Stack Engineer · Andv",
      title: "Rafael Ferreira da Silva",
      subtitle:
        "Desenvolvedor Full Stack Sênior · Andv (IA & Automação) · Laravel · Livewire · Node.js · Mobile · Projetos Fiocruz, JBS/Seara e Vancouver Tec.",
      ctaPrimary: "Ver Casos de Sucesso",
      ctaSecondary: "Baixar CV / Resumé",
    },
    metrics: {
      title: "Métricas de Impacto",
      items: [
        {
          value: "8+",
          label: "Anos de Experiência",
          detail: "Trajetória em desenvolvimento web, sistemas e DevOps desde 2016",
        },
        {
          value: "100+",
          label: "Projetos Entregues",
          detail: "Sites, sistemas, apps e automações para clientes B2B e B2C",
        },
        {
          value: "40+",
          label: "Certificações",
          detail: "AWS, Azure, Cisco, IBM, Microsoft, Udemy e Senai",
        },
        {
          value: "52",
          label: "PDFs de Credenciais",
          detail: "Certificados internacionais disponíveis para consulta no portfólio",
        },
      ],
    },
    experience: {
      title: "Experiência & Trajetória",
      subtitle: "Histórico profissional — Andv, Vancouver Tec, Fiocruz, IFF, Atime e Protel",
    },
    projects: {
      title: "Projetos de Elite & Cases de Sucesso",
      subtitle: "Open source e engenharia de software de alto impacto",
      challenge: "Desafio",
      architecture: "Arquitetura",
      result: "Resultado",
      viewRepo: "Ver repositório",
      viewDemo: "Ver site",
      comingSoon: "Em breve",
      inProduction: "Open Source",
      openSource: "Open Source",
    },
    architecture: {
      title: "The Architecture Playground",
      subtitle: "Design de sistemas enterprise — do edge ao banco de dados",
      layers: [
        { name: "Cloudflare / WAF", description: "CDN, DDoS protection, SSL termination" },
        { name: "API Gateway", description: "Rate limiting, auth, routing" },
        { name: "Message Queues", description: "Redis / RabbitMQ — async processing" },
        { name: "Microservices", description: "Isolated domains, DDD bounded contexts" },
        { name: "Database Layer", description: "MySQL · PostgreSQL · Redis cache" },
      ],
      patterns: ["DDD", "SOLID", "Event-Driven", "CQRS", "Clean Architecture", "12-Factor App"],
      cta: "Explorar Arquitetura de Sistemas",
    },
    skills: {
      title: "Certificações & Skills",
      subtitle: "Stack técnica validada por certificações internacionais",
      categories: [
        {
          name: "Backend",
          items: ["PHP / Laravel", "Node.js", "Python", "Ruby on Rails", "Java", "C# / .NET"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"],
        },
        {
          name: "Banco de Dados & Infra",
          items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Nginx", "CI/CD"],
        },
        {
          name: "Liderança",
          items: ["Scrum / Agile", "Gestão de Squads", "Tech Lead", "Code Review", "Mentoria"],
        },
      ],
      certificationsTitle: "Certificações",
      viewCertificate: "Ver certificado",
      downloadCvPt: "CV em Português",
      downloadCvEn: "CV in English",
    },
    contact: {
      title: "Vamos Conversar",
      subtitle: "Disponível para oportunidades de Tech Lead, consultoria e projetos desafiadores",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar Mensagem",
      success: "Redirecionando para seu cliente de e-mail...",
      linkedin: "Conectar no LinkedIn",
      orConnect: "Ou conecte-se diretamente",
    },
    footer: {
      copyright: "© 2026 Rafael Ferreira da Silva. Todos os direitos reservados.",
      architecture: "Static SSG · Next.js 15 · Compiled in ~0.4s",
      lighthouse: "Lighthouse Score",
      performance: "Performance",
      accessibility: "Acessibilidade",
      bestPractices: "Boas Práticas",
      seo: "SEO",
    },
  },

  en: {
    meta: {
      title: "Rafael Ferreira da Silva | Tech Lead & Senior Fullstack Developer",
      description:
        "Senior Full Stack Developer with 8+ years of experience. Expert in Laravel, Livewire, Node.js, AI and automation. Currently at Andv.",
      ogTitle: "Rafael Ferreira da Silva — Tech Lead & Senior Fullstack",
      ogDescription:
        "Senior Full Stack Developer with 8+ years building real systems for Fiocruz, JBS/Seara and B2B clients.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      architecture: "Architecture",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      badge: "Senior Full Stack Engineer · Andv",
      title: "Rafael Ferreira da Silva",
      subtitle:
        "Senior Full Stack Developer · Andv (AI & Automation) · Laravel · Livewire · Node.js · Mobile · Fiocruz, JBS/Seara and Vancouver Tec projects.",
      ctaPrimary: "View Success Cases",
      ctaSecondary: "Download CV / Resumé",
    },
    metrics: {
      title: "Impact Metrics",
      items: [
        {
          value: "8+",
          label: "Years of Experience",
          detail: "Web development, systems and DevOps trajectory since 2016",
        },
        {
          value: "100+",
          label: "Projects Delivered",
          detail: "Websites, systems, apps and automations for B2B and B2C clients",
        },
        {
          value: "40+",
          label: "Certifications",
          detail: "AWS, Azure, Cisco, IBM, Microsoft, Udemy and Senai",
        },
        {
          value: "52",
          label: "Credential PDFs",
          detail: "International certificates available in the portfolio",
        },
      ],
    },
    experience: {
      title: "Experience & Journey",
      subtitle: "Professional history — Andv, Vancouver Tec, Fiocruz, IFF, Atime and Protel",
    },
    projects: {
      title: "Elite Projects & Success Cases",
      subtitle: "Open source and high-impact software engineering",
      challenge: "Challenge",
      architecture: "Architecture",
      result: "Result",
      viewRepo: "View repository",
      viewDemo: "View site",
      comingSoon: "Coming soon",
      inProduction: "Open Source",
      openSource: "Open Source",
    },
    architecture: {
      title: "The Architecture Playground",
      subtitle: "Enterprise system design — from edge to database",
      layers: [
        { name: "Cloudflare / WAF", description: "CDN, DDoS protection, SSL termination" },
        { name: "API Gateway", description: "Rate limiting, auth, routing" },
        { name: "Message Queues", description: "Redis / RabbitMQ — async processing" },
        { name: "Microservices", description: "Isolated domains, DDD bounded contexts" },
        { name: "Database Layer", description: "MySQL · PostgreSQL · Redis cache" },
      ],
      patterns: ["DDD", "SOLID", "Event-Driven", "CQRS", "Clean Architecture", "12-Factor App"],
      cta: "Explore System Architecture",
    },
    skills: {
      title: "Certifications & Skills",
      subtitle: "Technical stack validated by international certifications",
      categories: [
        {
          name: "Backend",
          items: ["PHP / Laravel", "Node.js", "Python", "Ruby on Rails", "Java", "C# / .NET"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"],
        },
        {
          name: "Database & Infra",
          items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Nginx", "CI/CD"],
        },
        {
          name: "Leadership",
          items: ["Scrum / Agile", "Squad Management", "Tech Lead", "Code Review", "Mentoring"],
        },
      ],
      certificationsTitle: "Certifications",
      viewCertificate: "View certificate",
      downloadCvPt: "CV in Portuguese",
      downloadCvEn: "CV in English",
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Available for Tech Lead opportunities, consulting and challenging projects",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Redirecting to your email client...",
      linkedin: "Connect on LinkedIn",
      orConnect: "Or connect directly",
    },
    footer: {
      copyright: "© 2026 Rafael Ferreira da Silva. All rights reserved.",
      architecture: "Static SSG · Next.js 15 · Compiled in ~0.4s",
      lighthouse: "Lighthouse Score",
      performance: "Performance",
      accessibility: "Accessibility",
      bestPractices: "Best Practices",
      seo: "SEO",
    },
  },

  es: {
    meta: {
      title: "Rafael Ferreira da Silva | Tech Lead & Senior Fullstack Developer",
      description:
        "Desarrollador Full Stack Senior con 8+ años de experiencia. Experto en Laravel, Livewire, Node.js, IA y automatización. Actualmente en Andv.",
      ogTitle: "Rafael Ferreira da Silva — Tech Lead & Senior Fullstack",
      ogDescription:
        "Desarrollador Full Stack Senior con 8+ años construyendo sistemas reales para Fiocruz, JBS/Seara y clientes B2B.",
    },
    nav: {
      about: "Sobre",
      experience: "Experiencia",
      projects: "Proyectos",
      architecture: "Arquitectura",
      contact: "Contacto",
      downloadCv: "Descargar CV",
    },
    hero: {
      badge: "Senior Full Stack Engineer · Andv",
      title: "Rafael Ferreira da Silva",
      subtitle:
        "Desarrollador Full Stack Senior · Andv (IA y Automatización) · Laravel · Livewire · Node.js · Mobile · Proyectos Fiocruz, JBS/Seara y Vancouver Tec.",
      ctaPrimary: "Ver Casos de Éxito",
      ctaSecondary: "Descargar CV / Resumé",
    },
    metrics: {
      title: "Métricas de Impacto",
      items: [
        {
          value: "8+",
          label: "Años de Experiencia",
          detail: "Trayectoria en desarrollo web, sistemas y DevOps desde 2016",
        },
        {
          value: "100+",
          label: "Proyectos Entregados",
          detail: "Sitios, sistemas, apps y automatizaciones para clientes B2B y B2C",
        },
        {
          value: "40+",
          label: "Certificaciones",
          detail: "AWS, Azure, Cisco, IBM, Microsoft, Udemy y Senai",
        },
        {
          value: "52",
          label: "PDFs de Credenciales",
          detail: "Certificados internacionales disponibles en el portafolio",
        },
      ],
    },
    experience: {
      title: "Experiencia & Trayectoria",
      subtitle: "Historial profesional — Andv, Vancouver Tec, Fiocruz, IFF, Atime y Protel",
    },
    projects: {
      title: "Proyectos de Elite & Casos de Éxito",
      subtitle: "Open source e ingeniería de software de alto impacto",
      challenge: "Desafío",
      architecture: "Arquitectura",
      result: "Resultado",
      viewRepo: "Ver repositorio",
      viewDemo: "Ver sitio",
      comingSoon: "Próximamente",
      inProduction: "Open Source",
      openSource: "Open Source",
    },
    architecture: {
      title: "The Architecture Playground",
      subtitle: "Diseño de sistemas enterprise — del edge a la base de datos",
      layers: [
        { name: "Cloudflare / WAF", description: "CDN, protección DDoS, terminación SSL" },
        { name: "API Gateway", description: "Rate limiting, auth, routing" },
        { name: "Message Queues", description: "Redis / RabbitMQ — procesamiento async" },
        { name: "Microservices", description: "Dominios aislados, bounded contexts DDD" },
        { name: "Database Layer", description: "MySQL · PostgreSQL · Redis cache" },
      ],
      patterns: ["DDD", "SOLID", "Event-Driven", "CQRS", "Clean Architecture", "12-Factor App"],
      cta: "Explorar Arquitectura de Sistemas",
    },
    skills: {
      title: "Certificaciones & Skills",
      subtitle: "Stack técnica validada por certificaciones internacionales",
      categories: [
        {
          name: "Backend",
          items: ["PHP / Laravel", "Node.js", "Python", "Ruby on Rails", "Java", "C# / .NET"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"],
        },
        {
          name: "Base de Datos & Infra",
          items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Nginx", "CI/CD"],
        },
        {
          name: "Liderazgo",
          items: ["Scrum / Agile", "Gestión de Squads", "Tech Lead", "Code Review", "Mentoría"],
        },
      ],
      certificationsTitle: "Certificaciones",
      viewCertificate: "Ver certificado",
      downloadCvPt: "CV en Portugués",
      downloadCvEn: "CV en Inglés",
    },
    contact: {
      title: "Hablemos",
      subtitle: "Disponible para oportunidades de Tech Lead, consultoría y proyectos desafiantes",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
      success: "Redirigiendo a su cliente de correo...",
      linkedin: "Conectar en LinkedIn",
      orConnect: "O conéctese directamente",
    },
    footer: {
      copyright: "© 2026 Rafael Ferreira da Silva. Todos los derechos reservados.",
      architecture: "Static SSG · Next.js 15 · Compiled in ~0.4s",
      lighthouse: "Lighthouse Score",
      performance: "Performance",
      accessibility: "Accesibilidad",
      bestPractices: "Buenas Prácticas",
      seo: "SEO",
    },
  },

  he: {
    meta: {
      title: "רafael Ferreira da Silva | Tech Lead & Senior Fullstack Developer",
      description:
        "Senior Full Stack Developer עם 8+ שנות ניסיון. מומחה ב-Laravel, Livewire, Node.js, AI ו-automation. כיום ב-Andv.",
      ogTitle: "Rafael Ferreira da Silva — Tech Lead & Senior Fullstack",
      ogDescription: "Senior Full Stack Developer עם 8+ שנים של בניית מערכות אמיתיות ל-Fiocruz, JBS/Seara ולקוחות B2B.",
    },
    nav: {
      about: "אודות",
      experience: "ניסיון",
      projects: "פרויקטים",
      architecture: "ארכיטקטורה",
      contact: "צור קשר",
      downloadCv: "הורד קורות חיים",
    },
    hero: {
      badge: "Senior Full Stack Engineer · Andv",
      title: "Rafael Ferreira da Silva",
      subtitle:
        "Senior Full Stack Developer · Andv (AI & Automation) · Laravel · Livewire · Node.js · Mobile",
      ctaPrimary: "צפה במקרי הצלחה",
      ctaSecondary: "הורד קורות חיים",
    },
    metrics: {
      title: "מדדי השפעה",
      items: [
        { value: "8+", label: "שנות ניסיון", detail: "מסלול בפיתוח web, systems ו-DevOps מ-2016" },
        { value: "100+", label: "פרויקטים", detail: "אתרים, מערכות, apps ו-automations" },
        { value: "40+", label: "הסמכות", detail: "AWS, Azure, Cisco, IBM, Microsoft, Udemy, Senai" },
        { value: "52", label: "PDFs", detail: "תעודות בינלאומיות זמינות בפורטפolio" },
      ],
    },
    experience: {
      title: "ניסיון & מסלול",
      subtitle: "היסטוריה מקצועית — Andv, Vancouver Tec, Fiocruz, IFF, Atime ו-Protel",
    },
    projects: {
      title: "פרויקטים מובילים & מקרי הצלחה",
      subtitle: "קוד פתוח והנדסת תוכנה בעלת השפעה",
      challenge: "אתגר",
      architecture: "ארכיטקטורה",
      result: "תוצאה",
      viewRepo: "צפה במאגר",
      viewDemo: "פתח אתר",
      comingSoon: "בקרוב",
      inProduction: "קוד פתוח",
      openSource: "קוד פתוח",
    },
    architecture: {
      title: "The Architecture Playground",
      subtitle: "עיצוב מערכות enterprise — מה-edge לבסיס הנתונים",
      layers: [
        { name: "Cloudflare / WAF", description: "CDN, הגנה מ-DDoS, SSL termination" },
        { name: "API Gateway", description: "Rate limiting, auth, routing" },
        { name: "Message Queues", description: "Redis / RabbitMQ — עיבוד async" },
        { name: "Microservices", description: "דומיינים מבודדים, bounded contexts DDD" },
        { name: "Database Layer", description: "MySQL · PostgreSQL · Redis cache" },
      ],
      patterns: ["DDD", "SOLID", "Event-Driven", "CQRS", "Clean Architecture", "12-Factor App"],
      cta: "חקור ארכיטקטורת מערכות",
    },
    skills: {
      title: "הסמכות & מיומנויות",
      subtitle: "Stack טכני מאומת על ידי הסמכות בינלאומיות",
      categories: [
        {
          name: "Backend",
          items: ["PHP / Laravel", "Node.js", "Python", "Ruby on Rails", "Java", "C# / .NET"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"],
        },
        {
          name: "DB & Infra",
          items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Nginx", "CI/CD"],
        },
        {
          name: "מנהיגות",
          items: ["Scrum / Agile", "ניהול Squads", "Tech Lead", "Code Review", "חונכות"],
        },
      ],
      certificationsTitle: "הסמכות",
      viewCertificate: "צפה בתעודה",
      downloadCvPt: "קורות חיים בפורטוגזית",
      downloadCvEn: "קורות חיים באנגלית",
    },
    contact: {
      title: "בואו נדבר",
      subtitle: "זמין להזדמנויות Tech Lead, ייעוץ ופרויקטים מאתגרים",
      name: "שם",
      email: "אימייל",
      message: "הודעה",
      send: "שלח הודעה",
      success: "מפנה ללקוח האימייל שלך...",
      linkedin: "התחבר ב-LinkedIn",
      orConnect: "או התחבר ישירות",
    },
    footer: {
      copyright: "© 2026 Rafael Ferreira da Silva. כל הזכויות שמורות.",
      architecture: "Static SSG · Next.js 15 · Compiled in ~0.4s",
      lighthouse: "Lighthouse Score",
      performance: "Performance",
      accessibility: "נגישות",
      bestPractices: "Best Practices",
      seo: "SEO",
    },
  },
};
