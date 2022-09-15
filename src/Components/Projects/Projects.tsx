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
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
export default function Projects() {
  return (
    <Box id = "projects" className={style.headerContainer}>
      <Typography padding={4} fontWeight="bold" variant="h5" color="white">
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => {
          return (
            <Card
              variant="outlined"
              sx={{
                maxWidth: 345,
                m: 2,
                border: "2px solid black",
                "&:hover": {},
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
                <Typography variant="body1" color="text.primary">
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
                <Box>
                  <Box
                    sx={{
                      display: "display",
                      mxy: "auto",
                    }}
                  >
                    <IconButton
                      href={project.github}
                      target="_blank"
                      sx={{
                        color: "black",
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href={project.visit}
                      target="_blank"
                      sx={{
                        color: "black",
                      }}
                    >
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
                            backgroundColor: "rgba(0, 0, 0, 0.829)",
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
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
