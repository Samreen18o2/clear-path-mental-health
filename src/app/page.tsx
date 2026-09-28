import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import HowItWorks from "@/components/HowItWorks";
import WhyClearPath from "@/components/WhyClearPath";
import TmsSpotlight from "@/components/TmsSpotlight";
import Spravato from "@/components/Spravato";
import Medication from "@/components/Medication";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Treatments />
      <HowItWorks />
      <WhyClearPath />
      <TmsSpotlight />
      <Spravato />
      <Medication />
      <FAQ />
      <FinalCTA />
    </>
  );
}
