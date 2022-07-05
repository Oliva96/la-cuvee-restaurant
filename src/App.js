import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import {
  About,
  BackToTop,
  Events,
  FindUs,
  Footer,
  Gallery,
  Header,
  Hero,
  Menu,
  TopBar,
  WhyUs,
} from "./components";

const App = () => {
  const [onTop, setOnTop] = useState(true);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setOnTop(true);
    }
    return setOnTop(false);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <TopBar onTop={onTop} />
      <Header onTop={onTop} />
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <Events />
      <Gallery />
      <FindUs />
      <Footer />
      <BackToTop onTop={onTop} />
      {/* <div id="preloader"></div> */}
    </div>
  );
};

export default App;
