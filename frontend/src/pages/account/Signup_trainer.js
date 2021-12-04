import { states } from '../../files/states';
import Signup from '../../components/Signup';
// import Axios from 'axios';
import { useState, useEffect } from 'react';
//import TrainerOptionPage from '../trainers/trainerProfile/TrainerOptionPage'
import CreateTrainerProfile from '../trainers/makeTrainerProfile/CreateTrainerProfile';
import FlatButton from '../../components/FlatButton';
import validations  from '../../files/ValidateFile';





const TrainerSignup = () => {
    
  
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        state: "",
        profileImage:[],
        gender: "",
        items: [],
        aboutMe: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    
    
    const formElements = ["signup", "user profile"];

    // const allValues = useMemo(() => {
    //     const values = {firstName, lastName, email, password, city, state};
    //     return values

    // }, [firstName, lastName, email, password, city, state]);
    const [errors, setErrors] = useState({});



    const handleSignUp = (e, currPage) => {
            
            if(errors){
                setErrors(validations(formData));

            }
            setIsSubmitted(true);
            //console.log(formData);
            setTimeout(() => {
                setPage(currPage + 1)

            }, 3000);

        
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){
            setIsSubmitted(true);            
           
        }
    }, [errors, isSubmitted]);


    const handleSubmit = () => {
        console.log(formData);
    }
    

   

    // const pageDisplay = () => {

    // }

    return ( 
        <>
            {/* {!signup ? <Signup states={states} postData={postData}/> : <TrainerOptionPage name = {name}/> } */}
            {page === 0 ? <Signup states={states} formData={formData} setFormData={setFormData} errors={errors}/> : <CreateTrainerProfile formData={formData} setFormData={setFormData}/> }

            <div className="form_footer">
                {page === 0 ?
                        <button 
                            className="btn login_btn"
                            onClick={handleSignUp}
                        >
                            Create Account
                        </button>

                    :
                    
                    <button 
                        className="save_profile_btn"
                        onClick={handleSubmit}
                    
                    >
                        
                        
                        
                        <FlatButton name='Save profile' />
                    
                    </button>


                }
                

                

            </div>
        </>
     );
}
 
export default TrainerSignup;