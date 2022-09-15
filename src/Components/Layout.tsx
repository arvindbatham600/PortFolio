import React from "react";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./HeaderComponent/Header";
import Projects from "./Projects/Projects";

function Layout() {
  return (
    <>
      <Header />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default Layout;
