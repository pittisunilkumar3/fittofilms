import Image from "next/image";

const ARCS = [
  {
    days: "60",
    unit: "Day Arc",
    title: "FOUNDATION ARC",
    start: "Starts 1 October 2026",
    featured: true,
    img: "/images/chal60.jpg",
    imgAlt: "Participant completing a coached functional training session",
    ctaHref:
      "mailto:info@cinica.org?subject=Fit%20To%20Films%20%E2%80%94%2060%20Day%20Arc",
    prices: [
      { who: "Single", amt: "2,999" },
      { who: "Couple", amt: "4,499" },
    ],
    features: [
      "Get your own health assessment & baseline",
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
    img: "/images/chal45.jpg",
    imgAlt: "Performer completing a coached screen-conditioning session",
    ctaHref:
      "mailto:info@cinica.org?subject=Fit%20To%20Films%20%E2%80%94%2045%20Day%20Arc",
    prices: [
      { who: "Single", amt: "3,999" },
      { who: "Couple", amt: "5,999" },
    ],
    features: [
      "Get your own health assessment & baseline",
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
    <section className="challenges pricing-section" id="challenges">
      <div className="wrap">
        <div className="challenges-head reveal" data-reveal>
          <span className="eyebrow">Season 01 · Applications Open</span>
          <h2>
            Choose your <span className="orange">transformation arc.</span>
          </h2>
          <p>
            Start with the pace that fits your life. Both arcs take you from a
            verified baseline to a screen-ready portfolio and the national
            stage.
          </p>
        </div>

        <p className="chal-converge">
          Two starts. One finish line: Cinematica Expo, 12 and 13 December
          2026.
        </p>

        <div className="chal-value-strip reveal" data-reveal>
          <div>
            <strong>01</strong>
            <span>One registration</span>
          </div>
          <div>
            <strong>06</strong>
            <span>Award categories</span>
          </div>
          <div>
            <strong>1:1</strong>
            <span>Your own coach</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Expo days included</span>
          </div>
        </div>

        <div className="chal-grid two">
          {ARCS.map((a) => (
            <div
              className={`chal${a.featured ? " featured" : ""} reveal`}
              key={a.days}
              data-reveal
            >
              <div className="chal-img">
                <Image
                  src={a.img}
                  alt={a.imgAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 470px"
                />
              </div>
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
              <a
                href={a.ctaHref}
                className="btn btn-primary"
                aria-label={`${a.cta} — contact the Fit To Films team`}
              >
                {a.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
