/**
 * EmailJS configuration.
 *
 * All values come from environment variables so real account IDs never get
 * committed to the repo. Set these in a `.env.local` file at the project
 * root (see `.env.local.example`) with the values from your EmailJS
 * dashboard: https://dashboard.emailjs.com/admin
 *
 * They must be prefixed with NEXT_PUBLIC_ because the contact and booking
 * forms send email directly from the browser.
 *
 * Two separate Email Services are supported (as set up in the dashboard —
 * "booking" and "contact us") since they may point at different inboxes.
 */
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const EMAILJS_CONTACT_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID ?? "";
export const EMAILJS_CONTACT_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "";

export const EMAILJS_BOOKING_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_BOOKING_SERVICE_ID ?? "";
export const EMAILJS_BOOKING_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID ?? "";

export function isEmailJSConfigured(serviceId: string, templateId: string) {
  return Boolean(EMAILJS_PUBLIC_KEY && serviceId && templateId);
}

/**
 * EmailJS rejects with an EmailJSResponseStatus object ({ status, text }),
 * not a standard Error, so `err instanceof Error` checks miss the real
 * reason. This pulls out whatever message is actually available.
 */
export function getEmailJSErrorMessage(err: unknown): string {
  if (err && typeof err === "object") {
    const withText = err as { text?: string; status?: number };
    if (withText.text) {
      return `${withText.text}${withText.status ? ` (status ${withText.status})` : ""}`;
    }
  }
  if (err instanceof Error) return err.message;
  return "Something went wrong sending your request. Please try again or call us directly.";
}
