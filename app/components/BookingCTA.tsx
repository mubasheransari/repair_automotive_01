import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function BookingCTA({
  service,
  price,
  duration,
}: {
  service: string;
  price: string;
  duration: string;
}) {
  return (
    <div className="docket sticky top-24 px-6 pb-6 pl-11 pt-6">
      <p className="font-mono text-[11px] uppercase tracking-widest text-steel-light">
        Job Ticket &middot; Quote
      </p>
      <p className="font-display text-lg font-semibold uppercase text-ink">
        {service}
      </p>

      <dl className="mt-4 space-y-2 border-t border-dashed border-ink/15 pt-4 font-mono text-[13px]">
        <div className="flex justify-between">
          <dt className="text-steel">Typical price</dt>
          <dd className="font-semibold text-ink">{price}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-steel">Typical duration</dt>
          <dd className="font-semibold text-ink">{duration}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-steel">Guarantee</dt>
          <dd className="font-semibold text-emerald-700">12 months</dd>
        </div>
      </dl>

      <Link
        href={`/booking?service=${encodeURIComponent(service)}`}
        className="mt-5 flex items-center justify-center gap-2 bg-signal py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
      >
        Book This Service
        <ArrowRight size={15} />
      </Link>
      <a
        href="tel:+447480956261"
        className="mt-3 flex items-center justify-center gap-2 border border-ink/15 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink"
      >
        <Phone size={15} className="text-signal-dark" />
        +44 7480 956261
      </a>
    </div>
  );
}
