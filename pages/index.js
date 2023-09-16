import Head from "next/head";
import Link from "next/link";
import HeroSection from "../components/hero-section";
import AreaSection from "../components/area-section";
import AreaFeatureSection from "../components/area-feature-section";
import RentalPropertiesSection from "../components/rental-properties-section";
import LatestPropertiesSection from "../components/latest-properties-section";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>MSN Real State</title>
        <meta
          name="description"
          content="Find the right home for you and your loved ones."
        />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header />
        <HeroSection />
        <AreaSection />
        <AreaFeatureSection />
        <RentalPropertiesSection />
        <LatestPropertiesSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
