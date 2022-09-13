import React from "react";
import Contact from "./Contact/Contact";
import Header from "./HeaderComponent/Header";
import Projects from "./Projects/Projects";

function Layout() {
  return (
    <>
      <Header />
      <Projects />
      <Contact />
    </>
  );
}

export default Layout;
