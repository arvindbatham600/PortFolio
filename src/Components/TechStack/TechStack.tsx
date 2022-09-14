import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CSS3 from "./Tech-Icons/CSS3";
import HTML5 from "./Tech-Icons/HTML5";
import JavaScript from "./Tech-Icons/JavaScript";
import TypeScript from "./Tech-Icons/TypeScript";
import ReactJS from "./Tech-Icons/ReactJS";
import MaterialUI from "./Tech-Icons/MaterialUI";
import NodeJS from "./Tech-Icons/NodeJS";
import Git from "./Tech-Icons/Git";
import Nodemon from "./Tech-Icons/Nodemon";
import MongoDB from "./Tech-Icons/MongoDB";

function TechStack() {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 8,
        mx: {
          xs: 2,
          sm: 2,
          md: "25%",
        },
      }}
    >
      <Typography m={4} fontWeight="bold" variant="h5" color="black">
        Technologies I've Worked With.
      </Typography>
      <Grid container spacing={4}>
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={3}
        >
          
          <HTML5 />
          <Typography variant="body1">HTML5</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <CSS3 />
          <Typography variant="body1">CSS3</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <JavaScript />
          <Typography variant="body1">JavaScript</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <TypeScript /> <Typography variant="body1">TypeScript</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <ReactJS />
          <Typography variant="body1">ReactJS</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <MaterialUI /> <Typography variant="body1">Material UI</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <NodeJS />
          <Typography variant="body1">NodeJS</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <MongoDB />
          <Typography variant="body1">MongoDB</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Nodemon /> <Typography variant="body1">Nodemon</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <Git /> <Typography variant="body1">Git</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TechStack;
