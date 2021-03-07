import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Box } from "@material-ui/core";
import { AuthProvider } from "./contexts/AuthContext";
import history from "./history/history";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import InviteForm from "./components/InviteForm/InviteForm";
import GroupCreate from "./components/GroupForm/GroupCreate";
import PrrtyHome from "./components/Prrty/PrrtyHome";
import Home from "./components/Home";
import theme from "./theme";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Box height="100vh">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
              <Route path="/home" component={PrrtyHome} />
              <Route path="/invite/:id" component={InviteForm} />
              <Route path="/group/:id" component={PrrtyHome} />
              <Route path="/create" component={GroupCreate} />
            </Box>
          </Router>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
