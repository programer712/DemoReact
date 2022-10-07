import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "./common/Button";
import InputField from "./common/InputField";
import LoginViaSocials from "./common/LoginViaSocials";
import FooterWithLink from "../layout/FooterWithLink";
import { useNavigate } from "react-router-dom";

const ReacruiterSignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isCheckedCondition, setIsCheckedCondition] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/verify", { state: { fullName, email } });
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
          Join NetOne
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
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Full Name"
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondaryLighter">
                forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Button type="submit">Continue</Button>
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
      <FooterWithLink />
    </Grid>
  );
};

export default ReacruiterSignUp;
