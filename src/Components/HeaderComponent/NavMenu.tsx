import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from 'react';

function NavMenu() {

const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
}
const handleClose = () => {
  setAnchorEl(null);
}


  return (
    <>
     <Menu open = {open} anchorEl = {anchorEl} id = "resources-menu" MenuListProps={{
        'aria-labelledby': 'resources-icon',
     }} onClose = {handleClose}>
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contacts</MenuItem>
     </Menu>
      <IconButton sx={{
      color: "white",
    }} onClick={handleClick}  >
        <MenuOpenIcon  id = "resourses-icon" aria-controls= {open ? 'resourses-menu' : undefined} aria-haspopup = 'true' aria-expanded = {open ? 'true' : undefined} />
    </IconButton>
    </>
  )
}

export default NavMenu