import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
function App() {
  return (
    <Router>
      <div>
        {/* <Route path="/" component={LoginForm} /> */}
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </Router>
  );
}

export default App;
