"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-semibold uppercase tracking-tight text-ink">
                {item.q}
              </span>
              <Plus
                size={18}
                className={`flex-none text-signal-dark transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 font-body text-[15px] leading-relaxed text-steel">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
