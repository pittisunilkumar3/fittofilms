const JUDGING = [
  "Health & Physical Transformation",
  "Character & Performance",
  "Creativity & Originality",
  "Style & Personality",
  "Screen Presence",
  "Storytelling",
  "Technical Excellence",
  "Professionalism",
  "Consistency",
  "Community Impact",
];

const RULES = [
  "Participants must comply with all applicable laws, venue rules, and competition policies.",
  "All submissions must be original or legally licensed.",
  "Plagiarism, piracy, copyright infringement, impersonation, and deceptive AI use are prohibited.",
  "Respect participants, judges, mentors, organisers, sponsors, and volunteers.",
  "Harassment, discrimination, bullying, hate speech, or abusive behaviour may result in immediate disqualification.",
  "Dangerous activities, illegal acts, or unsafe stunts are prohibited.",
  "Judges' decisions are final.",
  "Fit To Films may verify participant identity, eligibility, and submitted work at any stage.",
  "Organisers may use submitted content for promotional, educational, and archival purposes in accordance with participant consent.",
  "Any violation may result in warnings, score deductions, suspension, disqualification, forfeiture of awards, or future participation restrictions.",
];

const POLICY_STEPS = [
  "Post regular progress updates on your social accounts",
  "Tag the official Fit To Films handles",
  "Use the official campaign hashtags",
  "Share authentic photos and videos",
  "Submit direct post links through the participant portal",
];

export default function Governance() {
  return (
    <section className="governance" id="rules">
      <div className="wrap">
        <div className="gov-head reveal" data-reveal>
          <span className="eyebrow">Act III · Chapter 11 · The Framework</span>
          <h2>
            Rules that make the{" "}
            <span className="orange">result mean something.</span>
          </h2>
          <p>One set of rules, published in full before you enter.</p>
        </div>

        <div className="gov-grid">
          <div className="gov-col reveal-l" data-reveal>
            <h4 className="gov-h">Eligibility</h4>
            <p className="gov-p">
              Open to actors, creators, filmmakers, photographers, students,
              professionals, and fitness enthusiasts.
            </p>
            <div className="gov-note">
              <strong>18 years and above</strong> may register independently.
            </div>
            <div className="gov-note minor">
              <strong>Below 18 years</strong> must submit:
              <ul>
                <li>Parent or Guardian No Objection Certificate</li>
                <li>Parent or Guardian Consent Form</li>
                <li>Parent or Guardian ID Proof</li>
                <li>Emergency Contact Details</li>
              </ul>
            </div>

            <h4 className="gov-h" style={{ marginTop: "2.5rem" }}>
              Judging Framework
            </h4>
            <div className="judge-chips">
              {JUDGING.map((j) => (
                <span key={j}>{j}</span>
              ))}
            </div>
          </div>

          <div className="gov-col reveal-r" data-reveal>
            <h4 className="gov-h">General Rules</h4>
            <ol className="gov-rules">
              {RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="social-policy reveal" data-reveal>
          <div className="sp-left">
            <h4 className="gov-h">Social Media Progress Policy</h4>
            <p className="gov-p">
              Document your arc publicly. Your links become a verified journal,
              and may be featured on the site or at the Expo.
            </p>
          </div>
          <div className="sp-steps">
            {POLICY_STEPS.map((s, i) => (
              <div className="sp-step" key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
