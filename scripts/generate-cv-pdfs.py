#!/usr/bin/env python3
"""Generate ATS-friendly CV PDFs (PT + EN) for Rafael Ferreira da Silva."""

from __future__ import annotations

from pathlib import Path

from fpdf import FPDF

OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "assets" / "pdf"
HTDOCS_DIR = Path("/home/rafaelferreiradasilva/htdocs/rafaelferreiradasilva.com.br/assets/pdf")

FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
FONT_REGULAR = str(FONT_DIR / "DejaVuSans.ttf")
FONT_BOLD = str(FONT_DIR / "DejaVuSans-Bold.ttf")

BLUE = (173, 216, 230)
BLACK = (0, 0, 0)
GRAY = (60, 60, 60)


class ATSResume(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=14)
        self.set_margins(18, 16, 18)
        self.add_font("DejaVu", "", FONT_REGULAR)
        self.add_font("DejaVu", "B", FONT_BOLD)

    @property
    def content_width(self) -> float:
        return self.w - self.l_margin - self.r_margin

    def ensure_space(self, height: float) -> None:
        if self.get_y() + height > self.page_break_trigger:
            self.add_page()

    def header_block(self, name: str, contact: str) -> None:
        self.set_font("DejaVu", "B", 20)
        self.cell(0, 10, name, align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(1)
        self.set_font("DejaVu", "", 9)
        self.set_text_color(*GRAY)
        self.set_x(self.l_margin)
        self.multi_cell(self.content_width, 4.5, contact, align="C")
        self.set_text_color(*BLACK)
        self.ln(4)

    def section(self, title: str) -> None:
        self.ensure_space(14)
        self.set_fill_color(*BLUE)
        self.set_font("DejaVu", "B", 10)
        self.set_x(self.l_margin)
        self.cell(self.content_width, 7, f"  {title}  ", align="C", fill=True, new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def body_text(self, text: str) -> None:
        self.set_font("DejaVu", "", 10)
        self.set_x(self.l_margin)
        self.multi_cell(self.content_width, 5, text)
        self.ln(2)

    def job(self, role: str, period: str, company: str, bullets: list[str]) -> None:
        self.ensure_space(18)
        w = self.content_width
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B", 10)
        self.cell(w * 0.72, 5, role)
        self.set_font("DejaVu", "", 10)
        self.cell(w * 0.28, 5, period, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_font("DejaVu", "", 9)
        self.set_text_color(*GRAY)
        self.set_x(self.l_margin)
        self.multi_cell(w, 5, company)
        self.set_text_color(*BLACK)
        self.ln(1)
        self.set_font("DejaVu", "", 9.5)
        for bullet in bullets:
            self.ensure_space(6)
            self.set_x(self.l_margin)
            self.multi_cell(w, 4.8, f"- {bullet}")
        self.ln(2)

    def education_item(self, institution: str, period: str, degree: str) -> None:
        self.ensure_space(12)
        w = self.content_width
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B", 10)
        self.cell(w * 0.72, 5, institution)
        self.set_font("DejaVu", "", 10)
        self.cell(w * 0.28, 5, period, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_font("DejaVu", "", 9.5)
        self.set_x(self.l_margin)
        self.multi_cell(w, 5, degree)
        self.ln(2)

    def skills_block(self, lines: list[tuple[str, str]]) -> None:
        w = self.content_width
        for label, items in lines:
            self.ensure_space(12)
            self.set_x(self.l_margin)
            self.set_font("DejaVu", "B", 9.5)
            self.cell(w, 5, f"{label}", new_x="LMARGIN", new_y="NEXT")
            self.set_x(self.l_margin)
            self.set_font("DejaVu", "", 9.5)
            self.multi_cell(w, 4.8, items)
            self.ln(1)
        self.ln(1)

    def cert_list(self, items: list[str]) -> None:
        w = self.content_width
        self.set_font("DejaVu", "", 9.5)
        for item in items:
            self.ensure_space(6)
            self.set_x(self.l_margin)
            self.multi_cell(w, 4.8, f"- {item}")


def build_pt() -> FPDF:
    pdf = ATSResume()
    pdf.add_page()
    pdf.header_block(
        "Rafael Ferreira da Silva",
        "Rio de Janeiro, RJ, Brasil | rafaelferreira2312@gmail.com | "
        "linkedin.com/in/rafael-ferreira-dev | rafaelferreiradasilva.com.br",
    )

    pdf.section("RESUMO")
    pdf.body_text(
        "Desenvolvedor Full Stack Sênior com mais de 8 anos de experiência em desenvolvimento "
        "web, sistemas, aplicativos mobile, automação e integração de IA. Atualmente na Andv, "
        "com histórico em Fiocruz, IFF, JBS/Seara e fundação da Vancouver Tec. Especialista em "
        "Laravel, Livewire, Node.js, React, Next.js, Docker, AWS e arquitetura de software. "
        "Formado em Análise de Sistemas (UFBRA). Aberto a oportunidades em regime CLT ou PJ, "
        "remoto ou híbrido, como Tech Lead, Senior Full Stack Developer ou consultor de "
        "transformação digital."
    )

    pdf.section("EXPERIÊNCIA PROFISSIONAL")
    pdf.job(
        "Desenvolvedor Full Stack Sênior",
        "06/2026 - Presente",
        "Andv | Sistemas, Aplicativos e Automação com IA | Remoto",
        [
            "Desenvolve sistemas web sob medida com automação inteligente e integração de IA (Claude, ChatGPT, n8n).",
            "Constrói aplicativos mobile Android/iOS e integrações via API e webhooks.",
            "Atua em projetos de transformação digital: ERP, CRM, dashboards e automação de processos.",
        ],
    )
    pdf.job(
        "Fundador e Desenvolvedor Full Stack Sênior",
        "2018 - 2026",
        "Vancouver Tec Soluções em Tecnologia | Rio de Janeiro, RJ",
        [
            "Fundou agência digital focada em sites, sistemas, apps e DevOps para clientes B2B e B2C.",
            "Entregou projetos para Fiocruz/Fiotec e JBS/Seara (via GROWE).",
            "Mantém infraestrutura própria em VPS com CloudPanel, Docker, Nginx e CI/CD.",
            "Desenvolve PROSPERA: automação de prospecção com IA.",
        ],
    )
    pdf.job(
        "Desenvolvedor Ruby on Rails",
        "2022",
        "Protel | Rio de Janeiro, RJ",
        [
            "Desenvolveu sistema financeiro robusto com Ruby on Rails, Docker e MySQL.",
            "Implementou deploy automatizado com Capistrano e filas Sidekiq.",
        ],
    )
    pdf.job(
        "Desenvolvedor Full Stack",
        "2022",
        "Atime | Rio de Janeiro, RJ",
        [
            "Liderou projeto de aplicativo de chat multiplataforma com React e React Native.",
            "Desenvolveu APIs RESTful e gerenciou entregas com metodologia ágil.",
        ],
    )
    pdf.job(
        "Analista de Sistemas",
        "2019 - 2021",
        "Instituto Fernandes Figueira (IFF) - Banco de Leite Humano | Rio de Janeiro, RJ",
        [
            "Liderou transição de PHP estruturado para Laravel e frameworks modernos.",
            "Estabeleceu ambientes de desenvolvimento, homologação e documentação técnica.",
        ],
    )
    pdf.job(
        "Programador PHP",
        "2016 - 2018",
        "Fiocruz - Fundação Oswaldo Cruz | Rio de Janeiro, RJ",
        [
            "Desenvolveu sistemas escaláveis em ambiente Linux com PHP, Laravel e MySQL.",
            "Implementou práticas DevOps e metodologias ágeis em sistemas institucionais.",
        ],
    )

    pdf.section("FORMAÇÃO ACADÊMICA")
    pdf.education_item(
        "UFBRA - Centro Universitário",
        "Graduação",
        "Análise de Sistemas | Rio de Janeiro, RJ",
    )
    pdf.education_item(
        "ETRJ - Escola Técnica do Rio de Janeiro",
        "Técnico",
        "Técnico em Informática | Rio de Janeiro, RJ",
    )
    pdf.education_item(
        "Udemy",
        "2024",
        "Mini MBA Technology - Gestão de tecnologia, produto digital e liderança",
    )

    pdf.section("COMPETÊNCIAS")
    pdf.skills_block(
        [
            (
                "Conhecimentos Técnicos",
                "PHP, Laravel, Livewire, Node.js, Python, Ruby on Rails, React, Next.js, "
                "React Native, TypeScript, Java, C#/.NET, MySQL, PostgreSQL, MongoDB, Redis, "
                "Docker, AWS, Azure, Nginx, CI/CD, REST API, Microservices, DDD, IA/LLM",
            ),
            (
                "Soft Skills",
                "Comunicação, liderança técnica, mentoria, code review, gestão de squads, "
                "Scrum/Agile, resolução de problemas, foco em entrega",
            ),
            (
                "Idiomas",
                "Português (nativo), Inglês (intermediário avançado - leitura técnica e comunicação profissional)",
            ),
            (
                "Disponibilidade",
                "Aberto a vagas CLT e PJ | Remoto, híbrido ou presencial (RJ)",
            ),
        ]
    )

    pdf.section("CERTIFICAÇÕES")
    pdf.cert_list(
        [
            "AWS - Introdução à Blockchain",
            "Microsoft Azure - Arquitetura, Conceitos de Nuvem e Governança",
            "IBM - Docker Essentials e Open Source Foundations",
            "Cisco - Python Essentials, JavaScript Essentials, Ethical Hacker, Endpoint Security",
            "Microsoft - ASP.NET Core API, C#, SQL Server, Power BI",
            "Udemy - Laravel, React Native, React Redux, Ruby on Rails, Desenvolvimento Web, Scrum Master",
            "Senai - Hacker do Bem",
        ]
    )
    return pdf


def build_en() -> FPDF:
    pdf = ATSResume()
    pdf.add_page()
    pdf.header_block(
        "Rafael Ferreira da Silva",
        "Rio de Janeiro, Brazil | rafaelferreira2312@gmail.com | "
        "linkedin.com/in/rafael-ferreira-dev | rafaelferreiradasilva.com.br",
    )

    pdf.section("SUMMARY")
    pdf.body_text(
        "Senior Full Stack Developer with 8+ years of experience building web systems, mobile apps, "
        "automation platforms and AI integrations. Currently at Andv, with a proven track record at "
        "Fiocruz, IFF, JBS/Seara and as founder of Vancouver Tec. Expert in Laravel, Livewire, "
        "Node.js, React, Next.js, Docker, AWS and software architecture. Bachelor's degree in Systems "
        "Analysis (UFBRA). Open to CLT (employee) and PJ (contractor) opportunities, remote or hybrid, "
        "as Tech Lead, Senior Full Stack Developer or digital transformation consultant."
    )

    pdf.section("PROFESSIONAL EXPERIENCE")
    pdf.job(
        "Senior Full Stack Developer",
        "06/2026 - Present",
        "Andv | Systems, Apps & AI Automation | Remote",
        [
            "Builds custom web systems with intelligent automation and AI integration (Claude, ChatGPT, n8n).",
            "Develops Android/iOS mobile apps and integrations via API and webhooks.",
            "Works on digital transformation projects: ERP, CRM, dashboards and process automation.",
        ],
    )
    pdf.job(
        "Founder & Senior Full Stack Developer",
        "2018 - 2026",
        "Vancouver Tec Technology Solutions | Rio de Janeiro, Brazil",
        [
            "Founded a digital agency focused on websites, systems, apps and DevOps for B2B/B2C clients.",
            "Delivered projects for Fiocruz/Fiotec and JBS/Seara (via GROWE).",
            "Maintains own VPS infrastructure with CloudPanel, Docker, Nginx and CI/CD.",
            "Building PROSPERA: prospecting automation with AI.",
        ],
    )
    pdf.job(
        "Ruby on Rails Developer",
        "2022",
        "Protel | Rio de Janeiro, Brazil",
        [
            "Built a robust financial system with Ruby on Rails, Docker and MySQL.",
            "Implemented automated deployment with Capistrano and Sidekiq queues.",
        ],
    )
    pdf.job(
        "Full Stack Developer",
        "2022",
        "Atime | Rio de Janeiro, Brazil",
        [
            "Led a multi-platform chat application project with React and React Native.",
            "Built RESTful APIs and managed agile deliveries.",
        ],
    )
    pdf.job(
        "Systems Analyst",
        "2019 - 2021",
        "Instituto Fernandes Figueira (IFF) - Human Milk Bank | Rio de Janeiro, Brazil",
        [
            "Led transition from structured PHP to Laravel and modern frameworks.",
            "Established development, staging environments and technical documentation.",
        ],
    )
    pdf.job(
        "PHP Programmer",
        "2016 - 2018",
        "Fiocruz - Oswaldo Cruz Foundation | Rio de Janeiro, Brazil",
        [
            "Developed scalable systems in Linux environment with PHP, Laravel and MySQL.",
            "Implemented DevOps practices and agile methodologies in institutional systems.",
        ],
    )

    pdf.section("EDUCATION")
    pdf.education_item(
        "UFBRA - University Center",
        "Bachelor's degree",
        "Systems Analysis | Rio de Janeiro, Brazil",
    )
    pdf.education_item(
        "ETRJ - Rio de Janeiro Technical School",
        "Technical diploma",
        "IT Technician | Rio de Janeiro, Brazil",
    )
    pdf.education_item(
        "Udemy",
        "2024",
        "Mini MBA Technology - Technology management, digital product and leadership",
    )

    pdf.section("SKILLS")
    pdf.skills_block(
        [
            (
                "Technical Skills",
                "PHP, Laravel, Livewire, Node.js, Python, Ruby on Rails, React, Next.js, "
                "React Native, TypeScript, Java, C#/.NET, MySQL, PostgreSQL, MongoDB, Redis, "
                "Docker, AWS, Azure, Nginx, CI/CD, REST API, Microservices, DDD, AI/LLM",
            ),
            (
                "Soft Skills",
                "Communication, technical leadership, mentoring, code review, squad management, "
                "Scrum/Agile, problem solving, delivery focus",
            ),
            (
                "Languages",
                "Portuguese (native), English (upper intermediate - technical reading and professional communication)",
            ),
            (
                "Availability",
                "Open to CLT and PJ (contractor) roles | Remote, hybrid or on-site (Rio de Janeiro)",
            ),
        ]
    )

    pdf.section("CERTIFICATIONS")
    pdf.cert_list(
        [
            "AWS - Introduction to Blockchain",
            "Microsoft Azure - Architecture, Cloud Concepts and Governance",
            "IBM - Docker Essentials and Open Source Foundations",
            "Cisco - Python Essentials, JavaScript Essentials, Ethical Hacker, Endpoint Security",
            "Microsoft - ASP.NET Core API, C#, SQL Server, Power BI",
            "Udemy - Laravel, React Native, React Redux, Ruby on Rails, Web Development, Scrum Master",
            "Senai - Ethical Hacker (Hacker do Bem)",
        ]
    )
    return pdf


def main() -> None:
    targets = [OUTPUT_DIR, HTDOCS_DIR]
    files = [
        ("Curriculo-Rafael-Ferreira-da-Silva-2026.pdf", build_pt()),
        ("Resume-Rafael-Ferreira-da-Silva-2026.pdf", build_en()),
    ]

    for directory in targets:
        directory.mkdir(parents=True, exist_ok=True)
        for filename, pdf in files:
            path = directory / filename
            pdf.output(str(path))
            print(f"Created {path}")


if __name__ == "__main__":
    main()
