import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment | Repair Automotive",
  description:
    "Book an MOT, service or repair appointment at Repair Automotive. Tell us your reg and what's wrong — we'll confirm a price and the next available bay.",
};

const POINTS = [
  {
    icon: Clock,
    title: "Same-week availability",
    text: "Most appointments are confirmed within 48 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed quote, no surprises",
    text: "We call to confirm price before any work starts.",
  },
  {
    icon: Phone,
    title: "Prefer to talk it through?",
    text: "Call +44 7480 956261 and we'll book it over the phone.",
  },
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Takes about a minute"
        title="Book an Appointment"
        subtitle="Tell us your reg, the service you need, and a preferred date — a technician will call to confirm the exact time and price."
        image="https://images.unsplash.com/photo-1660064769457-eb9cd2839135?fm=jpg&q=60&w=1600&auto=format&fit=crop"
        crumbs={[{ label: "Home", href: "/" }, { label: "Booking" }]}
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {POINTS.map((point) => (
              <div key={point.title} className="flex gap-3">
                <div className="flex h-11 w-11 flex-none items-center justify-center bg-ink text-signal">
                  <point.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1 font-body text-[14px] leading-relaxed text-steel">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Suspense fallback={null}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
