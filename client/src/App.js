import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import InviteForm from "./components/InviteForm/InviteForm";

function App() {
  return (
    <Router>
      <div>
        {/* <Route path="/" component={LoginForm} /> */}
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/invite/:id" component={InviteForm} />
      </div>
    </Router>
  );
}

export default App;
