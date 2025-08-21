import React from "react";
import Hero from "./Hero";  // your existing hero section
import About from "../components/About"; // import About
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services/>
      <Clients/>
      <Footer/>
    </div>
  );
};

export default Home;
