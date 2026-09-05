const CATEGORIES = [
  {
    num: "Award Category 01",
    name: "FIT TO CINEMA",
    sub: "Character Fitness",
    desc: "Transform imagination into believable cinematic characters.",
    focus: [
      "Character Design",
      "Costume",
      "Makeup",
      "Backstory",
      "World Building",
      "Creative Interpretation",
    ],
  },
  {
    num: "Award Category 02",
    name: "FIT TO SCREEN",
    sub: "Performance Fitness",
    desc: "Develop acting and performance skills for the screen.",
    focus: [
      "Acting",
      "Dialogue Delivery",
      "Emotional Expression",
      "Improvisation",
      "Screen Presence",
      "Character Consistency",
    ],
  },
  {
    num: "Award Category 03",
    name: "FIT TO FRAMES",
    sub: "Camera Fitness",
    desc: "Communicate naturally and confidently in front of the camera.",
    focus: [
      "Close-Up",
      "Mid Shot",
      "Long Shot",
      "Body Language",
      "Eye Contact",
      "Expressions",
      "Mannerisms",
    ],
  },
  {
    num: "Award Category 04",
    name: "FIT TO LENS",
    sub: "Visual Fitness",
    desc: "Build visual storytelling skills through photography and cinematography.",
    focus: [
      "Photography",
      "Cinematography",
      "Framing",
      "Lighting",
      "Camera Movement",
      "Composition",
    ],
  },
  {
    num: "Award Category 05",
    name: "FIT TO FAME",
    sub: "Creator Fitness",
    desc: "Build an authentic creator identity and public presence.",
    focus: [
      "Personal Branding",
      "Content Creation",
      "Audience Engagement",
      "Creator Ethics",
      "Community Building",
      "Reputation",
    ],
  },
];

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="wrap">
        <div className="pillars-head">
          <div className="reveal-l" data-reveal>
            <span className="eyebrow">Act I · Chapter 02 · The Ecosystem</span>
            <h2>
              One entry. <span className="orange">Six award categories.</span>
            </h2>
          </div>
          <p className="reveal-r" data-reveal>
            Register once. All six categories open. Compete in as many as you
            like, at no extra cost.
          </p>
        </div>

        <div className="six-grid">
          <a href="#challenges" className="six flagship reveal" data-reveal>
            <div className="six-top">
              <span className="six-num">The Entry</span>
              <span className="six-price">₹2,999 onwards</span>
            </div>
            <h3 className="six-name">FIT TO FILMS</h3>
            <div className="six-sub">Fitness for Cinema</div>
            <p className="six-desc">
              The one registration. A 60 or 45 day arc, all six award
              categories, and Expo access on 12 and 13 December.
            </p>
            <div className="six-focus">
              <span>Health</span>
              <span>Fitness</span>
              <span>Mindset</span>
              <span>Grooming</span>
              <span>Style</span>
              <span>Discipline</span>
              <span>Personality</span>
              <span>Screen Readiness</span>
            </div>
            <div className="six-cta">Register for the challenge</div>
          </a>

          {CATEGORIES.map((c) => (
            <div className="six reveal" key={c.name} data-reveal>
              <div className="six-top">
                <span className="six-num">{c.num}</span>
                <span className="six-price included">Included</span>
              </div>
              <h3 className="six-name">{c.name}</h3>
              <div className="six-sub">{c.sub}</div>
              <p className="six-desc">{c.desc}</p>
              <div className="six-focus">
                {c.focus.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
