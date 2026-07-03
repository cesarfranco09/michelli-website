import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteTitle = "Dreamy Nights Sleep Consulting | Pediatric Sleep Solutions";
const siteDescription =
  "Personalized, gentle sleep solutions for your baby and your family. IPSP certified pediatric sleep consultant helping families achieve restful nights.";

export const metadata: Metadata = {
  // TODO: Update to the live domain once confirmed
  metadataBase: new URL("https://dreamynightsconsulting.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "baby sleep consultant",
    "pediatric sleep",
    "sleep training",
    "infant sleep",
    "toddler sleep",
    "sleep consulting",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Dreamy Nights Sleep Consulting",
    type: "website",
    images: [{ url: "/assets/logo-dreamy-nights.jpg", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/logo-dreamy-nights.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dreamy Nights Sleep Consulting",
  description: siteDescription,
  email: "Michelli@dreamynightsconsulting.com",
  founder: {
    "@type": "Person",
    name: "Michelli",
    jobTitle: "IPSP Certified Pediatric Sleep Consultant",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Starter Sleep Package",
      description: "7 days of sleep training support",
      price: "249",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Complete Sleep Package",
      description: "14 days of sleep training support",
      price: "399",
      priceCurrency: "USD",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
