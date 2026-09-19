"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMING_SOON } from "@/config";

const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideChrome = COMING_SOON && pathname === "/";

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default SiteChrome;