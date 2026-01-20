import { useLanguage } from './context/LanguageContext';
import { profile } from './data/profile';

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <div className="section-title">{title}</div>
        {subtitle ? <div className="section-subtitle">{subtitle}</div> : null}
      </div>
      {children}
    </section>
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="badge">{t.hero.seniority}</div>
        <h1 className="hero-name">{t.profile.name}</h1>
        <div className="hero-role">{t.profile.title}</div>
        <p className="hero-summary">{t.profile.summary}</p>
        <p className="hero-summary">{t.profile.objective}</p>
        <div className="hero-cta">
          <a className="button" href={profile.cvLink} download>
            {t.hero.downloadCV}
          </a>
          <a className="button secondary" href={`mailto:${profile.email}`}>
            {t.hero.writeMe}
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="photo-frame" aria-hidden="true">
          <img src={profile.photo} alt={t.profile.name} />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: t.skillsCategories.backend,
      items: ['Node.js', 'Python', 'Java', 'C#', 'REST APIs', 'Django', 'Express', 'Spring'],
    },
    {
      category: t.skillsCategories.frontend,
      items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'HTML/CSS', 'Knockout'],
    },
    {
      category: t.skillsCategories.dataCloud,
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MariaDB', 'AWS', 'Azure'],
    },
    {
      category: t.skillsCategories.practices,
      items: ['Agile / Scrum', 'CI/CD basics', 'BPO Integration', 'Voice Automation'],
    },
    {
      category: t.skillsCategories.tools,
      items: ['Git', 'REST', 'APIs', 'pandas'],
    },
  ];

  return (
    <div className="grid grid-2">
      {skillsData.map((group) => (
        <div key={group.category} className="card">
          <div className="project-title">{group.category}</div>
          <div className="section-subtitle">{group.items.join(' · ')}</div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  const { t } = useLanguage();

  return (
    <div className="timeline">
      {t.experiences.map((exp, idx) => (
        <div key={idx} className="timeline-item">
          <div>
            <div className="timeline-meta">{exp.period}</div>
            <div className="timeline-meta">{exp.location}</div>
          </div>
          <div>
            <div className="timeline-role">{exp.role}</div>
            <div className="section-subtitle">{exp.company}</div>
            <ul className="timeline-desc">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-3">
      {t.projectsList.map((project, idx) => (
        <div key={idx} className="card project-card">
          <div className="project-title">{project.name}</div>
          <div className="project-meta">{project.description}</div>
          <div className="section-subtitle">{project.impact}</div>
        </div>
      ))}
    </div>
  );
}

function Education() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-2">
      {t.educationList.map((item, idx) => (
        <div key={idx} className="card">
          <div className="project-title">{item.title}</div>
          <div className="project-meta">{item.place}</div>
          <div className="section-subtitle">{item.period}</div>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="contact-grid">
      <div className="contact-item">
        <div className="project-title">{t.contactSection.email}</div>
        <a href={`mailto:${profile.email}`} className="section-subtitle">
          {profile.email}
        </a>
      </div>
      <div className="contact-item">
        <div className="project-title">{t.contactSection.phone}</div>
        <a href={`tel:${profile.phone}`} className="section-subtitle">
          {profile.phone}
        </a>
      </div>
      <div className="contact-item">
        <div className="project-title">{t.contactSection.location}</div>
        <div className="section-subtitle">{t.profile.location}</div>
      </div>
      <div className="contact-item">
        <div className="project-title">{t.contactSection.languages}</div>
        <div className="section-subtitle">{t.contactSection.languagesValue}</div>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="socials">
      <a className="button" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className="button secondary" href={profile.socials.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        onClick={() => setLanguage('en')}
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        title="English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        title="Español"
      >
        ES
      </button>
    </div>
  );
}

export default function App() {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <div className="container navbar">
          <div className="logo">{t.profile.name.split(' ')[0]}</div>
          <nav className="nav-links">
            <a href="#about">{t.navLinks.about}</a>
            <a href="#skills">{t.navLinks.skills}</a>
            <a href="#experience">{t.navLinks.experience}</a>
            <a href="#projects">{t.navLinks.projects}</a>
            <a href="#contact">{t.navLinks.contact}</a>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="container">
        <Hero />

        <Section id="about" title={t.sections.aboutTitle} subtitle={t.sections.aboutSubtitle}>
          <p className="section-subtitle" style={{ color: 'var(--text)' }}>
            {t.profile.summary}
          </p>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            {t.profile.objective}
          </p>
        </Section>

        <Section id="skills" title={t.sections.skillsTitle} subtitle={t.sections.skillsSubtitle}>
          <Skills />
        </Section>

        <Section
          id="experience"
          title={t.sections.experienceTitle}
          subtitle={t.sections.experienceSubtitle}
        >
          <Experience />
        </Section>

        <Section
          id="projects"
          title={t.sections.projectsTitle}
          subtitle={t.sections.projectsSubtitle}
        >
          <Projects />
        </Section>

        <Section
          id="education"
          title={t.sections.educationTitle}
          subtitle={t.sections.educationSubtitle}
        >
          <Education />
        </Section>

        <Section
          id="contact"
          title={t.sections.contactTitle}
          subtitle={t.sections.contactSubtitle}
        >
          <Contact />
          <div style={{ marginTop: 16 }}>
            <Socials />
          </div>
        </Section>
      </main>
    </div>
  );
}
