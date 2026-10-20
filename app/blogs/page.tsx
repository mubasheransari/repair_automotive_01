import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { ICONS } from "../components/icon-map";
import { blogs, SITE_URL } from "../data/blogs";

const TITLE = "Corby Auto Repair Blogs | Repair Automotive";
const DESCRIPTION =
  "Guides to car repair, servicing, diagnostics, engine, clutch, air conditioning, wheel alignment, battery and electrical work from Repair Automotive in Corby.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blogs`,
    type: "website",
  },
};

export default function BlogsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Corby auto repair guides"
        title="Blogs"
        subtitle="Straightforward guides to car repairs, servicing and diagnostics from the Repair Automotive workshop in Corby."
        image="https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?fm=jpg&q=60&w=1600&auto=format&fit=crop"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              const Icon = ICONS[blog.icon];
              return (
                <Link
                  key={blog.slug}
                  href={`/${blog.slug}`}
                  className="group flex flex-col overflow-hidden border border-ink/10 bg-white transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(20,24,29,0.35)]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={`${blog.image}?fm=jpg&q=75&w=900&auto=format&fit=crop`}
                      alt={blog.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center bg-ink text-signal">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
                      {blog.navLabel}
                    </h2>
                    <p className="mt-2 flex-1 font-body text-[15px] leading-relaxed text-steel">
                      {blog.metaDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink">
                      Read more
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl">
              Need a hand with your car?
            </h2>
            <p className="mt-2 max-w-md font-body text-white/65">
              Tell us your reg and what&apos;s wrong — we&apos;ll get back to
              you with the next available slot.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex flex-none items-center gap-2 bg-signal px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
