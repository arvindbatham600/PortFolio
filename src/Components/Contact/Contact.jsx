import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

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

function Contact() {
  const [show, setShow] = React.useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setShow(true);

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
          console.log("form submitted with no errors");
        },
        (error) => {
          console.log(error.text);
          console.log("form submitted with errors");
        }
      );

    // hiding the alert box after 5 seconds
    setTimeout(() => {
      setShow(false);
    }, 2500);

    e.target.reset();
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let width = "0";
  
  // eslint-disable-next-line
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
                  placeholder="Enter Last Name"
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
                  label="How can I help you?"
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
      <Box>
        <Dialog
          open={show}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            sx={{
              fontFamily: "Iosevka",
              color: "success.main",
              fontWeight: "bold",
              backgroundColor: "black",
            }}
            id="alert-dialog-title"
          >
            <Button
              disableElevation
              disableRipple
              color="success"
              startIcon={<CheckCircleRoundedIcon />}
            >
              Form Submitted Successfully!
            </Button>
          </DialogTitle>
          <DialogContent sx={{ margin: 1 }}>
            <DialogContentText
              sx={{
                color: "black",
              }}
              id="alert-dialog-description"
            >
              Your message has been sent successfully. I will get back to you as
              soon as possible.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Contact;
