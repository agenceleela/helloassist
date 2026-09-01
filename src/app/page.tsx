import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TargetAudience from "@/components/TargetAudience";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <TargetAudience />
        <WhatsAppBanner />
        <About />
        <Blog />
        <Testimonials />
        <GoogleMap />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}