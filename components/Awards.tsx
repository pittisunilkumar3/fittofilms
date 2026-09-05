const TIERS = [
  {
    num: "Tier 01",
    name: "National Grand Awards",
    count: "10 Titles",
    variant: "grand",
    chips: [
      "Fit To Films Grand Champion",
      "Mr. Fit To Films India",
      "Ms. Fit To Films India",
      "Fit To Films Couple of the Year",
      "Best Emerging Cinema Talent",
      "Jury Excellence Award",
      "People's Choice Award",
      "Best Screen-Ready Performer",
      "Best Transformation Story",
      "Best Creator Portfolio",
    ],
  },
  {
    num: "Tier 02",
    name: "Excellence Awards",
    count: "One per category",
    variant: "",
    chips: [
      "Fit To Films Fitness Award",
      "Fit To Cinema Excellence Award",
      "Fit To Screen Excellence Award",
      "Fit To Frames Excellence Award",
      "Fit To Lens Excellence Award",
      "Fit To Fame Excellence Award",
    ],
  },
  {
    num: "Tier 03",
    name: "Participation Recognition",
    count: "Every finisher",
    variant: "muted",
    chips: [
      "Fit To Films Participant",
      "Fit To Cinema Participant",
      "Fit To Screen Participant",
      "Fit To Frames Participant",
      "Fit To Lens Participant",
      "Fit To Fame Participant",
    ],
  },
];

export default function Awards() {
  return (
    <section className="awards" id="awards">
      <div className="wrap">
        <div className="awards-head reveal" data-reveal>
          <span className="eyebrow">Act III · Chapter 09 · Recognition</span>
          <h2>
            Twenty-two <span className="orange">awards.</span>
            <br />
            Three tiers of recognition.
          </h2>
          <p>
            Everyone is recognised. Excellence is honoured in each category.
            Ten Grand Awards go live on stage.
          </p>
        </div>

        {TIERS.map((t) => (
          <div className="aw-tier reveal" key={t.num} data-reveal>
            <div className="aw-tier-head">
              <span className="aw-tier-num">{t.num}</span>
              <h3 className="aw-tier-name">{t.name}</h3>
              <span className="aw-tier-count">{t.count}</span>
            </div>
            <div className={`aw-chips${t.variant ? ` ${t.variant}` : ""}`}>
              {t.chips.map((c) => (
                <span className="aw-chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
