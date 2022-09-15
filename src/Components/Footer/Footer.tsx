import { Box, Typography } from "@mui/material";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <Box>
        <Typography variant="h6">
          Arvind @{year}, Build with{" "}
          <a href="https://reactjs.org/" rel="noreffer">
            React
          </a>{" "}
        </Typography>
        <Typography variant="body1">All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
