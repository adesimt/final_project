import './App.css';
import './components/landing_page/LandingPage.css';
import LandingPage from './components/landing_page/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/account/Login';
import ClientSignup from './components/account/Signup_client';
import TrainerSignup from './components/account/Signup_trainer';
import OptionPage from './components/profile/OptionPage';
import Dashboard from './components/dashboard/Dashboard';


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
