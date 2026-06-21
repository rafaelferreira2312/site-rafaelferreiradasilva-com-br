import type { Locale } from "./i18n";

export interface Project {
  id: string;
  slug: string;
  status: "open-source" | "coming-soon";
  stack: string;
  github?: string;
  demo?: string;
  featured: boolean;
  translations: Record<
    Locale,
    {
      name: string;
      challenge: string;
      architecture: string;
      result: string;
    }
  >;
}

export const projects: Project[] = [
  {
    id: "devforge",
    slug: "devforge",
    status: "open-source",
    stack: "HTML · CSS · JavaScript · Shell · Docker",
    demo: "https://rafaelferreira2312.github.io/devforge/",
    featured: true,
    translations: {
      pt: {
        name: "DevForge",
        challenge:
          "Desenvolvedores perdem horas configurando ambientes locais para 15+ stacks diferentes, sem documentação centralizada.",
        architecture:
          "Plataforma estática modular com UI dark mode, busca global, scripts shell/PowerShell automatizados e suporte Docker opcional por stack.",
        result:
          "18+ stars no GitHub. Instalação com 1 comando. Reduz setup de ambiente de horas para minutos.",
      },
      en: {
        name: "DevForge",
        challenge:
          "Developers waste hours setting up local environments for 15+ different stacks without centralized documentation.",
        architecture:
          "Modular static platform with dark mode UI, global search, automated shell/PowerShell scripts and optional Docker per stack.",
        result:
          "18+ GitHub stars. One-command installation. Reduces environment setup from hours to minutes.",
      },
      es: {
        name: "DevForge",
        challenge:
          "Los desarrolladores pierden horas configurando entornos locales para 15+ stacks sin documentación centralizada.",
        architecture:
          "Plataforma estática modular con UI dark mode, búsqueda global, scripts shell/PowerShell automatizados y Docker opcional por stack.",
        result:
          "18+ stars en GitHub. Instalación con 1 comando. Reduce setup de horas a minutos.",
      },
      he: {
        name: "DevForge",
        challenge:
          "מפתחים מבזבזים שעות בהגדרת סביבות מקומיות ל-15+ stacks ללא תיעוד מרכזי.",
        architecture:
          "פלטפורמה סטטית מודולרית עם UI dark mode, חיפוש גלובלי, scripts אוטומטיים ו-Docker אופציונלי.",
        result: "18+ stars ב-GitHub. התקנה בפקודה אחת. מקצר setup משעות לדקות.",
      },
    },
  },
  {
    id: "forge",
    slug: "forge",
    status: "open-source",
    stack: "Rust · Tokio · SQLite · HTML · TypeScript",
    demo: "https://rafaelferreiradasilva.com.br/forge/",
    featured: true,
    translations: {
      pt: {
        name: "Forge",
        challenge:
          "Usuários escrevem prompts vagos e perdem qualidade nas respostas de IA — sem contexto de domínio, stack ou intenção real.",
        architecture:
          "Engenheiro de prompt automático em Rust com pipeline de 8 estágios (< 1ms), aprendizado adaptativo, suporte multimodal e multi-provider (Ollama, Groq, Claude, GPT).",
        result:
          "Landing page interativa hospedada no VPS. Binário leve (~8MB RAM) que transforma ideias simples em prompts de engenheiro sênior.",
      },
      en: {
        name: "Forge",
        challenge:
          "Users write vague prompts and lose quality in AI responses — without domain context, stack or real intent.",
        architecture:
          "Automatic prompt engineer in Rust with 8-stage pipeline (< 1ms), adaptive learning, multimodal support and multi-provider (Ollama, Groq, Claude, GPT).",
        result:
          "Interactive landing page hosted on VPS. Lightweight binary (~8MB RAM) that turns simple ideas into senior engineer prompts.",
      },
      es: {
        name: "Forge",
        challenge:
          "Los usuarios escriben prompts vagos y pierden calidad en respuestas de IA — sin contexto de dominio, stack o intención real.",
        architecture:
          "Ingeniero de prompt automático en Rust con pipeline de 8 etapas (< 1ms), aprendizaje adaptativo, soporte multimodal y multi-provider.",
        result:
          "Landing page interactiva alojada en VPS. Binario ligero (~8MB RAM) que transforma ideas simples en prompts de ingeniero senior.",
      },
      he: {
        name: "Forge",
        challenge: "משתמשים כותבים prompts מעורפלים ומאבדים איכות בתשובות AI.",
        architecture:
          "Prompt engineer אוטומטי ב-Rust עם pipeline של 8 שלבים (< 1ms), adaptive learning ו-multi-provider.",
        result: "Landing page אינטראקטיבי על VPS. binary קל (~8MB RAM).",
      },
    },
  },
  {
    id: "govstatus",
    slug: "govstatus",
    status: "coming-soon",
    stack: "Next.js · TypeScript · PostgreSQL · Redis · API REST",
    featured: true,
    translations: {
      pt: {
        name: "GovStatus",
        challenge:
          "Cidadãos não têm visibilidade unificada do status de serviços governamentais digitais (Receita, INSS, Detran).",
        architecture:
          "Plataforma open source de monitoramento com health checks automatizados, dashboard público, API REST e alertas via webhook.",
        result:
          "Em desenvolvimento. Objetivo: transparência digital e redução de chamadas de suporte em 60%.",
      },
      en: {
        name: "GovStatus",
        challenge:
          "Citizens lack unified visibility into digital government service status (Tax, Social Security, DMV).",
        architecture:
          "Open source monitoring platform with automated health checks, public dashboard, REST API and webhook alerts.",
        result:
          "In development. Goal: digital transparency and 60% reduction in support calls.",
      },
      es: {
        name: "GovStatus",
        challenge:
          "Los ciudadanos no tienen visibilidad unificada del estado de servicios gubernamentales digitales.",
        architecture:
          "Plataforma open source de monitoreo con health checks automatizados, dashboard público, API REST y alertas webhook.",
        result:
          "En desarrollo. Objetivo: transparencia digital y reducción del 60% en llamadas de soporte.",
      },
      he: {
        name: "GovStatus",
        challenge: "לאזרחים אין נראות מאוחדת לסטטוס שירותים ממשלתיים דיגיטליים.",
        architecture:
          "פלטפורמת ניטור open source עם health checks, dashboard ציבורי, REST API והתראות webhook.",
        result: "בפיתוח. מטרה: שקיפות דיגיטלית והפחתת 60% בפניות תמיכה.",
      },
    },
  },
  {
    id: "pdv",
    slug: "pdv-multiplataforma",
    status: "open-source",
    stack: "Electron · Node.js · PostgreSQL · Redis · TypeScript",
    github: "https://github.com/rafaelferreira2312/pdv-multiplataforma",
    featured: false,
    translations: {
      pt: {
        name: "PDV Multiplataforma",
        challenge:
          "Pequenos comércios precisam de um PDV que funcione offline em Windows, Linux, macOS, iOS e Android.",
        architecture:
          "Electron + Node.js backend com PostgreSQL, Redis para cache, emissão NF-e e controle de estoque em Docker.",
        result: "Sistema completo multi-plataforma com fluxo de caixa integrado e deploy containerizado.",
      },
      en: {
        name: "PDV Multiplataforma",
        challenge:
          "Small businesses need a POS that works offline on Windows, Linux, macOS, iOS and Android.",
        architecture:
          "Electron + Node.js backend with PostgreSQL, Redis cache, NF-e issuance and inventory in Docker.",
        result: "Complete multi-platform system with integrated cash flow and containerized deploy.",
      },
      es: {
        name: "PDV Multiplataforma",
        challenge:
          "Pequeños comercios necesitan un PDV offline en Windows, Linux, macOS, iOS y Android.",
        architecture:
          "Electron + Node.js con PostgreSQL, Redis, emisión NF-e e inventario en Docker.",
        result: "Sistema multi-plataforma completo con flujo de caja integrado.",
      },
      he: {
        name: "PDV Multiplataforma",
        challenge: "עסקים קטנים צריכים POS שעובד offline בכל הפלטפורמות.",
        architecture: "Electron + Node.js עם PostgreSQL, Redis, NF-e ו-inventory ב-Docker.",
        result: "מערכת multi-platform מלאה עם cash flow משולב.",
      },
    },
  },
  {
    id: "clone-uber",
    slug: "clone-uber",
    status: "open-source",
    stack: "React Native · NestJS · PostgreSQL · Firebase · Google Maps",
    github: "https://github.com/rafaelferreira2312/clone-uber",
    featured: false,
    translations: {
      pt: {
        name: "Clone Uber",
        challenge:
          "Demonstrar capacidade fullstack mobile com rastreamento em tempo real, pagamentos e painel admin.",
        architecture:
          "React Native apps (passageiro/motorista) + NestJS API + PostgreSQL + Firebase realtime + Google Maps + Stripe/Mercado Pago.",
        result:
          "Plataforma de mobilidade completa com geolocalização live, matching de corridas e split de pagamento.",
      },
      en: {
        name: "Uber Clone",
        challenge:
          "Demonstrate fullstack mobile capability with real-time tracking, payments and admin panel.",
        architecture:
          "React Native apps (rider/driver) + NestJS API + PostgreSQL + Firebase realtime + Google Maps + Stripe/Mercado Pago.",
        result:
          "Complete mobility platform with live geolocation, ride matching and payment split.",
      },
      es: {
        name: "Clone Uber",
        challenge:
          "Demostrar capacidad fullstack mobile con rastreo en tiempo real, pagos y panel admin.",
        architecture:
          "React Native + NestJS API + PostgreSQL + Firebase + Google Maps + Stripe/Mercado Pago.",
        result: "Plataforma de movilidad completa con geolocalización live y matching de viajes.",
      },
      he: {
        name: "Uber Clone",
        challenge: "הדגמת יכולת fullstack mobile עם מעקב real-time, תשלומים ו-admin panel.",
        architecture:
          "React Native + NestJS + PostgreSQL + Firebase + Google Maps + Stripe/Mercado Pago.",
        result: "פלטפורמת mobility מלאה עם geolocation live ו-ride matching.",
      },
    },
  },
  {
    id: "ead",
    slug: "plataformas-cursos-ead",
    status: "open-source",
    stack: "Node.js · Next.js · Python · PostgreSQL · AWS",
    github: "https://github.com/rafaelferreira2312/plataformas-cursos-ead",
    featured: false,
    translations: {
      pt: {
        name: "Plataforma EAD",
        challenge:
          "Instituições precisam de LMS estilo Netflix/Udemy com streaming, matrículas e gestão de conteúdo.",
        architecture:
          "Next.js frontend + Node.js API + Python workers para transcodificação + PostgreSQL + AWS S3/CloudFront.",
        result: "Plataforma educacional completa com CDN, progresso do aluno e certificados automáticos.",
      },
      en: {
        name: "EAD Platform",
        challenge:
          "Institutions need a Netflix/Udemy-style LMS with streaming, enrollment and content management.",
        architecture:
          "Next.js frontend + Node.js API + Python transcoding workers + PostgreSQL + AWS S3/CloudFront.",
        result: "Complete educational platform with CDN, student progress and automatic certificates.",
      },
      es: {
        name: "Plataforma EAD",
        challenge:
          "Instituciones necesitan LMS estilo Netflix/Udemy con streaming, matrículas y gestión de contenido.",
        architecture:
          "Next.js + Node.js API + Python workers + PostgreSQL + AWS S3/CloudFront.",
        result: "Plataforma educacional completa con CDN, progreso y certificados automáticos.",
      },
      he: {
        name: "EAD Platform",
        challenge: "מוסדות צריכים LMS בסגנון Netflix/Udemy עם streaming וניהול תוכן.",
        architecture: "Next.js + Node.js + Python workers + PostgreSQL + AWS S3/CloudFront.",
        result: "פלטפורמה חינוכית מלאה עם CDN, progress ו-certificates אוטומטיים.",
      },
    },
  },
];
