import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import BlogContactCTA from "../components/BlogContactCTA";
import { ICONS } from "../components/icon-map";
import { blogs, getBlog, SITE_URL } from "../data/blogs";
import { getService } from "../data/services";

// `params` is awaited so this works on Next.js 15/16 (Promise) and 14 (plain object).
type Props = { params: Promise<{ slug: string }> };

/** "/Car-Repair-Corby", "/Corby Car Diagnostics" etc. -> "car-repair-corby" */
function normalizeSlug(raw: string) {
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    /* keep raw */
  }
  return decoded.trim().toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-");
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(normalizeSlug(slug));
  if (!blog) return {};
  const url = `${SITE_URL}${blog.canonicalPath}`;
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlog(normalizeSlug(slug));
  if (!blog) notFound();
  // Differently-cased / spaced URLs (as written in the content doc) -> the clean canonical URL
  if (slug !== blog.slug) permanentRedirect(`/${blog.slug}`);

  const Icon = ICONS[blog.icon];
  const index = blogs.findIndex((b) => b.slug === blog.slug);
  const related = [1, 2, 3].map((n) => blogs[(index + n) % blogs.length]);
  const service = blog.serviceSlug ? getService(blog.serviceSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Corby auto repair guide"
        title={blog.title}
        subtitle={blog.metaDescription}
        image={`${blog.image}?fm=jpg&q=60&w=1600&auto=format&fit=crop`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: blog.navLabel },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_320px] lg:gap-12">
          <article>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-ink text-signal">
                <Icon size={22} />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-signal-dark">
                {blog.navLabel}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {blog.intro.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[17px] leading-relaxed text-steel"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden">
              <Image
                src={`${blog.image}?fm=jpg&q=80&w=1200&auto=format&fit=crop`}
                alt={blog.imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 700px"
                className="object-cover"
              />
            </div>

            {blog.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mt-12 font-display text-2xl font-semibold uppercase tracking-tight text-ink">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-body text-[17px] leading-relaxed text-steel"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 flex flex-col gap-4 border border-ink/10 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-steel-light">
                  Related service
                </p>
                <p className="mt-1 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {service ? service.title : "Services & Repairs"}
                </p>
              </div>
              <Link
                href={service ? `/services/${service.slug}` : "/services"}
                className="inline-flex items-center gap-2 border-b-2 border-signal pb-1 font-display text-sm font-semibold uppercase tracking-wide text-ink"
              >
                {service ? "View service" : "View all services"}
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          <aside>
            <BlogContactCTA topic={blog.navLabel} />
          </aside>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              More Corby repair guides
            </h2>
            <Link
              href="/blogs"
              className="flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-ink"
            >
              View all blogs
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => {
              const RIcon = ICONS[r.icon];
              return (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="group flex flex-col justify-between border border-ink/10 bg-white p-6 transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(20,24,29,0.35)]"
                >
                  <div>
                    <RIcon size={22} className="text-signal-dark" />
                    <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-tight text-ink">
                      {r.navLabel}
                    </h3>
                    <p className="mt-1.5 font-body text-[14px] leading-relaxed text-steel">
                      {r.metaDescription}
                    </p>
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
              Need help with {blog.navLabel.toLowerCase()}?
            </h2>
            <p className="mt-2 max-w-md font-body text-white/65">
              Tell us your reg and what&apos;s wrong — we&apos;ll get back to
              you with the next available slot.
            </p>
          </div>
          <Link
            href={`/contact?service=${encodeURIComponent(blog.navLabel)}`}
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
