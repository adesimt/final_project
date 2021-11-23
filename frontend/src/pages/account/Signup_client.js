import { states } from '../../files/states';
import Signup from '../../components/Signup';
import Axios from 'axios';




const postData = (values) => {
    const { firstName, lastName, email, city, state} = values
    Axios.post('/signup-as-a-client', {firstName, lastName, email, city, state})
    .then((response) => {
        console.log(response);
    })
}





const ClientSignup = () => {
    return ( 
        <>

            <Signup states={states} postData={postData}/>   
        </>
     );
}
 
export default ClientSignup;