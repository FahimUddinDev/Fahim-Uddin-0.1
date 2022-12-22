import React, { useState } from "react";
import Intro from "./Intro";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Slider from "../Component/Carousel/Slider";
import Clients from "./Clients";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function Home({ mode }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full" id="top">
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} mode={mode} />
      <Navbar setSidebar={setSidebar} mode={mode} />
      <Intro mode={mode} />
      <Features mode={mode} />
      <Portfolio mode={mode} />
      <Resume mode={mode} />
      <Slider mode={mode} />
      <Clients mode={mode} />
      <Pricing mode={mode} />
      <Blog mode={mode} />
      <Contact mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default Home;
