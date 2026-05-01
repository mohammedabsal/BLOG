import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";
import { EventGallery } from "@/components/event-gallery";

const summaryPoints = [
  "B.Tech student with a strong foundation in Data Structures and Algorithms and Object-Oriented Programming.",
  "Proven ability to apply creative engineering principles to solve complex problems using Node.js, React.js, and JavaScript.",
  "Focused on contributing to next-generation software while continuously learning to improve product quality.",
];

const education = [
  {
    title: "B.Tech in Artificial Intelligence and Data Science",
    meta: "2023 - Present · Rajalakshmi Institute of Technology, Chennai, India",
    detail: "CGPA: 8.535",
  },
  {
    title: "XI, XII - Tamilnadu Board",
    meta: "2021 - 2023 · St. Mary’s Higher Secondary School, Madurai, India",
    detail: "87% and 89.6%",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    label: "Databases & Cloud",
    items: ["MongoDB", "Firebase", "Supabase", "Postgres"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
  {
    label: "Additional Skills",
    items: ["System Design (basics)", "Problem Solving", "Analytical Thinking", "Teamwork", "Communication", "Decision-Making"],
  },
];

const internshipBullets = [
  "Built PDF barcode validation using Python + ZXing with preprocessing, improving decoding accuracy by 25%.",
  "Added adaptive barcode logic and MD5 integrity checks, cutting verification time by 90% via automated reports.",
  "Developed an ANPR pipeline with YOLO + PaddleOCR, preprocessing, and a MERN dashboard with logs stored in PostgreSQL.",
];

const projects = [
  {
    title: "Geoboost - India’s Interactive Cultural Explorer",
    category: "AI-powered cultural discovery",
    description:
      "Built an AI-powered platform for exploring Indian culture using data visualization, NLP, and dashboards.",
    bullets: [
      "Enabled personalized travel insights with NLP APIs and geospatial analysis.",
      "Optimized the data pipeline, reducing query time by 15%.",
      "Promoted sustainable tourism through AI-driven recommendations.",
    ],
  },
  {
    title: "Confidential Document Intelligence with RAG Pipelines",
    category: "Enterprise NLP",
    description:
      "Developed a secure RAG-based system to extract insights from documents.",
    bullets: [
      "Used transformer embeddings and vector databases for improved retrieval.",
      "Increased document retrieval precision by 7%.",
      "Built a scalable NLP solution for enterprise use.",
    ],
  },
  {
    title: "Seed2Sell — AI-Powered Digital Farming Platform",
    category: "AI for agriculture",
    description:
      "Built a data-driven farming platform for crop selection, simulation, and decision-making.",
    bullets: [
      "Developed a Digital Twin Simulator using Monte Carlo modeling for yield and risk prediction.",
      "Designed modular decision engines for crop comparison and sustainability scoring.",
      "Integrated real-time dashboards for soil, weather, and performance insights.",
      "Implemented scalable Next.js + React architecture with optimized data pipelines.",
    ],
  },
];

const achievements = [
  "Ideathon’26 – Secured 1st Prize among 300+ teams by building an innovative AI-driven solution addressing a real-world problem statement.",
  "Enthral’26 – Won 1st Prize in a national-level hackathon by developing a scalable and impactful tech solution under competitive constraints.",  "ProjectX Hackathon – Finalist (Top 10 Teams Nationwide) - Competing against elite teams across the nation.",  "Amazon ML Summer School 2025 – Completed a selective program (top 5%) on applied machine learning.",
  "IIT Hyderabad & Bosch Second Minds Hackathon – Finalist (Top 17 Nationwide) (Mar 2025).",
];

const certifications = [
  "Google Analytics Certification – Google (2024)",
  "Data Visualisation: Empowering Business with Effective Insights (Job Simulation) – Tata (2024)",
  "Python for Data Science – IBM (2024)",
  "Cloud Computing Bootcamp – CDAC, Chennai (2025)",
  "Artificial Intelligence Bootcamp – CDAC, Pune (2025)",
];

const languages = ["English – Working Proficiency", "Tamil – Native"];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammedabsal538/" },
  { label: "GitHub", href: "https://github.com/mohammedabsal" },
  { label: "LeetCode", href: "https://leetcode.com/u/mohammed_absal_/" },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute left-8 top-20 h-72 w-72 rounded-full bg-[color:var(--accent)]/15 blur-3xl float-slow" />
        <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-[color:var(--accent-2)]/15 blur-3xl float-slow" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 pt-6 sm:px-8 lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-foreground">
            Mohammed Absal S
          </p>
          <p className="text-sm text-muted">Chennai | mohammedabsal9943@gmail.com | 9943816710</p>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a href="#summary" className="transition hover:text-foreground">
            Summary
          </a>
          <a href="#education" className="transition hover:text-foreground">
            Education
          </a>
          <a href="#projects" className="transition hover:text-foreground">
            Projects
          </a>
          <a href="#achievements" className="transition hover:text-foreground">
            Achievements
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            Contact
          </a>
        </nav>

        <ThemeToggle />
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24 lg:pt-16">
        <div className="fade-up space-y-8">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm text-muted shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            B.Tech AI & DS student · Hackathon winner · Aspiring developer
          </div>

          <div className="space-y-5">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Mohammed Absal S builds practical software with strong DSA, clear thinking, and AI-driven execution.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              I am a third-year Artificial Intelligence and Data Science student from Chennai focused on real-world problem solving, product quality, and continuous learning through projects, internships, and hackathons.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 text-sm font-semibold text-[color:var(--background)] transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
            >
              Contact Me
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Current focus", "AI + software engineering"],
              ["Competitive edge", "Hackathon-ready execution"],
              ["Mindset", "Growth-focused learner"],
            ].map(([label, value]) => (
              <div key={label} className="glass-card rounded-3xl p-5">
                <p className="text-sm text-muted">{label}</p>
                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="fade-in lg:pt-8">
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted">Profile snapshot</p>
                  <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">Innovator. Builder. Competitor.</h2>
                </div>
                <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">Status</p>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--accent)]">Open to opportunities</p>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-muted">Summary</p>
                <p className="text-base leading-7 text-muted">{summaryPoints.join(" ")}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-4 transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">{social.label}</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">Open profile</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section id="summary" className="section-anchor mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Summary"
            title="A focused student developer with a strong technical base"
            description="B.Tech student with a strong foundation in DSA and OOP, applying creative engineering principles to solve complex problems using Node.js, React.js, and JavaScript while steadily improving product quality."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {summaryPoints.map((item) => (
              <div key={item} className="motion-card rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-6 text-muted">
                <p className="text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-anchor mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <SectionHeading
              eyebrow="Education"
              title="Academic background"
              description="A record shaped by solid performance in school and an ongoing B.Tech path in Artificial Intelligence and Data Science."
            />
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <div className="space-y-4">
              {education.map((item) => (
                <article key={item.title} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.meta}</p>
                  <p className="mt-3 text-sm font-semibold text-[color:var(--accent)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Skills"
            title="Technical and professional strengths"
            description="A balanced skill set spanning languages, frameworks, databases, tools, and the soft skills needed to work well in teams."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">{group.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[color:var(--border)] px-3 py-2 text-sm text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="internship" className="section-anchor mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Internship"
            title="Automation & Computer Vision trainee at CDAC"
            description="Ongoing internship work focused on practical automation, validation pipelines, and computer vision systems with measurable performance gains."
          />

          <div className="mt-10 grid gap-4">
            {internshipBullets.map((bullet) => (
              <div key={bullet} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5 text-muted">
                <p className="text-base leading-7">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-anchor mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Builds that combine AI, product thinking, and practical value"
          description="Projects chosen to show real-world problem solving, modular architecture, and measurable outcomes rather than just demos."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass-card motion-card rounded-[1.75rem] p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">{project.category}</p>
              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
              <div className="mt-5 space-y-3">
                {project.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-4 text-sm leading-6 text-foreground">
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/mohammedabsal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[color:var(--border)] px-4 text-sm font-medium text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[color:var(--border)] px-4 text-sm font-medium text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  Project link
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="section-anchor mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <SectionHeading
              eyebrow="Achievements"
              title="Competitions and recognition"
              description="Milestones that reflect strong execution, competitive performance, and a consistent focus on building useful technology."
            />
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <div className="grid gap-4">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-4 text-sm leading-6 text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EventGallery />

      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Certifications"
              title="Training and learning milestones"
              description="Additional certifications and learning programs that support the core technical profile."
            />

            <div className="mt-8 grid gap-4">
              {certifications.map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-4 text-sm leading-6 text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Languages"
              title="Communication"
              description="Comfortable working in English and Tamil, with a communication style suited for teamwork, discussions, and presentations."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {languages.map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2 text-sm font-medium text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Contact</p>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Chennai-based and open to opportunities.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Reach out for internships, collaborations, hackathons, research projects, or product development opportunities.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2">Chennai</span>
                <a href="mailto:mohammedabsal9943@gmail.com" className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">mohammedabsal9943@gmail.com</a>
                <a href="tel:+919943816710" className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">9943816710</a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/mohammedabsal538/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 text-sm font-semibold text-[color:var(--background)] transition hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mohammedabsal"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/mohammed_absal_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}