import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const HOURS = [
  ["Monday", "09:00 – 17:00"],
  ["Tuesday", "09:30 – 18:00"],
  ["Wednesday", "09:30 – 18:00"],
  ["Thursday", "09:30 – 18:00"],
  ["Friday", "09:00 – 17:00"],
  ["Saturday", "09:00 – 18:00"],
  ["Sunday", "10:00 – 16:00"],
];

export default function HomeVisit() {
  return (
    <section id="location" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1660064769457-eb9cd2839135?fm=jpg&q=78&w=1200&auto=format&fit=crop"
              alt="A car parked inside the Repair Automotive garage bay"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
              Find us
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              90 Weldon Road, Corby
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <MapPin size={20} className="mt-0.5 flex-none text-signal-dark" />
                <p className="font-body text-[15px] leading-relaxed text-steel">
                  Repair Automotive Ltd, Workshop Unit 2
                  <br />
                  90 Weldon Road, Corby, Northamptonshire, NN17 5UE
                </p>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="mt-0.5 flex-none text-signal-dark" />
                <a href="tel:+447480956261" className="font-body text-[15px] text-steel">
                  +44 7480 956261
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 flex-none text-signal-dark" />
                <dl className="w-full max-w-xs font-mono text-[13px]">
                  {HOURS.map(([day, time]) => (
                    <div key={day} className="flex justify-between py-1">
                      <dt className="text-steel">{day}</dt>
                      <dd className="font-semibold text-ink">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
              >
                Contact &amp; Directions
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+447480956261"
                className="flex items-center gap-2 border border-ink/20 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/50"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
