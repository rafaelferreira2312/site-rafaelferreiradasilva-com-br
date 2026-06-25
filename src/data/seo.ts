export const SITE_URL = "https://rafaelferreiradasilva.com.br";

/** Perfil LinkedIn oficial — único em todo o site e schema.org */
export const LINKEDIN_URL = "https://www.linkedin.com/in/rafael-ferreira-dev";

export const GITHUB_URL = "https://github.com/rafaelferreira2312";

export const EMAIL = "rafaelferreira2312@gmail.com";

export const PERSON_NAME = "Rafael Ferreira da Silva";

export const PROFILE_IMAGE_URL = `${SITE_URL}/assets/img/rafael-ferreira-2026.png`;

/** Rotas HTML indexáveis (trailing slash alinhado ao next.config) */
export const SITEMAP_ROUTES: Array<{
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/forge/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gov-status/", changeFrequency: "daily", priority: 0.8 },
];
