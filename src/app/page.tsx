import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import About from "@/components/About";
import Principles from "@/components/Principles";
import SleepChecklist from "@/components/SleepChecklist";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FreeGuide from "@/components/FreeGuide";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <About />
        <Principles />
        <SleepChecklist />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FreeGuide />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
