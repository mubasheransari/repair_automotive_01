import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import { services } from "../data/services";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo height={36} />
              <span className="font-display text-lg font-semibold uppercase tracking-tight text-white">
                Repair Automotive
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/55">
              Independent MOT testing, servicing and repairs in Corby, Northamptonshire
              since 2009.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-sm text-white/70 hover:text-signal"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">
              Garage
            </h4>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-white/70">
              <li><Link href="/about" className="hover:text-signal">About Us</Link></li>
              <li><Link href="/#reviews" className="hover:text-signal">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-signal">Find Us</Link></li>
              <li><Link href="/booking" className="hover:text-signal">Book Online</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-none text-signal" />
                <span>
                  Repair Automotive Ltd
                  <br />
                  Workshop Unit 2, 90 Weldon Road
                  <br />
                  Corby, Northamptonshire, NN17 5UE
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-none text-signal" />
                <a href="tel:+447480956261">+44 7480 956261</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-none text-signal" />
                <a href="mailto:bookings@repairautomotive.co.uk">
                  bookings@repairautomotive.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} Repair Automotive. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/40">
            Registered VOSA/DVSA MOT Testing Station
          </p>
        </div>
      </div>
    </footer>
  );
}
