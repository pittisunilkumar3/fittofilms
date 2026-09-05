/** Cinematic film-strip divider used to mark act breaks. */
export default function FilmStrip({ label }: { label: string }) {
  return (
    <div className="film-strip" aria-hidden="true">
      <span className="fs-perf fs-top" />
      <span className="fs-label">{label}</span>
      <span className="fs-perf fs-bottom" />
    </div>
  );
}
