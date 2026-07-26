import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya Chandra",
    car: "VW Golf, 2018",
    quote:
      "Told me the exhaust noise was a heat shield, not a full system like the last place quoted. Fixed in 40 minutes for a fraction of the price.",
  },
  {
    name: "Marcus Webb",
    car: "Ford Focus, 2015",
    quote:
      "Failed the MOT on an advisory I didn't understand — they walked me round the car and showed me the wear before booking the repair.",
  },
  {
    name: "Sian Ellery",
    car: "BMW 3 Series, 2019",
    quote:
      "Main dealer wanted three days for a diagnostic. Repair Automotive had the fault code read and the part ordered before lunch.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
          From the job book
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          What customers say
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div key={review.name} className="docket px-6 pb-6 pl-11 pt-6">
              <div className="flex gap-0.5 text-signal-dark">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-ink">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-dashed border-ink/15 pt-4">
                <p className="font-display text-sm font-semibold uppercase tracking-tight text-ink">
                  {review.name}
                </p>
                <p className="font-mono text-[12px] uppercase tracking-wide text-steel-light">
                  {review.car}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
