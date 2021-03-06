import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import InviteForm from "./components/InviteForm/InviteForm";
import GroupCreate from "./components/GroupForm/GroupCreate";
import PrrtyHome from "./components/Prrty/PrrtyHome";
import Home from "./components/Home";
import theme from "./theme";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Box height="100vh">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/home" component={PrrtyHome} />
            <Route path="/invite/:id" component={InviteForm} />
            <Route path="/create" component={GroupCreate} />
          </Box>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
