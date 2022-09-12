import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import projects from "./projects-list";
import { Box } from "@mui/system";
import style from "../HeaderComponent/Header.module.css";
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from "@mui/icons-material/Launch";
import {Stack} from '@mui/material'
export default function Projects() {
  return (
    <Box className={style.headerContainer}>
      <Typography  padding={4} fontWeight="bold" variant="h5" color="white">
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                m: 2,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  //   justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box className="jai">
                  <Box
                    sx={{
                      display: "Flex",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton href={project.visit} target = "_blank">
                      <LaunchIcon />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.tags.map((tag) => {
                      return (
                        <Button
                          size="small"
                          sx={{
                            m: 1,
                            borderRadius: "10px",
                            backgroundColor: "gray",
                            color: "white",

                            fontSize: "10px",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "black",
                            },
                          }}
                        >
                          {tag}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              </CardActions>
              <Stack
                spacing={2}
                sx={{
                  display: "flex",
                }}
              ></Stack>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
