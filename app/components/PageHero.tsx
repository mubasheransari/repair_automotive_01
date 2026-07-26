import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs: Crumb[];
}) {
  return (
    <section
      className="page-hero"
      style={{ ["--hero-image" as string]: `url(${image})` }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-white/60">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-signal">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/90">{crumb.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight size={12} />}
            </span>
          ))}
        </nav>

        <span className="font-mono text-xs uppercase tracking-widest text-signal">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
