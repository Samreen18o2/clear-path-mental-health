/** Bump when replacing files in public/images so caches refresh */
const IMG_V = "20260928f";

const img = (publicPath: string) => `${publicPath}?v=${IMG_V}`;

export const LOGO_URL = img("/images/logo.png");

export const IMAGES = {
  hero: img("/images/hero.jpg"),
  tms: img("/images/tms.png"),
  spravato: img("/images/spravato.png"),
  medication: img("/images/medication.png"),
} as const;

export const BOOK_SECTION_ID = "book";
export const TREATMENTS_SECTION_ID = "treatments";

export const PHONE_NUMBER = "(555) 010-2400";
export const PHONE_HREF = "tel:+15550102400";
export const EMAIL = "hello@clearpathmentalhealth.com";
export const WEBSITE_URL = "https://www.clearpathmentalhealth.com";

export const TREATMENTS = [
  {
    id: "tms",
    title: "TMS Therapy",
    description:
      "A non-invasive treatment that uses magnetic stimulation to target specific areas of the brain involved in mood regulation.",
    href: "#tms",
  },
  {
    id: "spravato",
    title: "Spravato®",
    description:
      "A prescription nasal spray administered under clinical supervision for eligible patients with treatment-resistant depression.",
    href: "#spravato",
  },
  {
    id: "medication",
    title: "Medication Management",
    description:
      "Personalized psychiatric medication care with regular follow-ups to monitor your progress and adjust treatment when needed.",
    href: "#medication",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect",
    description:
      "Schedule your initial consultation and tell us what you've been experiencing.",
  },
  {
    step: "02",
    title: "Evaluate",
    description:
      "Your provider reviews your symptoms, treatment history, and goals.",
  },
  {
    step: "03",
    title: "Build Your Plan",
    description:
      "Together, you'll discuss appropriate treatment options and create a personalized care plan.",
  },
  {
    step: "04",
    title: "Keep Moving Forward",
    description:
      "Your care continues with follow-ups, progress monitoring, and adjustments when needed.",
  },
] as const;

export const WHY_ITEMS = [
  "Personalized treatment plans",
  "Multiple treatment options",
  "Compassionate clinical care",
  "Ongoing progress monitoring",
  "Convenient scheduling",
  "Support throughout your treatment journey",
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is TMS?",
    answer:
      "Transcranial Magnetic Stimulation (TMS) is a non-invasive, FDA-cleared treatment that uses focused magnetic pulses to stimulate areas of the brain involved in mood regulation. Sessions are typically done in-clinic and do not require anesthesia.",
  },
  {
    question: "Who may be eligible for Spravato®?",
    answer:
      "Spravato® (esketamine) may be an option for adults with treatment-resistant depression who meet clinical criteria. Eligibility is determined during a consultation with your provider, who will review your history, current symptoms, and safety considerations.",
  },
  {
    question: "Is TMS painful?",
    answer:
      "Most people describe TMS as a tapping or clicking sensation on the scalp. Some experience mild discomfort during early sessions that often lessens as treatment continues. Your care team will monitor your comfort throughout.",
  },
  {
    question: "How does medication management work?",
    answer:
      "You'll meet with a psychiatric provider to review symptoms, history, and goals. Together you'll decide on a medication plan, then follow up regularly so dosages or medications can be adjusted based on how you're responding.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "In many cases you can schedule directly without a referral. Insurance requirements vary, so our team can help you understand what's needed for your plan before you begin.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Timelines vary by treatment. TMS is often delivered over several weeks with frequent short sessions. Spravato® follows a structured dosing schedule with in-clinic monitoring. Medication management is ongoing and adjusted over time.",
  },
  {
    question: "What happens during my first appointment?",
    answer:
      "Your first visit focuses on understanding you—your symptoms, past treatments, and what you're hoping for. From there, your provider discusses which options may fit and answers questions so you can make an informed next step.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with many major insurance plans. Coverage depends on your specific benefits and the treatment recommended. Contact us to verify your coverage before your consultation.",
  },
] as const;
