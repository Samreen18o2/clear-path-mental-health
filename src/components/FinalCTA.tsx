import Reveal from "@/components/Reveal";
import { BOOK_SECTION_ID, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id={BOOK_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <div className="cp-final">
            <svg
              className="cp-final-path"
              viewBox="0 0 1000 360"
              fill="none"
              aria-hidden
              preserveAspectRatio="none"
            >
              <path
                d="M-40 280 C 160 200, 300 80, 480 120 C 700 170, 780 60, 1060 40"
                stroke="white"
                strokeWidth="40"
                strokeLinecap="round"
                opacity="0.14"
              />
            </svg>

            <div className="relative z-[1]">
              <h2>You don&apos;t have to figure it out alone.</h2>
              <p>Take the first step toward a treatment plan built around you.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:hello@clearpathmentalhealth.com`} className="btn btn-primary !bg-white !text-navy hover:!bg-sky-mist">
                  Book a Consultation
                  <ArrowIcon />
                </a>
                <a href={PHONE_HREF} className="btn btn-light">
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
