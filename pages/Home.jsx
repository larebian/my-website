import React, { useEffect } from "react";

// Components
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import PrincipalMessage from "../components/PrincipalMessage";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import GalleryPreview from "../components/GalleryPreview";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import NoticeSidebar from "../components/NoticeSidebar";

function Home() {
  // Home page load hone par view top par le jane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
      
      {/* 1. Top Section: Hero (9 Cols - Wider) & Notice Sidebar (3 Cols - Narrower) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Hero Section takes 9 columns (Makes it wider) */}
        <div className="lg:col-span-9">
          <Hero />
        </div>

        {/* Notice Sidebar takes 3 columns (Makes it narrower) */}
        <div className="lg:col-span-3">
          <NoticeSidebar />
        </div>
      </div>

      {/* 2. Remaining Sections */}
      <div className="flex flex-col gap-6">
        <AboutSection />
        <PrincipalMessage />
        <Statistics />
        <Features />
        <GalleryPreview />
        <Testimonials />
        <News />
      </div>

    </div>
  );
}

export default Home;