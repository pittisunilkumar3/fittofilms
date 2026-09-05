const NOS = [
  "No Steroids",
  "No SARMs",
  "No Crash Diets",
  "No Cosmetic Surgery",
  "No Filters on Progress Photos",
  "No AI-Generated Bodies",
];

export default function Pledge() {
  return (
    <section className="pledge">
      <div className="wrap pledge-inner">
        <div className="shield-wrap reveal-scale" data-reveal>
          <svg className="shield-svg" viewBox="0 0 200 240" role="img" aria-label="Certified Natural shield">
            <defs>
              <linearGradient id="shieldGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#141A2C" />
                <stop offset="100%" stopColor="#0A0E1A" />
              </linearGradient>
            </defs>
            <path
              className="shield-body"
              d="M100 10 L180 40 L180 130 Q180 200 100 230 Q20 200 20 130 L20 40 Z"
            />
            <path className="shield-check" d="M65 120 L92 148 L140 92" />
            <text x="100" y="200" textAnchor="middle" fontFamily="Bebas Neue" fontSize="16" fill="#D4A03B" letterSpacing="0.15em">
              CERTIFIED
            </text>
            <text x="100" y="218" textAnchor="middle" fontFamily="Bebas Neue" fontSize="12" fill="#A8AEBA" letterSpacing="0.2em">
              NATURAL
            </text>
          </svg>
        </div>

        <div className="reveal" data-reveal>
          <span className="eyebrow">Act II · Chapter 05 · The Pledge</span>
          <h2 className="pledge-title">
            The <span className="orange">Natural</span>
            <br />
            Transformation Pledge.
          </h2>
          <p className="pledge-tag">
            Signed before Day One. Verified at the finish. Zero exceptions.
          </p>

          <div className="pledge-nos">
            {NOS.map((n) => (
              <div className="pledge-no" key={n}>
                <div className="mark">✕</div>
                <div className="txt">{n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
