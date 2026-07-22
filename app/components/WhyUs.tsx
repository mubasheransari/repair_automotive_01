import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?fm=jpg&q=75&w=1800&auto=format&fit=crop"
        alt="A toolbox full of wrenches and hand tools used at Repair Automotive"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-signal">
          Our approach
        </span>
        <p className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
          &ldquo;We quote the job, not the customer. Whether you drive a
          fifteen-year-old runaround or a car still under warranty, the
          diagnosis comes first, the price is written down, and you decide
          what happens next.&rdquo;
        </p>
        <p className="mt-6 font-mono text-sm uppercase tracking-wide text-white/60">
          — The Repair Automotive Team
        </p>
      </div>
    </section>
  );
}
