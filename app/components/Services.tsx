import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { ICONS } from "./icon-map";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
              What we work on
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              Services &amp; Repairs
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-ink"
          >
            View all services
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between bg-white p-6 transition-colors hover:bg-paper"
              >
                <div>
                  <Icon size={26} strokeWidth={1.75} className="text-signal-dark" />
                  <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-steel">
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
