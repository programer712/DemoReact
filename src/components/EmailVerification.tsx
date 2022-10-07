import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ReactComponent as EmailIcon } from "../assets/email.svg";

const EmailVerification = () => {
  const { state } = useLocation();
  return (
    <Grid
      container
      direction="column"
      spacing={6}
      sx={{
        placeContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <EmailIcon />
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          gap={4}
          sx={{ placeContent: "center", alignItems: "center" }}
        >
          <Grid item>
            <Typography variant="h1" color="text.secondary" align="center">
              Hello {state.fullName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" color="text.secondary" align="center">
              Let’s verify your email:
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2} direction="column" sx={{ width: 364 }}>
              <Grid item>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  align="center"
                >
                  Let’s confirm your account, please check your email and click
                  the verification link that our team has sent over to:
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  align="center"
                >
                  {state.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Link to="/change-email">Change email address</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmailVerification;
