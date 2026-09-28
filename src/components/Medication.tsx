import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/constants";

export default function Medication() {
  return (
    <section id="medication" className="section-padding scroll-mt-24 pt-8 sm:pt-10">
      <div className="container-main">
        <Reveal>
          <div className="cp-med-panel">
            <div className="cp-med-media">
              <Image
                src={IMAGES.medication}
                alt="Provider consulting with a patient about medication management"
                fill
                quality={90}
                sizes="(max-width: 900px) 100vw, 50vw"
                className="cp-med-img"
              />
            </div>

            <div className="cp-med-copy">
              <p className="section-label">Medication management</p>
              <h2 className="cp-spotlight-title text-navy">
                Medication care that evolves with you.
              </h2>
              <p className="mt-4 max-w-2xl text-lead">
                Finding the right medication can take time. Our providers work with you to understand
                what&apos;s working, what&apos;s not, and what adjustments may help you move forward—
                with regular follow-ups so your plan can change as your needs do.
              </p>
              <div className="mt-8">
                <a href="#book" className="btn btn-primary">
                  Explore Medication Management
                  <ArrowIcon />
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
