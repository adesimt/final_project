import './App.css';
import './pages/landing_page/LandingPage.css';
import LandingPage from './pages/landing_page/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/account/Login';
import ClientSignup from './pages/account/Signup_client';
import TrainerSignup from './pages/account/Signup_trainer';
import OptionPage from './pages/profile/OptionPage';
import ClientDashboard from './pages/dashboard/ClientDashboard';
import TrainerDashboard from './pages/trainers/trainerDashboard/TrainerDashboard';
import CreateClass from './pages/createClass/CreateClass';
import Trainers from './pages/trainers/Trainers';


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

          <Route exact path="/client-dashboard">            
            <ClientDashboard />
          </Route>

          <Route exact path="/trainer-dashboard">            
            <TrainerDashboard />
          </Route>

          <Route path="/create-a-class">            
            <CreateClass />
          </Route>

          <Route path="/client-dashboard/trainers">        
            <Trainers />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
