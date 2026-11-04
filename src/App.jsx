import { projects, services, credentials, experience } from './data/projects.js'

function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className={`badge badge-${project.statusTone}`}>{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="card-desc">{project.description}</p>
      <p className="card-proof">{project.proof}</p>
      <ul className="tags" aria-label="Skills">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {project.links.length > 0 && (
        <div className="card-links">
          {project.links.map((l) => (
            <a
              key={l.url + l.label}
              href={l.url}
              {...(l.url.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {l.label} <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">Jared Fontaine</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Burlington, NC&nbsp;|&nbsp;Remote</p>
          <h1>
            Cycling CX,<br />
            AI agents &amp;<br />
            <span className="accent">analytics that ship.</span>
          </h1>
          <p className="hero-sub">
            I&apos;m Jared Fontaine — a Gorgias Admin + CX certified customer-service
            specialist from the cycling industry. I build support agents that don&apos;t
            invent answers, analytics that show where a helpdesk is leaking, and web
            products people actually use.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">See the work</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/jared-fontaine-cycling" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/jaredfontaine2002" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <ul className="hero-stats">
            <li><strong>Gorgias</strong><span>Admin + CX certified</span></li>
            <li><strong>$500K+</strong><span>bike sales at Curated.com</span></li>
            <li><strong>MBA</strong><span>Wheeling Jesuit, 2014</span></li>
            <li><strong>10/10</strong><span>AI agent test suite passed</span></li>
          </ul>
        </section>

        <section id="work" className="section">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Portfolio projects</h2>
            <p className="section-sub">
              Live products, working demos, and sample work — labelled honestly.
              Anything marked “Sample” uses synthetic data or is a labelled study,
              never a client engagement.
            </p>
          </div>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="ai-visibility-report" className="section report">
          <div className="section-head">
            <p className="eyebrow">Featured sample</p>
            <h2>AI Visibility Audit — what the sample found</h2>
          </div>
          <div className="report-grid">
            <div className="report-stat"><strong>30/30</strong><span>named mentions — when a shopper names the brand, every AI tool answers well</span></div>
            <div className="report-stat"><strong>11/30</strong><span>unprompted category mentions — where new buyers actually discover brands</span></div>
            <div className="report-stat"><strong>$1,399.99 vs $1,195</strong><span>the same bike, two prices — quoted inconsistently across AI chats</span></div>
          </div>
          <p className="section-sub">
            Sample report only — prepared to demonstrate the audit format, not
            commissioned by State Bicycle Co. The full sample is included in this
            site&apos;s repository as <em>AI-VISIBILITY-SAMPLE-REPORT.md</em>.
          </p>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <p className="eyebrow">Work with me</p>
            <h2>Services</h2>
            <p className="section-sub">Fixed scope, fixed price, in writing before work starts.</p>
          </div>
          <div className="grid grid-services">
            {services.map((s) => (
              <article key={s.name} className="card service">
                <h3>{s.name}</h3>
                <p className="price">{s.price} <span>{s.unit}</span></p>
                <p className="card-desc">{s.description}</p>
                {s.tiers && (
                  <ul className="plain-list">
                    {s.tiers.map((t) => (
                      <li key={t.name}>
                        <strong>{t.name} — {t.price}</strong> <span>{t.unit}</span>
                        <br />
                        {t.description}
                      </li>
                    ))}
                  </ul>
                )}
                {(s.buyUrl || s.link) && (
                  <div className="card-links">
                    {s.buyUrl && (
                      <a href={s.buyUrl} target="_blank" rel="noreferrer">
                        Order on Upwork <span aria-hidden="true">→</span>
                      </a>
                    )}
                    {s.link && (
                      <a href={s.link.url} target="_blank" rel="noreferrer">
                        {s.link.label} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-col">
            <p className="eyebrow">About</p>
            <h2>Credentials</h2>
            <ul className="plain-list">
              {credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="about-col">
            <h2>Experience</h2>
            <ul className="plain-list">
              {experience.map((e) => (
                <li key={e.org}><strong>{e.org}</strong> — {e.role}</li>
              ))}
            </ul>
            <p className="section-sub">
              Skills: Gorgias · Zendesk · Shopify · Python · SQL · pandas ·
              Tableau · Power BI · Streamlit · React · Google Tag Manager · GA4
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">Contact</p>
          <h2>Have a helpdesk, a store,<br />or a support problem?</h2>
          <p className="section-sub">
            The fastest routes are LinkedIn and Upwork — I&apos;m available on
            Upwork for fixed-scope Gorgias, CX, and analytics projects.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://www.linkedin.com/in/jared-fontaine-cycling" target="_blank" rel="noreferrer">Message me on LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/jaredfontaine2002" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="availability">Available on Upwork · Burlington, NC | Remote</p>
        </section>
      </main>

      <footer>
        <span>© 2026 Jared Fontaine</span>
        <span>Burlington, NC | Remote</span>
        <span>Built with React + Vite</span>
      </footer>
    </>
  )
}
