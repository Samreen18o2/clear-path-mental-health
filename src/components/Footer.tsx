import Image from "next/image";
import Link from "next/link";
import {
  BOOK_SECTION_ID,
  EMAIL,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  TREATMENTS_SECTION_ID,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-flex rounded-xl bg-white px-3 py-2">
            <Image
              src={LOGO_URL}
              alt="Clear Path Mental Health"
              width={240}
              height={68}
              className="h-9 w-auto object-contain object-left"
              unoptimized
            />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            Personalized mental-health care with TMS, Spravato®, and medication management—so you
            can find a clearer path forward.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-white/75">
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-white">
                {PHONE_NUMBER}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                {EMAIL}
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-white/75">
            <a href={`#${TREATMENTS_SECTION_ID}`} className="transition-colors hover:text-white">
              Treatments
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-white">
              How It Works
            </a>
            <a href="#tms" className="transition-colors hover:text-white">
              TMS Therapy
            </a>
            <a href="#spravato" className="transition-colors hover:text-white">
              Spravato®
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href={`#${BOOK_SECTION_ID}`} className="transition-colors hover:text-white">
              Book a Consultation
            </a>
            <Link href={WEBSITE_URL} className="transition-colors hover:text-white">
              Main Website
            </Link>
          </nav>
        </div>
      </div>

      <div className="container-main border-t border-white/15 pb-8 pt-8">
        <div className="max-w-4xl space-y-3 text-xs leading-relaxed text-white/60">
          <p className="font-semibold text-white/80">Important information</p>
          <p>
            This page is for educational purposes and does not replace medical advice. Treatment
            decisions should be made with a qualified clinician. TMS and Spravato® are available by
            prescription only and may not be appropriate for everyone. Individual results vary.
          </p>
          <p className="font-medium text-sun">
            If you are in danger or having thoughts of suicide, call or text 988, or dial 911.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Clear Path Mental Health. All rights reserved.</p>
          <p>TMS · Spravato® · Medication Management</p>
        </div>
      </div>
    </footer>
  );
}
