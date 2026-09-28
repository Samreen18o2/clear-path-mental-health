import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clear Path Mental Health | Personalized Depression Care",
  description:
    "Personalized mental-health care with TMS, Spravato®, and medication management—all under one roof. Book a consultation to find a clearer path forward.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  keywords: [
    "Clear Path Mental Health",
    "TMS therapy",
    "Spravato",
    "medication management",
    "treatment-resistant depression",
    "personalized mental health care",
  ],
  openGraph: {
    title: "Clear Path Mental Health | A Clear Path Forward",
    description:
      "Explore personalized treatment options for depression—including TMS, Spravato®, and medication management.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A90E2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
