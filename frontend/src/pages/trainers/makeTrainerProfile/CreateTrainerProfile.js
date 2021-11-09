import { Link } from 'react-router-dom';
import UploadImage from '../../../components/UploadImage';
import '../../../files/makeProfile.css';
import ProfileCheckbox from '../../../components/ProfileCheckbox';
import { ages, gender } from '../../../files/CheckboxOptions';
import ProfileInput from '../../../components/ProfileInput';
import FlatButton from '../../../components/FlatButton';
import { useState, useEffect } from 'react';
import ItemForm from '../../../components/addItems/ItemForm';
import ItemList from '../../../components/addItems/ItemList';
import '../../../files/AddItems.css';


const LOCAL_STORAGE_KEY = "fitness-goals";

const CreateTrainerProfile = () => {
    


    const [items, setItems] = useState([]);

    

    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
        if(storageItems){
            setItems(storageItems);
        }
    }, [])

    useEffect(() => {        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
    }, [items]);


    const addItem = (newItem) => {
        setItems([newItem, ...items])
        console.log(newItem);
    }

    const removeItem = (id) => {
        const removeItem = items.filter(item => item.id !== id);
        setItems(removeItem);
        
    }


    // function to grab all data
    // const [getProfilePicture, setgetProfilePicture] = useState(null);
    // console.log(getProfilePicture);
    

    return ( 
        <>
            <div className="option_page">
                <div className="content">
                    <Link to="/"><div className="logo logo1">logo</div></Link>
                    <form className="container">
                        <h3 className="about_you">About you</h3>
                        <p className="profile_picture_text">Let's add a profile picture</p>
                        <UploadImage />
                        <div className="other_profile_content">
                            <ProfileCheckbox items = {ages.allRanges} rowTitle={ages.title}/>
                            <ProfileCheckbox items = {gender.allRanges} rowTitle={gender.title}/>
                            <div className="height_inputs">
                                <ProfileInput rowTitle="What is your height" unit="ft"/>
                                <ProfileInput unit="In" />
                            </div>
                            <ProfileInput rowTitle="What is your weight" unit="lbs"/>

                            <div className="section_container">
                                <div className="profile_row_title">What is/are your fitness goals</div>
                                <div className="input_row_container">
                                    <div className="profile_input_row">
                                        <ItemForm addItem={addItem}/>
                                    </div>
                                </div>

                                <ItemList 
                                    items={items}
                                    removeItem={removeItem}
                                    
                                />

                            </div>

                            

                            <button className="save_profile_btn">
                                <FlatButton name='Save profile' />
                            </button>


                        </div>

                        
                        
                    </form>

                    
                </div>
            </div>
        </>
     );
}
 
export default CreateTrainerProfile;