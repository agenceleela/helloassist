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