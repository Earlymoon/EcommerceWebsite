import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProducts from "./components/FeatureProducts";
const Home = () => {
  const data = {
    name: "DarkMoon Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
