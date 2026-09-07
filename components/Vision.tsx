import Image from "next/image";

const MANTRAS = [
  {
    num: "01",
    label: "One",
    image: "/images/mantra-hero.webp",
    alt: "An aspiring Indian screen performer stepping toward a film set spotlight",
    body: (
      <>
        I Am the <strong>Hero of My Own Story.</strong>
      </>
    ),
    featured: false,
  },
  {
    num: "02",
    label: "Two",
    image: "/images/mantra-decision.webp",
    alt: "An Indian performer leaving a dressing room and stepping onto a bright set",
    body: (
      <>
        One Decision Today. <strong>A Lifetime of Change.</strong>
      </>
    ),
    featured: true,
  },
  {
    num: "03",
    label: "Three",
    image: "/images/mantra-new-scene.webp",
    alt: "An Indian performer walking onto a new cinema set at sunrise",
    body: (
      <>
        Every Day is a <strong>New Scene.</strong>
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
        <span className="eyebrow">The Three Transformation Mantras</span>
      </div>

      <div className="vision-scroller">
        {MANTRAS.map((m) => (
          <div
            key={m.num}
            className={`vision-card ${m.featured ? "is" : "not"} reveal`}
            data-reveal
          >
            <Image
              src={m.image}
              alt={m.alt}
              fill
              sizes="(max-width: 720px) 82vw, 460px"
              className="vision-card-image"
            />
            <div className="prefix">{m.num}</div>
            <div className="body">{m.body}</div>
            <div className="footnote">Mantra {m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
