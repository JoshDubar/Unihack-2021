import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* <Route path="/" component={LoginForm} /> */}
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
