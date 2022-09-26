import { Box } from "@mui/material";
import React from "react";
import HeaderStyle from "./Header.module.css";

import { Button, IconButton, Typography } from "@mui/material";
import myImage from "../Assets/Images/pic.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack } from "@mui/system";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
function About() {
  return (
    <Box id="about" className={HeaderStyle.headerContainer}>
      <Box className={HeaderStyle.headerTop}>
        <Box>
          <img
            src={myImage}
            alt="yoast seo"
            className={HeaderStyle.HeaderImage}
          />
        </Box>
        <Box className={HeaderStyle.details}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Arvind Batham
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<EmailRoundedIcon />}
              href="mailto:arvindbatham600@gmail.com"
              sx={{
                ml: 2,
                my: 1,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              ArvindBatham600@gmail.com
            </Button>
          </Stack>

          <Stack spacing={2} direction="row" className={HeaderStyle.social}>
            <IconButton
              href="https://github.com/arvindbatham600"
              target="_blank"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <GitHubIcon color="primary" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/arvind-batham-57892a209/"
              target="_blank"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <LinkedInIcon color="primary" />
            </IconButton>
            <IconButton
              href="https://twitter.com/ArvindBatham13"
              target="_blank"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <TwitterIcon color="primary" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box className={HeaderStyle.headerBottom}>
        <Typography
          variant="body1"
          sx={{
            mx: {
              xs: 2,
              sm: 2,
              md: "20%",
            },
          }}
        >
          Hello! I'm Arvind Batham, fullstack JavaScript developer based in
          Gwalior Madhya Pradesh.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mx: {
              xs: 2,
              sm: 2,
              md: "20%",
            },
            mt: "20px",
          }}
        >
          I'm super passionate about exploring and building open source web apps
          and tools. Currently I'm diving in the React ecosystem with backend in
          Node.js. Mostly, I work on Front-end and occasionally on Backend.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mx: {
              xs: 2,
              sm: 2,
              md: "20%",
            },
            mt: "20px",
          }}
        >
          I'm currently pursuing Bachelor Degree in Computer Science at{" "}
          <a
            target="_blank"
            href="https://www.hansrajcollege.ac.in/"
            rel="noreferrer"
          >
            Hansraj College, Delhi University
          </a>
          .
        </Typography>
        <Button
          target="_blank"
          variant="contained"
          color="secondary"
          sx={{
            mt: 2,
            mb: 4,
          }}
          startIcon={<TextSnippetIcon />}
          href="https://drive.google.com/file/d/1Gc0UPjInIwJfqA-BDrX9IK9LQSDW8nqh/view?usp=sharing"
        >
          View Resume
        </Button>
      </Box>
    </Box>
  );
}

export default About;
