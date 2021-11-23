import { states } from '../../files/states';
import Signup from '../../components/Signup';
import Axios from 'axios';
import { useState } from 'react';
import TrainerOptionPage from '../trainers/trainerProfile/TrainerOptionPage'



const TrainerSignup = () => {
    const [name, setName] = useState('');
    const [signup, setSignup] = useState(false)


    const postData = (values) => {
        
        const { firstName, lastName, email, password, city, state} = values
        Axios.post('/signup-as-a-trainer', {firstName, lastName, email, password, city, state})
        .then((response) => {
            
            if(response.status === 200){
                console.log(response.data.firstName);
                setName(response.data.firstName);
                setSignup(true);

            }
            else{

                setSignup(false);
                return false;
    
            }
        })
    }

    return ( 
        <>
            {!signup ? <Signup states={states} postData={postData}/> : <TrainerOptionPage name = {name}/> }
        </>
     );
}
 
export default TrainerSignup;