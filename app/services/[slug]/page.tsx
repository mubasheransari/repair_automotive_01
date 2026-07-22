import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "../../components/PageHero";
import FAQAccordion from "../../components/FAQAccordion";
import BookingCTA from "../../components/BookingCTA";
import { services, getService } from "../../data/services";
import { ICONS } from "../../components/icon-map";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Repair Automotive`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon];
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${service.price} · ${service.duration}`}
        title={service.title}
        subtitle={service.shortDesc}
        image={`${service.image}?fm=jpg&q=60&w=1600&auto=format&fit=crop`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-ink text-signal">
                <Icon size={22} />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
                {service.title}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {service.intro.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[17px] leading-relaxed text-steel"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden">
              <Image
                src={`${service.image}?fm=jpg&q=80&w=1200&auto=format&fit=crop`}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 700px"
                className="object-cover"
              />
            </div>

            {/* What's included */}
            <h2 className="mt-12 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              What&apos;s included
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-none text-signal-dark"
                  />
                  <span className="font-body text-[15px] leading-relaxed text-steel">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Process */}
            <h2 className="mt-12 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              How it works
            </h2>
            <ol className="mt-6 space-y-6 border-l-2 border-ink/10 pl-7">
              {service.process.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[35px] flex h-6 w-6 items-center justify-center bg-signal font-mono text-[11px] font-semibold text-ink">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold uppercase tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-body text-[15px] leading-relaxed text-steel">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            {/* FAQ */}
            <h2 className="mt-12 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              Common questions
            </h2>
            <div className="mt-5">
              <FAQAccordion items={service.faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <BookingCTA
              service={service.title}
              price={service.price}
              duration={service.duration}
            />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
            Other services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => {
              const RIcon = ICONS[r.icon];
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex flex-col justify-between border border-ink/10 bg-white p-6 transition-colors hover:bg-white"
                >
                  <div>
                    <RIcon size={22} className="text-signal-dark" />
                    <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-tight text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 font-body text-[14px] leading-relaxed text-steel">
                      {r.shortDesc}
                    </p>
                  </div>
                  <span className="mt-5 flex items-center gap-1 font-mono text-[12px] uppercase tracking-wide text-ink/60 group-hover:text-signal-dark">
                    View details
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl">
              Ready to book your {service.title.toLowerCase()}?
            </h2>
            <p className="mt-2 max-w-md font-body text-white/65">
              Tell us your reg and what&apos;s wrong — we&apos;ll confirm a
              price and the next available bay.
            </p>
          </div>
          <Link
            href={`/booking?service=${encodeURIComponent(service.title)}`}
            className="flex flex-none items-center gap-2 bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
          >
            Book Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
