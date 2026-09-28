import Reveal from "@/components/Reveal";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-24 bg-white/70">
      <div className="container-main">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">How it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Your path starts with understanding you.
          </h2>
          <p className="text-lead mt-4">
            A clear process from first conversation to ongoing care—shaped around what you need.
          </p>
        </Reveal>

        <ol className="cp-steps list-none p-0">
          {HOW_IT_WORKS.map((item, index) => (
            <li key={item.step}>
              <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)} className="cp-step">
                <p className="cp-step-num">{item.step}</p>
                <h3 className="cp-step-title">{item.title}</h3>
                <p className="cp-step-desc">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
