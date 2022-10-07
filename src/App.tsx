import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "./layout/LoginWrapper";
import { theme } from "./theme/theme";
import LoginUniversal from "./components/LoginUniversal";
import ChooseSignUpScreen from "./components/ChooseSignUpScreen/ChooseSignUpScreen";
import ReacruiterSignUp from "./components/ReacruiterSignUp";
import ClientSignUp from "./components/ClientSignUp";
import EmailVerification from "./components/EmailVerification";
import EmailChange from "./components/EmailChange";
import EmailChangeSuccess from "./components/EmailChangeSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginUniversal />,
  },
  {
    path: "/signup",
    element: <ChooseSignUpScreen />,
  },
  {
    path: "/signup/recruiter",
    element: <ReacruiterSignUp />,
  },
  {
    path: "/signup/client",
    element: <ClientSignUp />,
  },
  {
    path: "/verify",
    element: <EmailVerification />,
  },
  {
    path: "/change-email",
    element: <EmailChange />,
  },
  {
    path: "/change-email/success",
    element: <EmailChangeSuccess />,
  },
]);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LoginWrapper>
          <RouterProvider router={router} />
        </LoginWrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
