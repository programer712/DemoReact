import { Checkbox, Divider, Grid, Typography } from "@mui/material";

import { ReactComponent as FbIcon } from "../../assets/fb.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

interface LoginViaSocialsProps {
  checkBoxValue: boolean;
  handleChangeCheckBoxValue: () => void;
}

const LoginViaSocials = ({
  checkBoxValue,
  handleChangeCheckBoxValue,
}: LoginViaSocialsProps) => {
  return (
    <>
      <Grid item>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Divider sx={{ width: "25px", bgcolor: "text.primary" }} />

          <Typography variant="body2" color="text.primary">
            OR
          </Typography>
          <Divider sx={{ width: "25px", bgcolor: "text.primary" }} />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container gap={5}>
          <Grid item sx={{ cursor: "pointer" }}>
            <FbIcon />
          </Grid>
          <Grid item sx={{ cursor: "pointer" }}>
            <Linkedin />
          </Grid>
          <Grid item sx={{ cursor: "pointer" }}>
            <GoogleIcon />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ maxWidth: 320 }}>
        <Grid
          container
          sx={{ alignItems: "center", maxWidth: 320, flexWrap: "nowrap" }}
        >
          <Grid item>
            <Checkbox
              value={checkBoxValue}
              onClick={handleChangeCheckBoxValue}
              sx={{ color: "text.secondaryLight" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "11px",
                lineHeight: "14px",
              }}
            >
              By continuing with Google or Facebook, you are agreeing to our
              &nbsp;
              <a href="" style={{ color: "rgba(0,0,0,0.5)" }}>
                Terms + Conditions
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginViaSocials;
