const ITEMS = [
  "SEASON 01 — APPLICATIONS OPEN",
  "60 & 45 DAY ARCS",
  "GET YOUR OWN COACH",
  "22 NATIONAL AWARDS",
  "CINEMATICA EXPO · 12 & 13 DEC 2026",
  "ALL TRANSFORMATIONS NATURAL",
];

/** Crimson casting-call marquee that sits right under the hero. */
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((dup) => (
          <div className="ticker-group" key={dup}>
            {ITEMS.map((item) => (
              <span className="ticker-item" key={item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
