import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/constants";

const EXPECT = [
  "Eligibility reviewed with your provider",
  "Supervised in-clinic administration",
  "Monitoring during and after each session",
] as const;

export default function Spravato() {
  return (
    <section id="spravato" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container-main">
        <Reveal>
          <div className="cp-spravato-panel">
            <div className="cp-spravato-copy">
              <p className="section-label">Spravato®</p>
              <h2 className="cp-spotlight-title text-navy">
                Another option for treatment-resistant depression.
              </h2>
              <p className="mt-3 max-w-xl text-lead !text-base">
                Spravato® (esketamine) is a prescription nasal spray used, alongside an oral
                antidepressant, for eligible adults with treatment-resistant depression—administered
                in a supervised clinical setting.
              </p>

              <ul className="cp-expect-list cp-expect-list--compact list-none p-0">
                {EXPECT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-5">
                <a href="#book" className="btn btn-primary">
                  Learn About Spravato®
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="cp-spravato-media">
              <Image
                src={IMAGES.spravato}
                alt="Spravato® (esketamine) nasal spray administered under clinical supervision"
                fill
                quality={90}
                sizes="(max-width: 900px) 100vw, 48vw"
                className="cp-spravato-img"
              />
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
