const PASS_FEATURES = [
  "Verified health baseline",
  "60-day progress log",
  "Screen-ready score",
  "Natural-certified stamp",
  "Story universe assets",
  "Coach endorsement",
  "Archetype classification",
  "Casting network access",
];

export default function Passport() {
  return (
    <section className="passport" id="passport">
      <div className="wrap">
        <div className="passport-grid">
          <div className="pass-left reveal-l" data-reveal>
            <span className="eyebrow">
              Act II · Chapter 08 · Your Credential
            </span>
            <h2>
              The <span className="orange">Transformation</span>
              <br />
              <span className="orange">Passport.</span>
            </h2>
            <p>
              A verifiable credential for every graduate. Recognised by casting
              directors, brand agencies, and OTT scouts.
            </p>
            <div className="pass-list">
              {PASS_FEATURES.map((f) => (
                <div className="pass-list-item" key={f}>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pass-card reveal-r" data-reveal>
            <div className="pass-brand">
              <div className="b1">
                FIT TO FILMS™<b>PASSPORT</b>
              </div>
              <div className="chip" />
            </div>
            <div className="pass-fields">
              <span>Health Record</span>
              <span>Progress Log</span>
              <span>Portfolio</span>
              <span>Award Categories</span>
            </div>
            <div className="pass-code">
              <span>Issued on completion</span>
              <span>✓ NATURAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
