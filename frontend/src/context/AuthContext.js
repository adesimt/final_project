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
    const [currentUser, setCurrentUser] = useState([]);
    //const [firstName, setFirstName] = useState("");


    // Axios.defaults.withCredentials = true;
    function login(values){
        const {email, password} = values;

        Axios.post('/login', {email, password} )
        .then((response)=> {

            if(response.data.user){
                setCurrentUser(response.data.user[0]);
                //setFirstName(response.data.user[0].trainer_first_name);
                history.push('/trainer-dashboard');


            }else{
                setCurrentUser([]);                
            }
        })

    }
    console.log(currentUser);
    //console.log(firstName);

    useEffect(() => {
       Axios.get('/login')
       .then((response) => {
        
            if(response.data.loggedIn === true){
                setCurrentUser(response.data.user[0]);
            }
       })
    }, [])

    










    const value = {
        currentUser,
        login,
        //firstName
    }


    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;