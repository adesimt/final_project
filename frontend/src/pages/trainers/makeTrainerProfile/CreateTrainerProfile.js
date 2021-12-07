import { Link } from 'react-router-dom';
import '../../../files/makeProfile.css';
import { useState, useEffect } from 'react';
import '../../../files/AddItems.css';
import { AiFillCamera } from 'react-icons/ai';
import FlatButton from '../../../components/FlatButton';
import { Allgenders } from '../../../files/CheckboxOptions';
import ProfileCheckbox from '../../../components/ProfileCheckbox';
import ItemForm from '../../../components/addItems/ItemForm';
import ItemList from '../../../components/addItems/ItemList';
import ProfileInput from '../../../components/ProfileInput';
//import { useAuth } from '../../../context/AuthContext';
//import Axios from 'axios';







//import { useMemo } from 'react';
//import { useForm } from 'react-hooks-helper';



const LOCAL_STORAGE_KEY = "specializations";


const CreateTrainerProfile = ({ formData, setFormData }) => {


    //const { currentId } = useAuth();


    // all states
    // const [file, setFile] = useState({
    //     file:[],
    // });
    const [profilePicture, setProfilePicture] = useState(null);
    // const [aboutMe, setAboutMe] = useState('');
    // const [myGender, setMyGender] = useState('');
    // const [yearOfExp, setYearOfExp] = useState('');
    

   
    const imageHandler = (e) => {
        const selected = e.target.files[0];
        setFormData({...formData, file: selected});

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


        //setForm();

        
    }


    const handleAboutMe = (e) => {
        //setAboutMe(e.target.value)
        setFormData({...formData, aboutMe: e.target.value});


    }

    //get selected box
    const getSelectedValue = (value) => {
        //setMyGender(value);
        setFormData({...formData, gender: value});

        
    }


    //get inputed box
    const getInputedValue = (value) => {
       
        // setYearOfExp(value);
        setFormData({...formData, yearOfExp: value});
        

    }



    // specializations
    //const [items, setItems] = useState([]);
    

    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
        if(storageItems){
            //setItems(storageItems);
            setFormData({...formData, items: storageItems});

        }
    }, [])

    useEffect(() => {        
        // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData.items));

    }, [formData.items]);


    const addItem = (newItem) => {
        //setItems([newItem, ...items]);
        // setFormData([newItem, ...formData.items]);
        setFormData({...formData, items: [newItem, ...formData.items]});

    };

    const removeItem = (id) => {
        // const removeItem = items.filter(item => item.id !== id);
        const removeItem = formData.items.filter(item => item.id !== id);
        // setItems(removeItem);
        setFormData({...formData, items: removeItem});

        
    };



    //specializations


    // useEffect(() => {
    //     const formItems = [...items];
    //     setFormData({...formData, items: formItems});
    // }, []);
    
    






    // const onSubmit =  async (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     data.append('currentId', currentId);
    //     data.append('profileImage', file.file);
    //     data.append('aboutMe', aboutMe );
    //     data.append('myGender', myGender);
    //     data.append('yearOfExp', yearOfExp);
    //     data.append('areaOfSpec', JSON.stringify(items));


    //     try{
    //         Axios.post('/trainer-signup/create-profile', data)
    //         .then((response) => {

    //             console.log(response);        
           
    //         })
    //     }catch(ex){
    //         console.log(ex);

    //     }

    // }

    

   




    return ( 

        <>
            <div className="option_page">
                <div className="content">
                    <Link to="/"><div className="logo logo1">logo</div></Link>
                    <div className="container" encType="multipart/form-data">
                        <h3 className="about_you">About you</h3>
                        <p className="profile_picture_text">Let's add a profile picture</p>
                        {/* <input type="hidden" name="currentId" value={currentId} className="file-hidden"/> */}
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

                        <div className="other_profile_content">
                            <ProfileCheckbox getSelectedValue={getSelectedValue} name="myGender" genderItems = {Allgenders.allRanges} rowTitle={Allgenders.title}/>
                            <div className="height_inputs">
                                <ProfileInput name="yearOfExp" getInputedValue={getInputedValue} rowTitle="Years of Experience" />                             

                            </div>
                            
                            <div className="section_container">
                                <div className="profile_row_title">What is/are your area of specializations</div>
                                <div className="input_row_container">
                                    <div className="profile_input_row">
                                        <ItemForm  addItem={addItem} placeholder="Area of specialization"/>
                                    </div>
                                </div>

                                <ItemList 
                                    items={formData.items}
                                    removeItem={removeItem}
                                    name="areaOfSpec"
                                    
                                />

                            </div>

                            <div className="section_container">
                                <div className="section_text">Please take a moment to tell your clients about yourself</div>
                                <div className="profile_row_title">About me</div>
                                <div className="row_text">
                                    <textarea 
                                        name="aboutMe"
                                        placeholder="About me" 
                                        cols="80" 
                                        rows="15"
                                        value={formData.aboutMe}
                                        onChange={handleAboutMe}

                                    ></textarea>
                                </div>
                            </div>

                            


                        </div>


                        
                    </div>

                    
                </div>
            </div>
        </>
     );


}
 
export default CreateTrainerProfile;