const STEPS = [
  {
    num: "01",
    label: "Step One · Day Zero",
    title: "Register",
    text: "Choose your arc and pay the entry. Your welcome kit follows.",
  },
  {
    num: "02",
    label: "Step Two · Day One",
    title: "Get Your Own Health Assessment",
    text: "Your own health assessment & baseline: CBC, BMI, body fat, blood pressure, lipid profile, fasting sugar. Non-negotiable.",
  },
  {
    num: "03",
    label: "Step Three · Day Two",
    title: "Get Your Own Coach",
    text: "One certified coach, matched to your goals, for the whole arc.",
  },
  {
    num: "04",
    label: "Step Four · Day Three",
    title: "Start the Transformation",
    text: "Training, nutrition, and story plan in the app. Coach check-in every three days.",
  },
  {
    num: "05",
    label: "Step Five · Weekly",
    title: "Weekly Updates",
    text: "Photos, video diary, measurements. Documented and verifiable.",
  },
  {
    num: "06",
    label: "Step Six · Ongoing",
    title: "Build Your Story Universe",
    text: "Reels, film, photography, comics, avatar, music. Your story becomes IP.",
  },
  {
    num: "07",
    label: "Step Seven · Day 45 / Day 60",
    title: "Submit Final Portfolio",
    text: "Portfolio, certification, jury review, then the finale on 12 and 13 December 2026.",
  },
];

export default function Journey() {
  return (
    <section className="how" id="journey">
      <div className="wrap">
        <div className="how-head reveal" data-reveal>
          <span className="eyebrow">Act II · Chapter 03 · The Method</span>
          <h2>
            How the <span className="orange">arc</span> unfolds.
          </h2>
          <p>Seven steps from registration to the national stage.</p>
        </div>

        <div className="timeline">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.num} data-reveal>
              <div className="step-num">{s.num}</div>
              <div className="step-body">
                <div className="step-label">{s.label}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
