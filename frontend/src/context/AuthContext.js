import { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';



const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}




const AuthProvider = ({ children }) => {

    const history = useHistory();

    //  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [currentEmail, setCurrentEmail] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [isTrainer, setisTrainer] = useState(false);
    


    Axios.defaults.withCredentials = true;


    function login(values){
        const {email, password} = values;

        Axios.post('/login', {email, password} )
        .then((response)=> {

            console.log(response);
            if(response.status === 200 && response.statusText === 'OK' && response.data.user){
                setCurrentId(response.data.user[0]);
                setCurrentEmail(response.data.user[1]);
                setIsAuth(response.data.isAuth);
                setisTrainer(response.data.isTrainer);

                history.push('/trainer-dashboard');

            }

            // if(response.data.user){
            //     setCurrentUser(response.data.user[0]);
            //     //setFirstName(response.data.user[0].trainer_first_name);
            //     //history.push('/trainer-dashboard');


            // }else{
            //     setCurrentUser([]);                
            // }
        })

    }
  



    const value = {
        currentId,
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