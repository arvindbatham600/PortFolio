import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import style from '../HeaderComponent/Header.module.css'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    alert("Message sent successfully");
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_twaeodp",
        "template_2f6hl9n",
        form.current,
        "BSuZA15gW82VWJAZi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let width = "0";
  {
    isMatch ? (width = "70%") : (width = "50%");
  }
  return (
    <Box id="contact">
      <Typography
        gutterBottom
        variant="h5"
        marginTop={2}
        sx={{
          fontFamily: "Iosevka",
          fontWeight: "bold",
          my: 4,
        }}
      >
        Contact Me
      </Typography>
      <Card
        id="screen"
        sx={{
          border: "2px solid gray",
          mb: 4,
          mx: "auto",
          maxWidth: { width },
          padding: "20px",
        }}
      >
        <CardContent>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  id="firstName"
                  name="user_firstName"
                  label="First Name"
                  placeholder="Enter First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  id="lastName"
                  name="user_lastName"
                  label="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  id="email"
                  name="user_email"
                  label="Email"
                  placeholder="Enter Email Id."
                  fullWidth
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  name="user_phone"
                  id="phone"
                  label="Phone"
                  placeholder="Enter Phone No."
                  fullWidth
                  type="number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  id="message"
                  name="user_message"
                  label="Message"
                  placeholder="Type your message here"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;
