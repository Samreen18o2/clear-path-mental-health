import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/constants";

export default function TmsSpotlight() {
  return (
    <section id="tms" className="section-padding scroll-mt-24 cp-spotlight">
      <div className="container-main">
        <Reveal>
          <div className="cp-tms-panel">
            <div className="cp-tms-media">
              <Image
                src={IMAGES.tms}
                alt="Patient receiving TMS therapy in a comfortable clinical setting"
                fill
                quality={90}
                sizes="(max-width: 900px) 100vw, 52vw"
                className="cp-tms-img"
              />
            </div>

            <div className="cp-tms-copy">
              <p className="cp-spotlight-kicker">TMS Therapy</p>
              <h2 className="cp-spotlight-title">
                When traditional treatment hasn&apos;t been enough.
              </h2>
              <p className="cp-spotlight-lede">
                For people who continue to experience depression despite trying medication, TMS may
                offer another treatment option. Clear Path provides personalized TMS care in a
                comfortable clinical setting, with a treatment plan tailored to your needs.
              </p>
              <div className="mt-8">
                <a href="#book" className="btn btn-light">
                  Learn About TMS
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
