"use client";

import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2 } from "lucide-react";
import { services } from "../data/services";
import {
  EMAILJS_BOOKING_SERVICE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_BOOKING_TEMPLATE_ID,
  isEmailJSConfigured,
  getEmailJSErrorMessage,
} from "../lib/emailjs";

function nextWeekdayISO(daysAhead: number) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split("T")[0];
}

function makeReference() {
  return `RA-${Math.floor(1000 + Math.random() * 9000)}`;
}

const TIME_SLOTS = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
];

type Status = "idle" | "sending" | "sent" | "error";

type BookingDetails = {
  name: string;
  service: string;
  date: string;
  time: string;
  reg: string;
};

export default function BookingForm() {
  const searchParams = useSearchParams();
  const presetService = searchParams.get("service") ?? "";

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [reference] = useState(makeReference);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const minDate = useMemo(() => nextWeekdayISO(0), []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const details: BookingDetails = {
      name: String(data.get("from_name") || ""),
      service: String(data.get("service_required") || ""),
      date: String(data.get("from_date") || ""),
      time: String(data.get("from_time") || ""),
      reg: String(data.get("reg") || ""),
    };

    if (!isEmailJSConfigured(EMAILJS_BOOKING_SERVICE_ID, EMAILJS_BOOKING_TEMPLATE_ID)) {
      setStatus("error");
      setErrorMessage(
        "Email sending isn't configured yet. Add your EmailJS service, template and public key to .env.local (see .env.local.example)."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        EMAILJS_BOOKING_SERVICE_ID,
        EMAILJS_BOOKING_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setBooking(details);
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS booking send failed:", err);
      setStatus("error");
      setErrorMessage(getEmailJSErrorMessage(err));
    }
  }

  if (status === "sent" && booking) {
    return (
      <div className="docket mx-auto max-w-lg px-7 pb-8 pl-12 pt-7">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-light">
              Job Ticket &middot; {reference}
            </p>
            <p className="font-display text-xl font-semibold uppercase text-ink">
              Appointment Requested
            </p>
          </div>
          <span className="stamp border-2 border-emerald-700 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            Pending
          </span>
        </div>

        <dl className="mt-6 space-y-2.5 border-t border-dashed border-ink/15 pt-5 font-mono text-[13px]">
          {[
            ["Name", booking.name],
            ["Service", booking.service || "General enquiry"],
            ["Vehicle reg", booking.reg || "—"],
            ["Preferred date", booking.date],
            ["Preferred time", booking.time],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <dt className="text-steel">{k}</dt>
              <dd className="font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 flex items-start gap-2 font-body text-[14px] leading-relaxed text-steel">
          <CheckCircle2 size={17} className="mt-0.5 flex-none text-emerald-700" />
          We&apos;ve emailed your request — a technician will call to confirm
          the exact time within one working day.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              formRef.current?.reset();
              setStatus("idle");
              setBooking(null);
            }}
            className="border border-ink/15 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink"
          >
            Make another booking
          </button>
          <Link
            href="/"
            className="bg-signal px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink hover:bg-signal-dark"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl bg-ink p-7 sm:p-10"
    >
      <input type="hidden" name="reference" value={reference} readOnly />
      <input type="hidden" name="name" value={fullName} readOnly />
      <input type="hidden" name="email" value={email} readOnly />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Full name
          </span>
          <input
            type="text"
            name="from_name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none placeholder:text-white/30 focus:border-signal"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Phone number
          </span>
          <input
            type="tel"
            name="number"
            required
            className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none placeholder:text-white/30 focus:border-signal"
            placeholder="07xxx xxxxxx"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Email
          </span>
          <input
            type="email"
            name="from_email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none placeholder:text-white/30 focus:border-signal"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Vehicle registration
          </span>
          <input
            type="text"
            name="reg"
            className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-mono text-sm uppercase text-white outline-none placeholder:text-white/30 focus:border-signal"
            placeholder="AB12 CDE"
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
          Service needed
        </span>
        <select
          name="service_required"
          defaultValue={presetService}
          className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none focus:border-signal"
        >
          <option value="" className="bg-ink">
            Not sure / general enquiry
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-ink">
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Preferred date
          </span>
          <input
            type="date"
            name="from_date"
            required
            min={minDate}
            className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none focus:border-signal [color-scheme:dark]"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Preferred time
          </span>
          <select
            name="from_time"
            required
            defaultValue=""
            className="border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none focus:border-signal"
          >
            <option value="" disabled className="bg-ink">
              Select a time
            </option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t} className="bg-ink">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wide text-white/50">
          What&apos;s happening with the car?
        </span>
        <textarea
          name="message"
          rows={3}
          className="resize-none border border-white/15 bg-white/5 px-3.5 py-2.5 font-body text-sm text-white outline-none placeholder:text-white/30 focus:border-signal"
          placeholder="e.g. squeaking noise from the front brakes"
        />
      </label>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2.5 border border-signal/40 bg-signal/10 px-4 py-3">
          <AlertTriangle size={18} className="mt-0.5 flex-none text-signal" />
          <p className="font-body text-[14px] leading-relaxed text-white/85">
            {errorMessage}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center justify-center gap-2 bg-signal py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Request Appointment
            <ArrowRight size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-center font-mono text-[11px] text-white/40">
        We&apos;ll call to confirm — no payment is taken online.
      </p>
    </form>
  );
}
