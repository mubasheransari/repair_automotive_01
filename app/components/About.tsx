import Image from "next/image";
import Link from "next/link";
import { Wrench, ShieldCheck, Users, ArrowRight } from "lucide-react";

const POINTS = [
  {
    icon: Wrench,
    title: "Trained on the tools that matter",
    text: "Our technicians hold main-dealer-level diagnostic training across VW Group, BMW and Ford, backed by manufacturer-grade equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing done without your say-so",
    text: "We call before we touch anything beyond the job you booked. You get photos of the fault and a price before we pick up a spanner.",
  },
  {
    icon: Users,
    title: "The same face, every visit",
    text: "No franchise turnover. The technician who quotes your job is the one who signs off the ticket when it's done.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Close-up of an engine bay being serviced at Repair Automotive"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
            About the garage
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            An independent garage that still explains its work
          </h2>
          <p className="mt-5 font-body text-[17px] leading-relaxed text-steel">
            Repair Automotive provides professional vehicle servicing,
            diagnostics, maintenance and repairs to customers throughout
            Corby, Northamptonshire and the surrounding areas — with
            reliable workmanship, honest advice and competitive pricing on
            every job, whether it&apos;s routine servicing or complex
            mechanical repairs.
          </p>

          <div className="mt-9 space-y-6">
            {POINTS.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center bg-ink text-signal">
                  <point.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold uppercase tracking-tight text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1 font-body text-[15px] leading-relaxed text-steel">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 border-b-2 border-signal pb-1 font-display text-sm font-semibold uppercase tracking-wide text-ink"
          >
            Read our full story
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
