import { Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface FooterWithLinkProps {
  isLogin?: boolean;
}

const FooterWithLink = ({ isLogin = false }: FooterWithLinkProps) => {
  return (
    <Grid item alignSelf="center" justifySelf="flex-end">
      <Grid container direction="column" gap={3}>
        <Grid item>
          <Divider variant="middle" light />
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={0.5}>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {isLogin
                  ? "Don’t have an account?"
                  : "Already have an account?"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.main">
                {isLogin ? (
                  <Link to={"/signup"}>Sign Up</Link>
                ) : (
                  <Link to={"/"}>Log In</Link>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterWithLink;
