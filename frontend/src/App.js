import './App.css';
import './pages/landing_page/LandingPage.css';
import LandingPage from './pages/landing_page/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/account/Login';
import ClientSignup from './pages/account/Signup_client';
import TrainerSignup from './pages/account/Signup_trainer';
import ClientDashboard from './pages/clients/ClientDashboard';
import TrainerDashboard from './pages/trainers/trainerDashboard/TrainerDashboard';
import CreateClass from './pages/createClass/CreateClass';
import Trainers from './pages/clients/Trainers';
import Clients from './pages/trainers/Clients';
import PageNotFound from './pages/landing_page/PageNotFound';
import TrainerClasses from './pages/trainers/classes/Classes';
import ClientClasses from './pages/clients/classes/Classes';
import TrainerProfile from './pages/trainers/trainerProfile/TrainerProfile';
import ClientProfile from './pages/clients/clientProfile/ClientProfile';
import Test from '../src/files/Test';


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

          <Route path="/client-dashboard/classes">        
            <ClientClasses />
          </Route>

          <Route path="/client-dashboard/profile">        
            <ClientProfile />
          </Route>

          <Route path="/trainer-dashboard/clients">        
            <Clients />
          </Route>

          <Route path="/trainer-dashboard/classes">        
            <TrainerClasses />
          </Route>

          <Route path="/trainer-dashboard/profile">        
            <TrainerProfile />
          </Route>

          <Route path="/test">        
            <Test />
          </Route>

          <Route path="*">        
            <PageNotFound />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
