import Image from "next/image";

export default function Health() {
  return (
    <section className="health">
      <div className="wrap">
        <div className="health-grid">
          <div className="health-left reveal-l" data-reveal>
            <span className="eyebrow">Act II · Chapter 04 · The Foundation</span>
            <h2>
              No transformation
              <br />
              begins without a <span className="orange">medical baseline.</span>
            </h2>
            <p>
              Every athlete completes a certified health assessment before Day
              One. Not optional. It is the reason we can call this natural.
            </p>
            <div className="health-note">
              A medical partner reviews every baseline. Any red flag pauses the
              arc until a physician clears it.
            </div>
            <div className="health-img">
              <Image
                src="/images/health.jpg"
                alt="Athlete training under a certified coach"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="assessment reveal-r" data-reveal>
            <div className="as-head">Your Day One Assessment</div>
            <div className="as-list">
              <span>Height &amp; Weight</span>
              <span>BMI</span>
              <span>Body Fat</span>
              <span>Waist</span>
              <span>Blood Pressure</span>
              <span>CBC Panel</span>
              <span>Blood Sugar</span>
              <span>Lipid Profile</span>
            </div>
            <div className="as-foot">
              Repeated at the finish. Your progress is measured, not claimed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
