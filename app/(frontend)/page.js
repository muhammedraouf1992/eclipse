import Aboutsection from "../_components/Aboutsection";
import BlogsSection from "../_components/BlogsSection";
import Brands from "../_components/Brands";
import Circles from "../_components/Circles";
import DriveIntoSection from "../_components/DriveIntoSection";
import HeroSection from "../_components/HeroSection";
import LearnSection from "../_components/LearnSection";
import PortfolioSection from "../_components/PortfolioSection";

export default function Home() {
  return (
    <>
      <div className="heroBackground pt-20 lg:pt-40">
        <HeroSection />
      </div>
      <main className="container mx-auto">
        <Aboutsection />
        <PortfolioSection />
        <DriveIntoSection />
        <LearnSection />
        <Circles />
        <Brands />
        <BlogsSection />
      </main>
    </>
  );
}
