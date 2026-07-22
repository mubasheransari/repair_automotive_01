"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo height={42} />
          <span className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
            Repair <span className="text-signal-dark">Automotive</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-medium text-steel transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+447480956261"
            className="flex items-center gap-2 font-mono text-sm font-medium text-ink"
          >
            <Phone size={16} className="text-signal-dark" />
            +44 7480 956261
          </a>
          <Link
            href="/booking"
            className="bg-signal px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-body text-base font-medium text-steel"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+447480956261"
              className="flex items-center justify-center gap-2 border border-ink/15 py-3 font-mono text-sm font-medium text-ink"
            >
              <Phone size={16} className="text-signal-dark" />
              +44 7480 956261
            </a>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="bg-signal py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-ink"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
