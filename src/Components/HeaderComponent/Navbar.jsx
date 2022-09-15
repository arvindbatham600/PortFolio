import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavMenu from "./NavMenu";

// import './Navbar.css'

const appbar = {
  backgroundColor: "#1e464a",
  color: "#fff",
  // position: 'absolute',
};
const toolbar = {
  display: "flex",
  justifyContent: "space-between",
};

export default function Navbar() {
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "TechStack", path: "#techstack" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch)

  return (
    <AppBar position="relative" style={appbar}>
      {isMatch ? (
        <Toolbar style={toolbar}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
            }}
          >
            {"<Arvind />"}
          </Typography>
          <NavMenu />
        </Toolbar>
      ) : (
        <Toolbar style={toolbar}>
          <Typography variant="h6">{"<Arvind />"}</Typography>
          <Box>
            {navLinks.map(({ title, path }) => (
              <Button
                sx={{ marginRight: "10px" }}
                key={title}
                color="inherit"
                href={path}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
}
