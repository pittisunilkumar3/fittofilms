const COLUMNS = [
  {
    title: "Challenge",
    links: [
      { label: "Award Categories", href: "#pillars" },
      { label: "60 / 45 Day Arcs", href: "#challenges" },
      { label: "Rules & Eligibility", href: "#rules" },
      { label: "Archetypes", href: "#archetypes" },
    ],
  },
  {
    title: "Universe",
    links: [
      { label: "Passport", href: "#passport" },
      { label: "Awards", href: "#awards" },
      { label: "The Vision", href: "#vision" },
      { label: "Seven Pillars", href: "#pillars" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Cinica Creators Council", href: "https://www.cinica.org" },
      { label: "Press Kit", href: "#" },
      { label: "Sponsor With Us", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@cinica.org", href: "mailto:info@cinica.org" },
      { label: "Hyderabad, Telangana", href: "#" },
      { label: "India", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", short: "IG" },
  { label: "YouTube", short: "YT" },
  { label: "LinkedIn", short: "IN" },
  { label: "X", short: "X" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="foot-brand">
            <div className="flogo">
              FIT TO FILMS<span className="tm">™</span>
            </div>
            <p>
              India&apos;s First Screen-Ready &amp; Cinema Transformation
              Ecosystem. Transform Your Body. Build Your Confidence. Become
              Screen Ready.
            </p>
            <div className="foot-socials">
              {SOCIALS.map((s) => (
                <a href="#" aria-label={s.label} key={s.label}>
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div className="foot-col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <div>© 2026 Cinica Creators Council · Section 8 · 80G · 12AA</div>
          <div>
            Fit To Films™ · All transformations natural. All stories original.
          </div>
        </div>
      </div>
    </footer>
  );
}
