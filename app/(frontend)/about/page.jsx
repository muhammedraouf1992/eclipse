import React from "react";
import AboutPagetitle from "./_components/AboutPagetitle";
import AboutPageBoxes from "./_components/AboutPageBoxes";
import AboutPageStrategy from "./_components/AboutPageStrategy";
import AboutPagepro from "./_components/AboutPagepro";
import AboutPageServices from "./_components/AboutPageServices";
import AboutPageCard from "./_components/AboutPageCard";
import AboutPageBrands from "./_components/AboutPageBrands";

const AboutPage = () => {
  return (
    <>
      <AboutPagetitle />
      <AboutPageBoxes />
      <AboutPageStrategy />
      <AboutPagepro />
      <AboutPageServices />
      <AboutPageCard />
      <AboutPageBrands />
    </>
  );
};

export default AboutPage;
