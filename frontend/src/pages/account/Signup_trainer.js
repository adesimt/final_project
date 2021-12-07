import { states } from '../../files/states';
import Signup from '../../components/Signup';
import Axios from 'axios';
import { useState, useEffect } from 'react';
//import TrainerOptionPage from '../trainers/trainerProfile/TrainerOptionPage'
import CreateTrainerProfile from '../trainers/makeTrainerProfile/CreateTrainerProfile';
import FlatButton from '../../components/FlatButton';
import validations  from '../../files/ValidateFile';
// import axios from 'axios';
//import { getAllItems } from '../../pages/trainers/makeTrainerProfile/CreateTrainerProfile'





const TrainerSignup = () => {
    
  
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        state: "",
        file:[],
        gender: "",
        yearOfExp: "",
        items: [],
        aboutMe: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const [isValid, setIsValid] = useState(false);
    
    
    
    // const formElements = ["signup", "user profile"];

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

            }, 2000);
            
            

        
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){
            setIsSubmitted(true);            
           
        }
    }, [errors, isSubmitted]);





    //get specialization items
    // const getAllItems = (allItems) => {
    //     setFormData({...formData, items: allItems});
    // }

    



    const handleSubmit = () => {
        //console.log(formData);


        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('city', formData.city);
        data.append('state', formData.state);  
        data.append('profileImage', formData.file);
        data.append('aboutMe', formData.aboutMe );
        data.append('gender', formData.gender);
        data.append('yearOfExp', formData.yearOfExp);
        data.append('areaOfSpec', JSON.stringify(formData.items));

        console.log(data);
        console.log(formData);


        try{
            Axios.post('/signup-as-a-trainer',data,{                
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((response) => {

                console.log(response);        
           
            })
        }catch(ex){
            console.log(ex);

        }
        
    }
    

   

    // const pageDisplay = () => {

    // }

    return ( 
        <>
            {/* {!signup ? <Signup states={states} postData={postData}/> : <TrainerOptionPage name = {name}/> } */}
            {page === 0 ? <Signup states={states} formData={formData} setFormData={setFormData} errors={errors}/> : <CreateTrainerProfile formData={formData} setFormData={setFormData} /> }

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