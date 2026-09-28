import Reveal from "@/components/Reveal";
import { BOOK_SECTION_ID, TREATMENTS, TREATMENTS_SECTION_ID } from "@/lib/constants";

export default function Treatments() {
  return (
    <section id={TREATMENTS_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Treatment options</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Different treatments. One personalized path.
          </h2>
          <p className="text-lead mt-4">
            Every person responds differently to treatment. That&apos;s why Clear Path offers
            multiple evidence-based options designed around your symptoms, history, and goals.
          </p>
        </Reveal>

        <ul className="cp-treat-grid list-none p-0">
          {TREATMENTS.map((treatment, index) => (
            <li key={treatment.id}>
              <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <a href={treatment.href} className="cp-treat-link">
                  <span className="cp-treat-index">0{index + 1}</span>
                  <h3 className="cp-treat-title">{treatment.title}</h3>
                  <p className="cp-treat-desc">{treatment.description}</p>
                  <span className="cp-treat-more">
                    Learn more
                    <ArrowIcon />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <a href={`#${BOOK_SECTION_ID}`} className="btn btn-primary">
            Book a Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
