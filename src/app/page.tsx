import { COMING_SOON } from "@/config";
import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TargetAudience from "@/components/TargetAudience";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";

export default function Home() {
  // Interrupteur : true = page "bientôt disponible", false = landing complète
  if (COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <>
      <Hero />
      <Services />
      <TargetAudience />
      <WhatsAppBanner />
      <About />
      <Blog />
      <Testimonials />
      <GoogleMap />
      <Contact />
    </>
  );
}