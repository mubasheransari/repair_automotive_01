import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs, homeContent } from "../data/blogs";

/** Home-page copy supplied in the web content document, plus links to every blog */
export default function CorbyAutoRepairs() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {homeContent.sections.map((section, i) => (
            <div key={section.heading}>
              <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
                {i === 0 ? "Corby auto repairs" : "Local drivers"}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-body text-[17px] leading-relaxed text-steel"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-ink/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
              Corby repair guides
            </h3>
            <Link
              href="/blogs"
              className="flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-ink"
            >
              View all blogs
              <ArrowRight size={15} />
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/${blog.slug}`}
                  className="block border border-ink/15 bg-white px-4 py-2.5 font-body text-[14px] font-medium text-steel transition-colors hover:border-signal hover:text-ink"
                >
                  {blog.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
