import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import PrrtyHome from "./components/Prrty/PrrtyHome";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box height="100vh">
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path={["/", "/home"]} component={PrrtyHome} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
