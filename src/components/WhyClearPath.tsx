import Reveal from "@/components/Reveal";
import { WHY_ITEMS } from "@/lib/constants";

export default function WhyClearPath() {
  return (
    <section id="why" className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Why Clear Path</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
              Mental health care with room for your whole story.
            </h2>
            <p className="text-lead mt-4">
              We bring multiple treatment approaches together so your plan can adapt as you do—with
              care that listens first and keeps moving with you.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <ul className="cp-why-grid list-none p-0">
              {WHY_ITEMS.map((item) => (
                <li key={item} className="cp-why-item">
                  <span className="cp-why-check" aria-hidden>
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
