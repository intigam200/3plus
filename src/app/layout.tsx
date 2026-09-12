import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "3PLUS — Distribution · Corporate Supply · International Sourcing",
  description:
    "3PLUS is a B2B distributor for HoReCa, corporate, and premium sourcing needs in Azerbaijan.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-warmwhite text-graphite`}
      >
        {children}
      </body>
    </html>
  );
}
