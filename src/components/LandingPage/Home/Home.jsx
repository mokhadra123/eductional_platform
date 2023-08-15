import React from "react";
import Navbar from "../Navbar/Navbar.component";
import HeroSection from "../HeroSection/HeroSection.component";
import PlatformFeatures from "../PlatformFeaturs/PlatformFeatures.component";
import Categories from "../categories/Categories.component";
import ShareKnowledge from "../ShareKnowledge/ShareKnowledge.component";
import Footer from "../Footer/Footer.component";
import Subscribtion from "../Subscribtion/Subscribtion.component";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PlatformFeatures />
      <Categories />
      <ShareKnowledge />
      <Subscribtion />
      <Footer />
    </div>
  );
};

export default Home;
