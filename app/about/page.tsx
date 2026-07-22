import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Wrench, Users, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Repair Automotive",
  description:
    "Repair Automotive provides professional vehicle servicing, diagnostics, maintenance and repairs to customers across Corby, Northamptonshire and the surrounding areas.",
};

const TIMELINE = [
  {
    year: "2009",
    title: "One ramp, one promise",
    text: "Repair Automotive opens with a single ramp on Weldon Road, built on a promise of reliable workmanship and honest advice.",
  },
  {
    year: "2013",
    title: "DVSA test centre approved",
    text: "Repair Automotive becomes an approved MOT testing station, bringing testing in-house instead of sending customers elsewhere.",
  },
  {
    year: "2017",
    title: "Second bay, first apprentice",
    text: "Growing demand for diagnostics work adds a second ramp and our first trainee technician, still on staff today.",
  },
  {
    year: "2021",
    title: "Dealer-level diagnostics equipment",
    text: "Investment in manufacturer-grade diagnostic tools brings BMW, Ford and VW Group fault-finding in-house.",
  },
  {
    year: "2025",
    title: "Four bays, same values",
    text: "Now running four ramps and a team of six, Repair Automotive still hand-writes the same job docket it did in 2009 — one job, one clear explanation.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Show, don't just tell",
    text: "If a part has failed, you see it. We photograph every fault before repair, not after, so there's no ambiguity about what needed doing.",
  },
  {
    icon: Wrench,
    title: "Fix the cause, not the symptom",
    text: "A warning light or a noise is a starting point, not a diagnosis. We trace faults to their source before quoting a repair.",
  },
  {
    icon: Users,
    title: "One technician, start to finish",
    text: "The person who quotes your job is the one who signs it off. No handovers, no diluted accountability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Trusted vehicle care in Corby, Northamptonshire"
        subtitle="Professional servicing, diagnostics, maintenance and repairs — delivered with reliable workmanship, honest advice and competitive pricing on every job."
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?fm=jpg&q=60&w=1600&auto=format&fit=crop"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Founder story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1632733711679-529326f6db12?fm=jpg&q=80&w=1000&auto=format&fit=crop"
              alt="A technician at Repair Automotive working on an engine"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
              About Us
            </span>
            <p className="mt-4 font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
              &ldquo;Reliable workmanship, honest advice, and competitive
              pricing on every job.&rdquo;
            </p>
            <p className="mt-6 font-body text-[17px] leading-relaxed text-steel">
              Repair Automotive is proud to provide professional vehicle
              servicing, diagnostics, maintenance, and repair services to
              customers throughout Corby, Northamptonshire, and the
              surrounding areas. We are committed to delivering reliable
              workmanship, honest advice, and competitive pricing on every
              job, whether it&apos;s routine servicing or complex mechanical
              repairs.
            </p>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-steel">
              At Repair Automotive, customer satisfaction is at the heart of
              everything we do. We take pride in offering a friendly,
              transparent, and dependable service you can trust, ensuring
              every vehicle receives the care and attention it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
            Sixteen years on Weldon Road
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            How we got here
          </h2>

          <ol className="mt-12 space-y-10 border-l-2 border-ink/10 pl-8">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center bg-signal font-mono text-[11px] font-semibold text-ink">
                  {item.year.slice(2)}
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-signal-dark">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xl font-body text-[15px] leading-relaxed text-steel">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
            How we work
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Three rules every technician works to
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title}>
                <div className="flex h-12 w-12 items-center justify-center bg-ink text-signal">
                  <value.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-steel">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
            The workshop
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Around the bays
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1660064769457-eb9cd2839135?fm=jpg&q=75&w=600&auto=format&fit=crop",
                alt: "A car inside a Repair Automotive service bay",
              },
              {
                src: "https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?fm=jpg&q=75&w=600&auto=format&fit=crop",
                alt: "A toolbox of wrenches used across the workshop",
              },
              {
                src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?fm=jpg&q=75&w=600&auto=format&fit=crop",
                alt: "Close-up of an engine bay during a service",
              },
              {
                src: "https://images.unsplash.com/photo-1735012314901-10b3638774a0?fm=jpg&q=75&w=600&auto=format&fit=crop",
                alt: "A tyre being fitted in the workshop",
              },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, 240px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl">
              Come and see the bays for yourself
            </h2>
            <p className="mt-2 max-w-md font-body text-white/65">
              Book an appointment online or drop by our Weldon Road workshop — the
              kettle&apos;s always on.
            </p>
          </div>
          <Link
            href="/booking"
            className="flex flex-none items-center gap-2 bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
          >
            Book an Appointment
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
