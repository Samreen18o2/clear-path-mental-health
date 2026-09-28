"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BOOK_SECTION_ID,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  TREATMENTS_SECTION_ID,
} from "@/lib/constants";

const NAV_ITEMS = [
  { href: `#${TREATMENTS_SECTION_ID}`, label: "Treatments" },
  { href: "#tms", label: "TMS" },
  { href: "#spravato", label: "Spravato®" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why", label: "Why Clear Path" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}${open ? " is-menu-open" : ""}`}>
        <div className="container-main relative flex items-center justify-between gap-4 py-3">
          <Link href="/" className="relative z-[80] shrink-0" onClick={close}>
            <Image
              src={LOGO_URL}
              alt="Clear Path Mental Health"
              width={280}
              height={80}
              className="h-10 w-auto max-w-[13rem] object-contain object-left sm:h-11 sm:max-w-[15rem]"
              priority
              unoptimized
            />
          </Link>

          <nav
            className="hidden items-center gap-7 text-sm font-semibold text-navy lg:flex"
            aria-label="Main"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-sky">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PHONE_HREF}
              className="text-sm font-semibold text-navy transition-colors hover:text-sky"
            >
              {PHONE_NUMBER}
            </a>
            <a href={`#${BOOK_SECTION_ID}`} className="btn btn-primary !px-5 !py-2.5 !text-sm">
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            className="mobile-nav-toggle relative z-[80] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          {open && (
            <div id="mobile-nav" className="mobile-nav-panel" aria-label="Mobile navigation">
              <p className="mobile-nav-label">Menu</p>
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={close}>
                  {item.label}
                </a>
              ))}
              <a href={`#${BOOK_SECTION_ID}`} className="mobile-nav-cta" onClick={close}>
                Book a Consultation
              </a>
              <a
                href={PHONE_HREF}
                className="mt-1 rounded-xl px-3 py-3 text-center text-sm font-semibold text-navy"
                onClick={close}
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          )}
        </div>
      </header>

      {open && (
        <button
          type="button"
          className="mobile-nav-backdrop lg:hidden"
          aria-label="Close menu"
          onClick={close}
        />
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
