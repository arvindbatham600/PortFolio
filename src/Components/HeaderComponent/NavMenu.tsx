import React from "react";
import { IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";

function NavMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "TechStack", path: "#techstack" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <>
      <Menu
        open={open}
        anchorEl={anchorEl}
        id="resources-menu"
        MenuListProps={{
          "aria-labelledby": "resources-icon",
        }}
        onClose={handleClose}
      >
        {/* <MenuItem href="#home" onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem href="#about" onClick={handleClose}>
          About
        </MenuItem>
        <MenuItem href="#techstack" onClick={handleClose}>
          TechStack
        </MenuItem>

        <MenuItem href="#projects" onClick={handleClose}>
          Projects
        </MenuItem>
        <MenuItem href="contact" onClick={handleClose}>
          Contacts
        </MenuItem> */}
        {menuLinks.map(({ title, path }) => {
          return (
            <MenuItem onClick={handleClose}>
              <Button
                // sx={{ marginRight: "10px" }}
                key={title}
                color="inherit"
                href={path}
              >
                {title}
              </Button>
            </MenuItem>
          );
        })}
      </Menu>
      <IconButton
        sx={{
          color: "white",
        }}
        onClick={handleClick}
      >
        <MenuOpenIcon
          id="resourses-icon"
          aria-controls={open ? "resourses-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
      </IconButton>
    </>
  );
}

export default NavMenu;
