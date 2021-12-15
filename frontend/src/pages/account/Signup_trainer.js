import { states } from '../../files/states';
import Signup from '../../components/Signup';
import Axios from 'axios';
import { useState, useEffect } from 'react';
//import TrainerOptionPage from '../trainers/trainerProfile/TrainerOptionPage'
import CreateTrainerProfile from '../trainers/makeTrainerProfile/CreateTrainerProfile';
import FlatButton from '../../components/FlatButton';
import validations  from '../../files/ValidateFile';
import { AiFillCamera } from 'react-icons/ai';

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
        gender: "",
        yearOfExp: "",
        items: [],
        aboutMe: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const [file, setFile] = useState({
        file:[],
    });

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



    const imageHandler = (e) => {
        const selected = e.target.files[0];
        setFile({...file, file:selected});

        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if(selected && ALLOWED_TYPES.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            // setError(true);
            console.log("file not supported");
        }


        

        
    }



    const handleSubmit = (e) => {
        

        e.preventDefault();

       
        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('city', formData.city);
        data.append('state', formData.state);  
        data.append('file', file.file);
        data.append('aboutMe', formData.aboutMe );
        data.append('gender', formData.gender);
        data.append('yearOfExp', formData.yearOfExp);
        data.append('areaOfSpec', JSON.stringify(formData.items));


        try{

            Axios.post('/signup-as-a-trainer', data)
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
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* {!signup ? <Signup states={states} postData={postData}/> : <TrainerOptionPage name = {name}/> } */}

                {page === 0 ? <Signup states={states} formData={formData} setFormData={setFormData} errors={errors}/> : 

                <div>
                
                    <div className="image_upload_container">
                    <div className="image_upload">
                        <img src={profilePicture} alt="" className="img" />
                    </div>
                    <div className="camera_container">
                        <input type="file" id="input" name="profileImage" accept="image/*" onChange={imageHandler}/>
                        <div className="camera_icon">
                            <label htmlFor="input" className="image-uplaod">
                                <AiFillCamera />
                            </label>
                            
                        </div>
                    </div>

                    </div>
                
                    <CreateTrainerProfile formData={formData} setFormData={setFormData} /> 
                </div>}

                <div className="form_footer">
                    {page === 0 ?
                            <div 
                                className="btn login_btn"
                                onClick={handleSignUp}
                            >
                                Create Account
                            </div>

                        :
                        
                        <button 
                            type="submit"
                            className="save_profile_btn"
                            // onClick={handleSubmit}
                        
                        >
                            
                            
                            
                            <FlatButton name='Save profile' />
                        
                        </button>


                    }
                    

                    

                </div>
            </form>
        </>
     );
}
 
export default TrainerSignup;