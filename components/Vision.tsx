import Image from "next/image";

const MANTRAS = [
  {
    num: "01",
    body: (
      <>
        I Am the <strong>Hero of My Own Story.</strong>
      </>
    ),
    featured: false,
  },
  {
    num: "02",
    body: (
      <>
        One Decision Today. <strong>A Lifetime of Change.</strong>
      </>
    ),
    featured: true,
  },
  {
    num: "03",
    body: (
      <>
        Every Day is a <strong>New Scene.</strong>
      </>
    ),
    featured: false,
  },
  {
    num: "04",
    body: (
      <>
        Transform Together. <strong>Inspire Millions.</strong>
      </>
    ),
    featured: false,
  },
  {
    num: "05",
    body: (
      <>
        Build a Legacy, <strong>Not Just a Body.</strong>
      </>
    ),
    featured: true,
  },
  {
    num: "06",
    body: (
      <>
        Transform Naturally. <strong>Become Screen Ready.</strong>
      </>
    ),
    featured: false,
  },
];

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="wrap">
        <div className="vision-head reveal" data-reveal>
          <span className="eyebrow">Act I · Chapter 01 · The Vision</span>
          <h2>WHY WE EXIST.</h2>
        </div>

        <p className="vision-statement reveal" data-reveal>
          India&apos;s most trusted platform for becoming healthier, more
          confident, and <strong>screen ready</strong>.
        </p>

        <p className="vision-manifesto reveal" data-reveal>
          A transformation is never only physical. You don&apos;t just get fit.
          You become <strong>screen ready.</strong>
        </p>

        <div className="vision-still reveal" data-reveal>
          <Image
            src="/images/vision-still.jpg"
            alt="Aspiring actor preparing with confidence before a studio shoot"
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="vision-still-img"
          />
          <span className="vs-tag">Season 01 · The Journey Begins</span>
        </div>
      </div>

      <div className="mantra-label wrap reveal" data-reveal>
        <span className="eyebrow">The Six Transformation Mantras</span>
      </div>

      <div className="vision-scroller">
        {MANTRAS.map((m) => (
          <div
            key={m.num}
            className={`vision-card ${m.featured ? "is" : "not"} reveal`}
            data-reveal
          >
            <div className="prefix">{m.num}</div>
            <div className="body">{m.body}</div>
            <div className="footnote">
              Mantra{" "}
              {m.num === "01"
                ? "One"
                : m.num === "02"
                  ? "Two"
                  : m.num === "03"
                    ? "Three"
                    : m.num === "04"
                      ? "Four"
                      : m.num === "05"
                        ? "Five"
                        : "Six"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
