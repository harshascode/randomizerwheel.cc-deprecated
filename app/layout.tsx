import "./globals.css";
import './css/styles.css'
import './css/index.css'
import './css/vendor.css'
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Randomizer Wheel - Random wheel",
  description:
    "Randomizer Wheel - Yes or no wheel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7989909386322234"
        />
        {children}
      </body>
    </html>
  );
}
