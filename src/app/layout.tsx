import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello Assist — votre secrétaire indépendante",
  description:
    "Trop d'administratif ? Pas assez de temps ? Hello Assist s'occupe de tout pour vous. Secrétaire indépendante pour TPE, indépendants et associations.",
  keywords: [
    "secrétaire indépendante",
    "assistant administratif",
    "gestion administrative",
    "facturation",
    "organisation",
    "agenda",
    "création entreprise",
    "TPE",
    "indépendants",
    "associations",
  ],
  authors: [{ name: "Hello Assist" }],
  openGraph: {
    title: "Hello Assist — votre secrétaire indépendante",
    description:
      "Passez la main... et c'est fait. Services de secrétariat indépendant pour petites entreprises, freelances et associations.",
    type: "website",
    locale: "fr_FR",
    siteName: "Hello Assist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Assist — votre secrétaire indépendante",
    description: "Passez la main... et c'est fait.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// CORRECTION ICI : on utilise le typage standard de React pour les enfants
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}