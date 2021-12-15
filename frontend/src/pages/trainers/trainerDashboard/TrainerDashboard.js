import ClassDashboard from '../../../components/classDashboard/ClassDashboard';
import Header from '../../../components/Header';
import Navbar from '../../../components/navbar/Navbar';
import { NavItems } from '../../../components/navbar/NavItems';
import FlatButton from '../../../components/FlatButton';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useState, useEffect } from 'react';
import Axios from 'axios';


const TrainerDashboard = () => {

   const [user, setUser] = useState([]);
   //const [isAuth, setIsAuth] = useState(false);

   const isTrainer = true;
   
    useEffect(() => {
        Axios.get('/auth/trainer-dashboard')
        .then((res) => {
            console.log(res);
            setUser(res.data.user[0]);
            //setIsAuth(res.data.isAuth);
            
        })
    }, []);


   
    return ( 
        <>
            {user.length === 0 ? <div>Loading...</div> :

                <div className="main_page">
                    <Header />
                    <Navbar navItems = {NavItems} isTrainer={isTrainer}/>
                    <div className="dashboard_content">

                        <div className="content_container">
                            <h2 className="hello_name">{`Hello, ${user.trainer_first_name}!`}</h2>
                            <Link to={`/auth/trainer-dashboard/${user.trainer_id}/create-a-class`}><FlatButton name='Create a new class' cName='new_class_btn'/></Link>
                            <br/>
                            <br/>                         
                            <ClassDashboard />

                        </div>    
                    </div>

                </div>

            }
          
        </>
     );
}
 
export default withRouter (TrainerDashboard);