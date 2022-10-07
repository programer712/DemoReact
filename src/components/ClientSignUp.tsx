import { Checkbox, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Button from "./common/Button";
import InputField from "./common/InputField";
import FooterWithLink from "../layout/FooterWithLink";

const ClientSignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
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
                placeholder="E-mail*"
                required
              />
            </Grid>
            <Grid item sx={{ width: 320, height: 50 }}>
              <InputField
                required
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Full Name*"
              />
            </Grid>
            <Grid item sx={{ width: 320, height: 50 }}>
              <InputField
                required
                type="text"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                placeholder="Company Name*"
              />
            </Grid>
            <Grid item>
              <Button type="submit" disabled={!isCheckedCondition}>
                Continue
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item sx={{ maxWidth: 320 }}>
        <Grid
          container
          sx={{ alignItems: "center", maxWidth: 320, flexWrap: "nowrap" }}
        >
          <Grid item>
            <Checkbox
              value={isCheckedCondition}
              onClick={() => setIsCheckedCondition((previous) => !previous)}
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
              Yes, I understand and agree to the NetOne Recruiter &nbsp;
              <a href="" style={{ color: "rgb(0,0,0)", fontWeight: "bold" }}>
                Terms of Service and Privacy Policy.
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <FooterWithLink />
    </Grid>
  );
};

export default ClientSignUp;
