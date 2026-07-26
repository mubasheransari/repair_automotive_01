import { Phone, ArrowRight } from "lucide-react";

export default function ServiceContactCTA({
  service,
  duration,
}: {
  service: string;
  duration: string;
}) {
  return (
    <div className="docket sticky top-24 px-6 pb-6 pl-11 pt-6">
      <p className="font-mono text-[11px] uppercase tracking-widest text-steel-light">
        Job Ticket &middot; Enquiry
      </p>
      <p className="font-display text-lg font-semibold uppercase text-ink">
        {service}
      </p>

      <dl className="mt-4 space-y-2 border-t border-dashed border-ink/15 pt-4 font-mono text-[13px]">
        <div className="flex justify-between">
          <dt className="text-steel">Typical duration</dt>
          <dd className="font-semibold text-ink">{duration}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-steel">Guarantee</dt>
          <dd className="font-semibold text-emerald-700">12 months</dd>
        </div>
      </dl>

      <a
        href="tel:+447480956261"
        className="mt-5 flex items-center justify-center gap-2 bg-signal py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
      >
        <Phone size={15} />
        Call Us Now
      </a>
      <a
        href={`/contact?service=${encodeURIComponent(service)}`}
        className="mt-3 flex items-center justify-center gap-2 border border-ink/15 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink"
      >
        Contact Us
        <ArrowRight size={15} />
      </a>
    </div>
  );
}
