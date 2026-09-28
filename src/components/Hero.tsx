import Image from "next/image";
import {
  BOOK_SECTION_ID,
  IMAGES,
  TREATMENTS_SECTION_ID,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="cp-hero">
      <div className="cp-hero-frame">
        <div className="cp-hero-bg" aria-hidden>
          <Image
            src={IMAGES.hero}
            alt=""
            fill
            priority
            quality={92}
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="cp-hero-img"
          />
        </div>

        <div className="cp-hero-inner">
          <div className="cp-hero-panel">
            <p className="cp-hero-eyebrow">Personalized mental health care</p>

            <h1 id="hero-heading" className="cp-hero-title">
              A Clear path toward
              <span className="cp-hero-title-accent">feeling like yourself again.</span>
            </h1>

            <p className="cp-hero-lede">
              Explore personalized treatment options for depression and other mental-health
              conditions, including TMS, Spravato®, and medication management—all under one roof.
            </p>

            <div className="cp-hero-actions">
              <a href={`#${BOOK_SECTION_ID}`} className="btn btn-primary">
                Book a Consultation
                <ArrowIcon />
              </a>
              <a href={`#${TREATMENTS_SECTION_ID}`} className="btn btn-outline">
                Explore Treatments
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
