const ARCHETYPES = [
  {
    idx: "A · 01",
    tag: "Action",
    name: "The Action Hero",
    quote: '"Built for the fight scene. Trained for the close-up."',
    orange: false,
  },
  {
    idx: "A · 02",
    tag: "Drama",
    name: "The OTT Lead",
    quote: '"The face the algorithm is searching for."',
    orange: true,
  },
  {
    idx: "A · 03",
    tag: "Anime",
    name: "The Anime Avatar",
    quote: '"Body of a character. Soul of a fan."',
    orange: false,
  },
  {
    idx: "A · 04",
    tag: "Cosplay",
    name: "The Cosplay Icon",
    quote: '"You are the character. The camera confirms it."',
    orange: false,
  },
  {
    idx: "A · 05",
    tag: "Reels",
    name: "The Reels Royalty",
    quote: '"30 seconds. 30 million views. 1 transformation."',
    orange: false,
  },
  {
    idx: "A · 06",
    tag: "Mocap",
    name: "The Mocap Performer",
    quote: '"Your body becomes the data."',
    orange: true,
  },
  {
    idx: "A · 07",
    tag: "Dance",
    name: "The Dance Lead",
    quote: '"Every frame is a hook step."',
    orange: false,
  },
  {
    idx: "A · 08",
    tag: "Music",
    name: "The Music Star",
    quote: '"When the beat drops, the frame follows you."',
    orange: false,
  },
];

export default function Archetypes() {
  return (
    <section className="arch" id="archetypes">
      <div className="wrap">
        <div className="arch-head reveal" data-reveal>
          <span className="eyebrow">Act II · Chapter 07 · Character Class</span>
          <h2>
            Choose your <span className="orange">screen-ready</span> archetype.
          </h2>
          <p>
            You enter as who you are. You leave as who you are on screen.
          </p>
        </div>

        <div className="arch-grid">
          {ARCHETYPES.map((a) => (
            <div
              className={`arch-card${a.orange ? " orange" : ""} reveal`}
              key={a.idx}
              data-reveal
            >
              <div className="arch-top">
                <span className="arch-idx">{a.idx}</span>
                <span className="arch-tag">{a.tag}</span>
              </div>
              <div className="arch-body">
                <div className="arch-name">{a.name}</div>
                <div className="arch-quote">{a.quote}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
