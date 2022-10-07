import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as EmailIcon } from "../assets/email.svg";
import InputField from "./common/InputField";
import Button from "./common/Button";

const EmailChange = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    navigate("success");
  };
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
        <Grid
          container
          direction="column"
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <Typography variant="h2" color="text.secondary" align="center">
              Change email Address:
            </Typography>
          </Grid>
          <Grid item sx={{ width: 320, height: 50 }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <InputField
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail"
                required
              />
              <Button type="submit">Next</Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmailChange;
