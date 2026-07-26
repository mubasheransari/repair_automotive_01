import type { Metadata } from "next";
import { League_Spartan, Inter, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const leagueSpartan = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Repair Automotive | MOT, Servicing & Repairs in Corby, Northamptonshire",
  description:
    "Repair Automotive is Corby's trusted independent garage for MOT repair, servicing, brakes, diagnostics and repairs. Honest advice, fair prices, same-day turnaround.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${inter.variable} ${plexMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-body text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
