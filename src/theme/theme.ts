import { createTheme } from "@mui/material/styles";
import { PALETTE_DEFINITIONS } from "./styles";
import { TEXT_DEFINITIONS } from "./text";

export const theme = createTheme({
  palette: {
    ...PALETTE_DEFINITIONS,
  },
  typography: {
    ...TEXT_DEFINITIONS,
  },
});
