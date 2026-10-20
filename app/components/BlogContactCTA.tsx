import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

/** Sticky "job ticket" enquiry card for blog pages — same docket look as the service pages */
export default function BlogContactCTA({ topic }: { topic: string }) {
  return (
    <div className="docket sticky top-24 px-6 pb-6 pl-11 pt-6">
      <p className="font-mono text-[11px] uppercase tracking-widest text-steel-light">
        Job Ticket &middot; Enquiry
      </p>
      <p className="font-display text-lg font-semibold uppercase text-ink">
        {topic}
      </p>

      <dl className="mt-4 space-y-2 border-t border-dashed border-ink/15 pt-4 font-mono text-[13px]">
        <div className="flex justify-between">
          <dt className="text-steel">Workshop</dt>
          <dd className="font-semibold text-ink">Corby</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-steel">Reply</dt>
          <dd className="font-semibold text-ink">1 working day</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-steel">Guarantee</dt>
          <dd className="font-semibold text-emerald-700">12 months</dd>
        </div>
      </dl>

      <a
        href="tel:+44 7472 238124"
        className="mt-5 flex items-center justify-center gap-2 bg-signal py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
      >
        <Phone size={15} />
        Call Us Now
      </a>
      <Link
        href={`/contact?service=${encodeURIComponent(topic)}`}
        className="mt-3 flex items-center justify-center gap-2 border border-ink/15 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink"
      >
        Contact Us
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
