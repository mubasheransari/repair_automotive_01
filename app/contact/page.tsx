import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Repair Automotive",
  description:
    "Get in touch with Repair Automotive Ltd in Corby, Northamptonshire — address, phone, email, opening hours and a contact form.",
};

const HOURS = [
  ["Monday", "09:00 – 17:00"],
  ["Tuesday", "09:30 – 18:00"],
  ["Wednesday", "09:30 – 18:00"],
  ["Thursday", "09:30 – 18:00"],
  ["Friday", "09:00 – 17:00"],
  ["Saturday", "09:00 – 18:00"],
  ["Sunday", "10:00 – 16:00"],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We reply within one working day"
        title="Contact Us"
        subtitle="Questions about a quote, an existing job, or anything else — send a message or call the workshop directly."
        image="https://images.unsplash.com/photo-1632733711679-529326f6db12?fm=jpg&q=60&w=1600&auto=format&fit=crop"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
              Send a message
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink">
              Get in touch
            </h2>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-steel">
              Send us a message using the form below, or call us directly —
              we&apos;ll get back to you within one working day.
            </p>
            <div className="mt-8">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div className="flex gap-3">
                <MapPin size={20} className="mt-0.5 flex-none text-signal-dark" />
                <div className="font-body text-[15px] leading-relaxed text-steel">
                  Repair Automotive Ltd, Workshop Unit 2
                  <br />
                  90 Weldon Road, Corby, Northamptonshire, NN17 5UE
                  <br />
                  <a
                    href="https://maps.google.com/?q=Repair+Automotive+Ltd+90+Weldon+Road+Corby+NN17+5UE"
                    className="mt-1 inline-block font-medium text-ink underline decoration-signal decoration-2 underline-offset-2"
                  >
                    Get directions
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="mt-0.5 flex-none text-signal-dark" />
                <a href="tel:+447480956261" className="font-body text-[15px] font-medium text-ink">
                  +44 7480 956261
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="mt-0.5 flex-none text-signal-dark" />
                <a
                  href="mailto:bookings@repairautomotive.co.uk"
                  className="font-body text-[15px] font-medium text-ink"
                >
                  bookings@repairautomotive.co.uk
                </a>
              </div>
              <div className="flex items-start gap-3 border-l-2 border-signal pl-4">
                <Clock size={20} className="mt-0.5 flex-none text-signal-dark" />
                <dl className="w-full font-mono text-[13px]">
                  {HOURS.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex justify-between border-b border-ink/10 py-1.5 last:border-0"
                    >
                      <dt className="text-steel">{day}</dt>
                      <dd className="font-semibold text-ink">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden border border-ink/10">
              <iframe
                title="Map to Repair Automotive Ltd, 90 Weldon Road, Corby, Northamptonshire"
                src="https://www.google.com/maps?q=Repair+Automotive+Ltd+90+Weldon+Road+Corby+NN17+5UE&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="tel:+447480956261"
              className="mt-8 flex items-center justify-center gap-2 bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
            >
              Call Us Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
