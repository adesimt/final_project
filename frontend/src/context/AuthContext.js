import { createContext, useContext, useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Axios from 'axios';



const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}




const AuthProvider = ({ children }) => {

    const history = useHistory();


    //  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [currentUser, setCurrentUser] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [isTrainer, setisTrainer] = useState(false);
    


    Axios.defaults.withCredentials = true;



    function login(values){
        const {email, password} = values;

        Axios.post('/login', {email, password} )
        .then((response)=> {

            console.log(response);
            if(response.status === 200 && response.statusText === 'OK' && response.data.user){
                setCurrentId(response.data.user[0].trainer_id);
                setCurrentUser(response.data.user[0]);
                setIsAuth(response.data.isAuth);
                setisTrainer(response.data.isTrainer);
                history.push('/auth/trainer-dashboard');
               
                

            }else{
                history.push('/login');

            }

        })

    }
  

    // console.log(currentId);
    // console.log(isAuth);
    console.log(currentUser);


    const value = {
        currentId,
        currentUser,
        login,
        isAuth,
        isTrainer
    }


    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;