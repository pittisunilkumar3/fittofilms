const ARCS = [
  {
    days: "60",
    unit: "Day Arc",
    title: "FOUNDATION ARC",
    start: "Starts 1 October 2026",
    featured: true,
    prices: [
      { who: "Single", amt: "2,999" },
      { who: "Couple", amt: "4,499" },
    ],
    features: [
      "Full health assessment & baseline",
      "Get your own coach for the full arc",
      "8 weekly progress submissions",
      "Complete story universe production",
      "Portfolio submission & certification",
      "Special access to Cinematica Expo, 12 & 13 December",
      "Fit To Films Award Evening included",
    ],
    cta: "Choose 60 Days",
  },
  {
    days: "45",
    unit: "Day Intensive",
    title: "ELITE INTENSIVE",
    start: "Starts 15 October 2026",
    featured: false,
    prices: [
      { who: "Single", amt: "3,999" },
      { who: "Couple", amt: "5,999" },
    ],
    features: [
      "Full health assessment & baseline",
      "Get your own coach for the full arc",
      "6 weekly progress submissions",
      "Complete story universe production",
      "Portfolio submission & certification",
      "Special access to Cinematica Expo, 12 & 13 December",
      "Fit To Films Award Evening included",
    ],
    cta: "Choose 45 Days",
  },
];

export default function Challenges() {
  return (
    <section className="challenges" id="challenges">
      <div className="wrap">
        <div className="challenges-head reveal" data-reveal>
          <span className="eyebrow">Act III · Chapter 10 · Register</span>
          <h2>
            One entry. <span className="orange">Every category.</span>
          </h2>
          <p>One registration. Two arcs. All six categories included.</p>
        </div>

        <p className="chal-converge">
          Two starts. One finish line: the Cinematica Expo stage, 12 and 13
          December 2026.
        </p>

        <div className="chal-grid two">
          {ARCS.map((a) => (
            <div
              className={`chal${a.featured ? " featured" : ""} reveal`}
              key={a.days}
              data-reveal
            >
              <div className="chal-days">
                {a.days}
                <span className="unit">{a.unit}</span>
              </div>
              <div className="chal-title">{a.title}</div>
              <div className="chal-start">{a.start}</div>
              <div className="chal-prices">
                {a.prices.map((p) => (
                  <div className="chal-price-row" key={p.who}>
                    <span className="who">{p.who}</span>
                    <span className="amt">
                      <span className="cur">₹</span>
                      {p.amt}
                    </span>
                  </div>
                ))}
              </div>
              <ul className="chal-list">
                {a.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">
                {a.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
