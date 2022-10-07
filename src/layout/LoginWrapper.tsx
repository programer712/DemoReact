import { Box } from "@mui/material";
import React from "react";

interface LoginWrapperProps {
  children?: React.ReactNode;
}

const LoginWrapper = ({ children }: LoginWrapperProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: 455,
        height: 777,
        backgroundColor: "surface.main",
        borderRadius: "25px",
      }}
    >
      {children}
    </Box>
  );
};

export default LoginWrapper;
