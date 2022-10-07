import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./common/Button";
import InputField from "./common/InputField";
import LoginViaSocials from "./common/LoginViaSocials";
import FooterWithLink from "../layout/FooterWithLink";

const LoginUniversal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckedCondition, setIsCheckedCondition] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((previous) => !previous);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      direction="column"
      gap={5}
      sx={{ placeContent: "center", alignItems: "center" }}
    >
      <Grid item>
        <Typography variant="h2" color="text.secondary" align="center">
          Log in
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            gap={3}
            sx={{
              flexDirection: "column",
              placeContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item sx={{ width: 320, height: 50 }}>
              <InputField
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail"
                required
              />
            </Grid>
            <Grid item sx={{ width: 320, height: 50 }}>
              <InputField
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ borderRadius: "25px" }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {!showPassword ? (
                          <Typography variant="caption">SHOW</Typography>
                        ) : (
                          <Typography variant="caption">HIDE</Typography>
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Password"
              />
            </Grid>
            <Link to="/forgot">
              <Grid item>
                <Typography variant="body1" color="text.secondaryLighter">
                  forgot password?
                </Typography>
              </Grid>
            </Link>
            <Grid item>
              <Button type="submit">Log In</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <LoginViaSocials
        checkBoxValue={isCheckedCondition}
        handleChangeCheckBoxValue={() =>
          setIsCheckedCondition((previous) => !previous)
        }
      />
      <FooterWithLink isLogin />
    </Grid>
  );
};

export default LoginUniversal;
