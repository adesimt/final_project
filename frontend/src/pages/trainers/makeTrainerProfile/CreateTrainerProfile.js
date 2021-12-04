import { Link } from 'react-router-dom';
import UploadImage from '../../../components/UploadImage';
import '../../../files/makeProfile.css';
import ProfileCheckbox from '../../../components/ProfileCheckbox';
import { gender } from '../../../files/CheckboxOptions';
import ProfileInput from '../../../components/ProfileInput';
import { useState, useEffect } from 'react';
import ItemForm from '../../../components/addItems/ItemForm';
import ItemList from '../../../components/addItems/ItemList';
import '../../../files/AddItems.css';
import { useMemo } from 'react';


const LOCAL_STORAGE_KEY = "specializations";

const CreateTrainerProfile = ({ formData, setFormData}) => {
    


    const [items, setItems] = useState(formData.items);

    

    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
        if(storageItems){
            setItems(storageItems);
        }
    }, [])

    useEffect(() => {        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    }, [items]);


    const addItem = (newItem) => {
        // setItems([newItem, ...items]);
        setFormData([newItem, ...items]);
        console.log(newItem);
    }

    const removeItem = (id) => {
        const removeItem = items.filter(item => item.id !== id);
        setItems(removeItem);
        
    }



    //get profile picture
    const getProfilePicture = (file) => {
        setFormData(file);
    }

    //get selected box
    const getSelectedValue = (value) => {
        //setMyGender(value);
        setFormData(value);
        
    }

    //get inputed box
    const getInputedValue = (value) => {        
       
        setFormData(value);
        //setYearOfExp(value);
    }


    


    // const data = useMemo(()=> {

    //     const allValues = {profileImage, myGender, yearOfExp, items, aboutMe};

    //     return allValues;

    // }, [profileImage, myGender, yearOfExp, items, aboutMe]);



    return ( 
        <>
            <div className="option_page">
                <div className="content">
                    <Link to="/"><div className="logo logo1">logo</div></Link>
                    <div
                     className="container">
                        <h3 className="about_you">About you</h3>
                        <p className="profile_picture_text">Let's add a profile picture</p>
                        <UploadImage getProfilePicture={getProfilePicture}/>
                        <div className="other_profile_content">
                            <ProfileCheckbox items = {gender.allRanges} rowTitle={gender.title} getSelectedValue={getSelectedValue}/>
                            <div className="height_inputs">
                                <ProfileInput rowTitle="Years of Experience" getInputedValue={getInputedValue}/>                                
                            </div>
                            
                            <div className="section_container">
                                <div className="profile_row_title">What is/are your area of specializations</div>
                                <div className="input_row_container">
                                    <div className="profile_input_row">
                                        <ItemForm addItem={addItem} placeholder="Area of specialization"/>
                                    </div>
                                </div>

                                <ItemList 
                                    items={items}
                                    removeItem={removeItem}
                                    
                                />

                            </div>

                            <div className="section_container">
                                <div className="section_text">Please take a moment to tell your clients about yourself</div>
                                <div className="profile_row_title">About me</div>
                                <div className="row_text">
                                    <textarea 
                                        name="about_me"
                                        placeholder="About me" 
                                        cols="80" 
                                        rows="15"                                        
                                        value={formData.aboutMe}
                                        onChange={(e) => setFormData({...formData, aboutMe: e.target.value})}
                                    ></textarea>
                                </div>
                            </div>


                        </div>

                        
                        
                    </div
                    >

                    
                </div>
            </div>
        </>
     );
}
 
export default CreateTrainerProfile;