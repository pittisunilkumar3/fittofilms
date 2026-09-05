const DELIVERABLES = [
  "Feature Film",
  "Short Reels",
  "Photography",
  "Comic Book",
  "AI Avatar",
  "Music Track",
  "3D Model",
  "Docu-Series",
];

export default function Transmedia() {
  return (
    <section className="transmedia">
      <div className="wrap">
        <div className="trans-head reveal" data-reveal>
          <span className="eyebrow">Act II · Chapter 06 · The Universe</span>
          <h2>
            Your transformation
            <br />
            becomes a <span className="orange">story universe.</span>
          </h2>
          <p>
            India&apos;s first challenge that treats your transformation as
            intellectual property. Eight deliverables. All yours.
          </p>
        </div>

        <div className="deliverables">
          {DELIVERABLES.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
