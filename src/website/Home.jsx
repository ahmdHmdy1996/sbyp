import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import "./home.css";
import Joined from "./components/Joined";
import Partner from "./components/Partner";
import Manager from "./components/Manager";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="lg:container m-auto">
        
        <Hero />
        <LogoBar />
        <Joined />
        <Partner />
        <Manager />
        <Map />
        <Testimonials />
        <Plans />
      </div>
    </>
  );
};

export default Home;
