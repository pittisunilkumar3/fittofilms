import CountUp from "./CountUp";

const STATS = [
  { value: 2, label: "Arcs" },
  { value: 6, label: "Categories" },
  { value: 22, label: "Awards" },
  { value: 2, label: "Days On Stage" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-lines" />

      <div className="wrap hero-inner">
        <div className="hero-top">
          <div className="hero-badge">
            <span className="live-dot" />
            <span>Season 01 · Applications Open</span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">
            <span>INDIA&apos;S FIRST</span>
          </span>
          <span className="hero-title-line">
            <span className="orange">SCREEN READY &amp; CINEMA</span>
          </span>
          <span className="hero-title-line">
            <span>TRANSFORMATION</span>
          </span>
          <span className="hero-title-line">
            <span className="stroke">ECOSYSTEM.</span>
          </span>
        </h1>

        <p className="hero-sub">
          Transform Naturally. &ensp;Transform Your Style. &ensp;Tell Your
          Story. &ensp;<span className="accent">Become Screen Ready.</span>
        </p>
        <p className="hero-subline">
          Your gateway to the world of cinema begins here.
        </p>
        <p className="hero-coach">Get Your Own Coach</p>
        <p className="hero-promise">
          One Transformation. &ensp;One Story. &ensp;One National Stage.
        </p>

        <div className="hero-actions">
          <a href="#challenges" className="btn btn-primary">
            Join the Challenge
          </a>
          <a href="#vision" className="btn btn-ghost">
            Watch the Trailer
          </a>
        </div>

        <div className="hero-durations">
          <span className="lbl">Choose Your Arc</span>
          <span className="dur-pill">60 DAYS</span>
          <span className="dur-pill">45 DAYS</span>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="hero-stat" key={s.label}>
              <CountUp value={s.value} className="num" />
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
