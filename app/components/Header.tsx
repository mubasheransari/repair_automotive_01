"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "./Logo";

type BlogLink = { slug: string; label: string };

const NAV_BEFORE_BLOGS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const NAV_AFTER_BLOGS = [
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

const NAV_LINK_CLASS =
  "font-body text-[15px] font-medium text-steel transition-colors hover:text-ink";

/**
 * Desktop "Blogs" item.
 *  - Hover (or keyboard focus) opens the dropdown listing every blog.
 *  - Clicking the "Blogs" label goes to the /blogs index; clicking the chevron
 *    toggles the dropdown (handy on touch screens and for keyboard users).
 *  - Escape or clicking elsewhere closes it.
 */
function BlogsMenu({ blogLinks }: { blogLinks: BlogLink[] }) {
  const [open, setOpen] = useState(false);
  // "Pinned" = opened by a click/tap, so it stays open when the pointer leaves
  const [pinned, setPinned] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openNow() {
    cancelClose();
    setOpen(true);
  }

  function closeSoon() {
    if (pinned) return;
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  function closeAll() {
    cancelClose();
    setOpen(false);
    setPinned(false);
  }

  function toggleFromChevron() {
    cancelClose();
    if (pinned) {
      closeAll(); // second click closes
    } else {
      setOpen(true); // click shows the blogs (and keeps them showing)
      setPinned(true);
    }
  }

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setPinned(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          closeAll();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") closeAll();
      }}
    >
      <div className="flex items-center gap-1">
        <Link
          href="/blogs"
          onClick={closeAll}
          className={NAV_LINK_CLASS}
        >
          Blogs
        </Link>
        <button
          type="button"
          aria-label="Show blogs menu"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggleFromChevron}
          className="flex h-6 w-6 items-center justify-center text-steel transition-colors hover:text-ink"
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* pt-4 keeps the hover area continuous between the label and the panel */}
      <div
        id={panelId}
        className={`absolute left-1/2 top-full z-50 w-[min(560px,calc(100vw-2rem))] -translate-x-1/2 pt-4 transition duration-150 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-1 opacity-0"
        }`}
      >
        <div className="border border-ink/10 bg-white shadow-[0_24px_48px_-20px_rgba(20,24,29,0.35)]">
          <div className="flex items-center justify-between bg-ink px-4 py-2.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
              Corby auto repair guides
            </span>
            <Link
              href="/blogs"
              onClick={closeAll}
              className="flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-signal"
            >
              View all
              <ArrowRight size={13} />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-px p-2">
            {blogLinks.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/${blog.slug}`}
                  onClick={closeAll}
                  className="group/item flex items-center gap-2.5 px-3 py-2.5 font-body text-[14px] font-medium leading-snug text-steel transition-colors hover:bg-paper hover:text-ink"
                >
                  <span className="h-1.5 w-1.5 flex-none bg-signal transition-transform group-hover/item:scale-125" />
                  {blog.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Header({ blogLinks }: { blogLinks: BlogLink[] }) {
  const [open, setOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  function closeMobile() {
    setOpen(false);
    setMobileBlogsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo height={42} />
          <span className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
            Repair <span className="text-signal-dark">Automotive</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_BEFORE_BLOGS.map((link) => (
            <Link key={link.href} href={link.href} className={NAV_LINK_CLASS}>
              {link.label}
            </Link>
          ))}
          <BlogsMenu blogLinks={blogLinks} />
          {NAV_AFTER_BLOGS.map((link) => (
            <Link key={link.href} href={link.href} className={NAV_LINK_CLASS}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+44 7472 238124"
            className="flex items-center gap-2 font-mono text-sm font-medium text-ink"
          >
            <Phone size={16} className="text-signal-dark" />
            +44 7472 238124
          </a>
          <Link
            href="/contact"
            className="bg-signal px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-signal-dark"
          >
            Contact Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => (open ? closeMobile() : setOpen(true))}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-ink/10 bg-paper px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_BEFORE_BLOGS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="py-2.5 font-body text-base font-medium text-steel"
              >
                {link.label}
              </Link>
            ))}

            {/* Blogs: label goes to /blogs, chevron expands the list */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/blogs"
                  onClick={closeMobile}
                  className="flex-1 py-2.5 font-body text-base font-medium text-steel"
                >
                  Blogs
                </Link>
                <button
                  type="button"
                  aria-label="Show blogs"
                  aria-expanded={mobileBlogsOpen}
                  onClick={() => setMobileBlogsOpen((v) => !v)}
                  className="flex h-10 w-10 items-center justify-center text-steel"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileBlogsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {mobileBlogsOpen && (
                <ul className="mb-2 ml-1 border-l-2 border-signal pl-4">
                  {blogLinks.map((blog) => (
                    <li key={blog.slug}>
                      <Link
                        href={`/${blog.slug}`}
                        onClick={closeMobile}
                        className="block py-2 font-body text-[15px] text-steel"
                      >
                        {blog.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/blogs"
                      onClick={closeMobile}
                      className="flex items-center gap-1.5 py-2 font-display text-sm font-semibold uppercase tracking-wide text-ink"
                    >
                      View all blogs
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {NAV_AFTER_BLOGS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="py-2.5 font-body text-base font-medium text-steel"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+44 7472 238124"
              className="flex items-center justify-center gap-2 border border-ink/15 py-3 font-mono text-sm font-medium text-ink"
            >
              <Phone size={16} className="text-signal-dark" />
              +44 7472 238124
            </a>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="bg-signal py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-ink"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
