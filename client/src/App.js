import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import InviteForm from "./components/InviteForm/InviteForm";
import PrrtyHome from "./components/Prrty/PrrtyHome";
import theme from "./theme";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Box height="100vh">
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/invite/:id" component={InviteForm} />
            <Route path={["/", "/home"]} component={PrrtyHome} />
          </Box>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
