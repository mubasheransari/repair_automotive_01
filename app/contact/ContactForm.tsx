"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2 } from "lucide-react";
import {
  EMAILJS_CONTACT_SERVICE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_CONTACT_TEMPLATE_ID,
  isEmailJSConfigured,
  getEmailJSErrorMessage,
} from "../lib/emailjs";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sent, setSent] = useState<{ name: string; subject: string } | null>(
    null
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const subject = String(data.get("subject") || "your message");

    if (!isEmailJSConfigured(EMAILJS_CONTACT_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID)) {
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
        EMAILJS_CONTACT_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSent({ name, subject });
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS contact send failed:", err);
      setStatus("error");
      setErrorMessage(getEmailJSErrorMessage(err));
    }
  }

  if (status === "sent" && sent) {
    return (
      <div className="border border-ink/10 bg-paper p-8">
        <CheckCircle2 size={28} className="text-emerald-700" />
        <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-tight text-ink">
          Thanks, {sent.name || "there"}
        </h3>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-steel">
          We&apos;ve received your message about &ldquo;{sent.subject}&rdquo;
          and will reply within one working day.
        </p>
        <button
          type="button"
          onClick={() => {
            formRef.current?.reset();
            setStatus("idle");
            setSent(null);
          }}
          className="mt-5 border border-ink/15 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-steel-light">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            className="border border-ink/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink outline-none placeholder:text-steel-light focus:border-signal-dark"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wide text-steel-light">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="border border-ink/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink outline-none placeholder:text-steel-light focus:border-signal-dark"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wide text-steel-light">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          required
          className="border border-ink/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink outline-none placeholder:text-steel-light focus:border-signal-dark"
          placeholder="e.g. Question about a quote"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wide text-steel-light">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none border border-ink/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink outline-none placeholder:text-steel-light focus:border-signal-dark"
          placeholder="How can we help?"
        />
      </label>

      {status === "error" && (
        <div className="flex items-start gap-2.5 border border-brake/30 bg-brake/5 px-4 py-3">
          <AlertTriangle size={18} className="mt-0.5 flex-none text-brake" />
          <p className="font-body text-[14px] leading-relaxed text-ink">
            {errorMessage}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center justify-center gap-2 bg-ink py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
