import { AlertTriangle } from "lucide-react";

export default function CautionNotice() {
  return (
    <section className="bg-paper px-5 sm:px-8">
      <div className="mx-auto max-w-7xl py-6 sm:py-8">
        <div className="flex flex-col items-start gap-4 rounded-lg border-2 border-signal/60 bg-signal/10 px-5 py-5 sm:flex-row sm:items-center sm:px-8 sm:py-6">
          <AlertTriangle
            className="h-8 w-8 shrink-0 text-signal-dark sm:h-10 sm:w-10"
            aria-hidden="true"
          />
          <p className="text-base leading-snug text-ink sm:text-lg">
            <span className="font-semibold">Caution:</span> Vehicle must be
            collected within 3 days after notification that diagnostics or
            repairs are complete. Storage charges of £25 per day will apply
            after that period.
          </p>
        </div>
      </div>
    </section>
  );
}