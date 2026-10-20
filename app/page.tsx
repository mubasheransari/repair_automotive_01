import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import HomeVisit from "./components/HomeVisit";
import CautionNotice from "./components/CautionNotice";
import CorbyAutoRepairs from "./components/CorbyAutoRepairs";
import type { Metadata } from "next";
import { homeContent, SITE_URL } from "./data/blogs";

export const metadata: Metadata = {
  title: homeContent.metaTitle,
  description: homeContent.metaDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: homeContent.metaTitle,
    description: homeContent.metaDescription,
    url: SITE_URL,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CautionNotice />
      <TrustStrip />
      <About />
      <Services />
      <CorbyAutoRepairs />
      <WhyUs />
      <Testimonials />
      <HomeVisit />
    </>
  );
}
