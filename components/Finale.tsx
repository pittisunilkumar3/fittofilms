import Image from "next/image";

const META = [
  { n: "100,000+", l: "Expected Visitors" },
  { n: "2,500", l: "Graduates on Stage" },
  { n: "22", l: "Awards Presented" },
  { n: "2 Days", l: "Hyderabad, India" },
];

export default function Finale() {
  return (
    <section className="finale" id="finale">
      <Image
        src="/images/finale-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="finale-bg-img"
      />
      <div className="wrap finale-inner">
        <span className="finale-eyebrow">
          The Grand Finale · Live · On Stage
        </span>

        <h2 className="finale-title">
          CINEMATICA
          <br />
          <span className="orange">EXPO</span>
        </h2>

        <div className="finale-year">12 &amp; 13 DECEMBER 2026</div>

        <p className="finale-sub">
          Every graduate takes the stage, in front of casting directors, OTT
          scouts, brand agencies, and celebrity headliners.
        </p>

        <div className="finale-included">
          <span className="fi-tag">Included With Every Entry</span>
          <p className="fi-text">
            Both days of <strong>Cinematica Expo 2026</strong>, plus a seat at
            the <strong>Fit To Films Award Evening</strong>. No separate ticket
            to buy.
          </p>
        </div>

        <div className="finale-meta">
          {META.map((m) => (
            <div className="item" key={m.l}>
              <div className="n">{m.n}</div>
              <div className="l">{m.l}</div>
            </div>
          ))}
        </div>

        <div className="final-cta-actions">
          <a href="#challenges" className="btn btn-primary">
            Secure Your Stage Slot
          </a>
          <a href="#awards" className="btn btn-ghost">
            See the Awards
          </a>
        </div>
      </div>

      <div className="finale-crowd" aria-hidden="true">
        <svg viewBox="0 0 1200 90" preserveAspectRatio="none">
          <path d="M0,90 L0,55 Q20,45 40,55 T80,50 T120,58 T160,52 T200,60 T240,48 T280,55 T320,50 T360,58 T400,52 T440,45 T480,55 T520,48 T560,55 T600,50 T640,58 T680,52 T720,60 T760,48 T800,55 T840,50 T880,58 T920,52 T960,45 T1000,55 T1040,48 T1080,55 T1120,50 T1160,58 T1200,52 L1200,90 Z" />
        </svg>
      </div>
    </section>
  );
}
