import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { services } from "../data/services";
import { ICONS } from "../components/icon-map";

export const metadata: Metadata = {
  title: "Services & Repairs | Repair Automotive",
  description:
    "MOT repair, servicing, brakes, diagnostics, gearbox and steering, tyres, air conditioning and electrical work — all fixed-quoted, all guaranteed.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Eight services, one guarantee"
        title="Services & Repairs"
        subtitle="Every job is quoted before we start and backed by a 12-month workmanship guarantee, whichever bay it comes out of."
        image="https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?fm=jpg&q=60&w=1600&auto=format&fit=crop"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = ICONS[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col overflow-hidden border border-ink/10 bg-white transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(20,24,29,0.25)]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={`${service.image}?fm=jpg&q=75&w=900&auto=format&fit=crop`}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 480px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center bg-ink text-signal">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 font-body text-[15px] leading-relaxed text-steel">
                      {service.shortDesc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
