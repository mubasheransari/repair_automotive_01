const STATS = [
  { value: "DVSA", unit: "", label: "Approved MOT repair station" },
  { value: "8,500+", unit: "", label: "MOTs carried out" },
  { value: "4.9", unit: "/5", label: "Average customer rating" },
  { value: "92%", unit: "", label: "Repairs done same day" },
];

export default function TrustStrip() {
  return (
    <section className="bg-ink pb-10 pt-16 sm:pb-14 sm:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-l-2 border-signal/60 pl-4">
            <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {stat.value}
              <span className="text-lg text-signal">{stat.unit}</span>
            </p>
            <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-white/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
