import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ChooseSignUpCardProps {
  link: string;
  text1: string;
  text2: string;
}

const ChooseSignUpCard = ({ link, text1, text2 }: ChooseSignUpCardProps) => {
  return (
    <Link to={link}>
      <Grid
        item
        sx={{
          width: 250,
          height: 193,
          borderRadius: "25px",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          color="text.secondary"
          align="center"
          textTransform="capitalize"
        >
          {text1}
          <br />
          {text2}
        </Typography>
      </Grid>
    </Link>
  );
};

export default ChooseSignUpCard;
