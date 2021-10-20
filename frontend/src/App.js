import './App.css';
import './pages/landing_page/LandingPage.css';
import LandingPage from './pages/landing_page/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/account/Login';
import ClientSignup from './pages/account/Signup_client';
import TrainerSignup from './pages/account/Signup_trainer';
import OptionPage from './pages/profile/OptionPage';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route exact path="/">            
            <LandingPage />
          </Route>

          <Route path="/login">            
            <Login />
          </Route>

          <Route path="/signup-as-a-client">            
            <ClientSignup />
          </Route>

          <Route path="/signup-as-a-trainer">            
            <TrainerSignup />
          </Route>

          <Route path="/options">            
            <OptionPage />
          </Route>

          <Route path="/dashboard">            
            <Dashboard />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
