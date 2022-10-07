import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BigSucesss } from "../assets/bigSuccess.svg";
import Button from "./common/Button";

const EmailChangeSuccess = () => {
  const navigate = useNavigate();

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
        <BigSucesss />
      </Grid>
      <Grid item>
        <Typography variant="h2" color="text.secondary" align="center">
          Your email Address has been successfully changed
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={() => navigate("/")}>Done</Button>
      </Grid>
    </Grid>
  );
};

export default EmailChangeSuccess;
