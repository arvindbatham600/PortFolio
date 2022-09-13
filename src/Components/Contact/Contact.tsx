import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import style from '../HeaderComponent/Header.module.css'

function Contact() {
  return (
    <Box>
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
        className={style.card}
        id = "screen"
        sx={{
          border: "2px solid gray",
          mb: 4,
          mx: "auto",
          maxWidth: "50%",
          padding: "20px",
          
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  id="firstName"
                  name="firstName"
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
                  name="lastName"
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
                  name="email"
                  label="Email"
                  placeholder="Enter Email"
                  fullWidth
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  id="phone"
                  name="phone"
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
                  name="message"
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
