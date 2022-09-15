import { Box } from "@mui/material";
import React from "react";
import TechStack from "../TechStack/TechStack";
import About from "./About";
import Navbar from "./Navbar";


function Header() {
  return (
    <Box id = "home">
      <Navbar />
      <About />
      <TechStack />
    </Box>
  );
}

export default Header;
