import './App.css';
import './components/landing_page/LandingPage.css';
import LandingPage from './components/landing_page/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/account/Login';
import ClientSignup from './components/account/Signup_client';
import TrainerSignup from './components/account/Signup_trainer';


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
        </Switch>
      </div>
    </Router>

  );
}

export default App;
