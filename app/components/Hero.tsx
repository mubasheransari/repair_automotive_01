import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Copy column */}
        <div className="flex flex-col justify-center text-white">
          <span className="mb-5 inline-flex w-fit items-center gap-2 border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-signal">
            Corby, Northamptonshire &middot; Est. 2009
          </span>
          <h1 className="font-display text-[2.6rem] font-semibold uppercase leading-[1.02] tracking-tight text-shadow-hero sm:text-6xl lg:text-[4rem]">
            Fixed right.
            <br />
            Explained straight.
            <br />
            <span className="text-signal">No surprise bills.</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-white/75">
            Independent MOT repair, servicing and repairs from technicians
            who show you the fault before they fix it. Every job leaves the
            bay with a written report no jargon, no upselling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+447480956261"
              className="flex items-center gap-2 border border-white/25 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/60"
            >
              <Phone size={16} className="text-signal" />
              +44 7480 956261
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
            {[
              //"DVSA-approved MOT centre",
              "Genuine & OEM parts",
              "12-month workmanship guarantee",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 font-body text-sm text-white/70"
              >
                <CheckCircle2 size={16} className="text-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image + docket column */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1632733711679-529326f6db12?fm=jpg&q=80&w=1000&auto=format&fit=crop"
              alt="Technician diagnosing a car engine at Repair Automotive"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>

          {/* Signature docket / job-ticket card */}
          <div className="docket absolute -bottom-8 left-1/2 w-[88%] max-w-sm -translate-x-1/2 pb-5 pl-9 pr-5 pt-5 sm:-left-6 sm:bottom-8 sm:translate-x-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-steel-light">
                  Job Ticket &middot; #RA-2216
                </p>
                <p className="font-display text-lg font-semibold uppercase text-ink">
                  Vehicle Health Check
                </p>
              </div>
              <span className="stamp border-2 border-brake px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brake">
                Free
              </span>
            </div>
            <dl className="mt-4 space-y-2 font-mono text-[13px]">
              {[
                ["Engine", "OK"],
                ["Brakes", "OK"],
                ["Tyres", "OK"],
                ["MOT", "Due 12 Sep"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <dt className="text-steel">{k}</dt>
                  <dd
                    className={
                      v === "OK"
                        ? "font-semibold text-emerald-700"
                        : "font-semibold text-signal-dark"
                    }
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="hazard-rule" aria-hidden="true" />
    </section>
  );
}
