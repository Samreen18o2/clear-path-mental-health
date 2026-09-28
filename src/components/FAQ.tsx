"use client";

import { useId, useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-padding scroll-mt-24 bg-white/70">
      <div className="container-main">
        <div className="cp-faq-layout">
          <div className="cp-faq-intro">
            <Reveal>
              <p className="section-label">FAQ</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                Questions worth asking before you begin.
              </h2>
              <p className="text-lead mt-4">
                Straightforward answers about TMS, Spravato®, medication management, and getting
                started at Clear Path.
              </p>
            </Reveal>
          </div>

          <div className="cp-faq-list">
            <Reveal delay={2}>
              {FAQ_ITEMS.map((item, index) => {
                const open = openIndex === index;
                const panelId = `${baseId}-panel-${index}`;
                const buttonId = `${baseId}-btn-${index}`;

                return (
                  <div key={item.question} className={`cp-faq-item${open ? " is-open" : ""}`}>
                    <button
                      type="button"
                      id={buttonId}
                      className="cp-faq-trigger"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      {item.question}
                      <span className="cp-faq-icon" aria-hidden>
                        +
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="cp-faq-panel"
                    >
                      <div className="cp-faq-panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
