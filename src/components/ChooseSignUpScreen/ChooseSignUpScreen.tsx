import { Grid, Typography } from "@mui/material";

import FooterWithLink from "../../layout/FooterWithLink";
import ChooseSignUpCard from "./ChooseSignUpCard";

const ChooseSignUpScreen = () => {
  return (
    <Grid
      container
      gap={7}
      sx={{ flexDirection: "column", placeContent: "center" }}
    >
      <Grid item>
        <Typography
          variant="h3"
          color="text.primary"
          textTransform="capitalize"
        >
          Are you a client or A Recruiter?
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column" gap={2.5} alignItems="center">
          <ChooseSignUpCard
            link={"/signup/client"}
            text1="I’m a client,"
            text2="hiring for projects"
          />
          <ChooseSignUpCard
            link={"/signup/recruiter"}
            text1="I’m a Recruiter, "
            text2="Looking for Work"
          />
        </Grid>
      </Grid>
      <FooterWithLink />
    </Grid>
  );
};

export default ChooseSignUpScreen;
