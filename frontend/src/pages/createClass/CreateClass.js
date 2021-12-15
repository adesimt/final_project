import { useState, useEffect } from 'react';
import Button from "../../components/Button";
import Header from "../../components/Header";
import './CreateClass.css';
import { Levels, Formats, Types } from "../../files/ClassEntities";
import { HiPlus } from 'react-icons/hi';
//import { EquipmentFiles } from "../../files/EquimentFile";
import FlatButton from "../../components/FlatButton";
import { TimePickerComponent} from '@syncfusion/ej2-react-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import ItemForm from '../../components/addItems/ItemForm';
import ItemList from '../../components/addItems/ItemList';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';



const LOCAL_STORAGE_KEY = "equipments";


const CreateClass = () => {

    const history = useHistory();

    const { id } = useParams();


    // useEffect(() => {
    //     Axios.post(`/auth/trainer-dashboard/${id}/create-a-class`)
    //     .then((res) => {
    //         setTrainer(res.data);
    //         setIsTrainer(true);
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //     })  
        

    // }, [id])







    const [formData, setFormData] = useState({
        levels: "",
        formats: "",
        types: "",
        description: "",
        days: [],
        startTime: "",
        endTime: "",
        equipments: [],
    });


    const [show, setShow] = useState(false);
    const [levels, setLevels] = useState(Levels);
    const [formats, setFormats] = useState(Formats);
    const [types, setTypes] = useState(Types);
    
    

    const showMore = () => {
        setShow(true)
    }

    
    //for levels
    function makeActiveLevels(index){
        setLevels({...levels, activeBtn: levels.allLevels[index]});
        setFormData({...formData, levels: levels.allLevels[index].name});


        // console.log(levels.allLevels[index].name);
    }

    const showActiveLevels = (index) => {
        if(levels.allLevels[index] === levels.activeBtn){
            return "all_btn active";
        }else{
            return "all_btn";
        }
    }
    // for levels


    //for formats
    function makeActiveFormats(index){
        setFormats({...formats, activeBtn: formats.allFormats[index]});
        setFormData({...formData, formats: formats.allFormats[index].name});

        // console.log(formats.allFormats[index].name);
    }

    const showActiveFormats = (index) => {
        if(formats.allFormats[index] === formats.activeBtn){
            return "all_btn active";
        }else{
            return "all_btn";
        }
    }
    // for formats


    //for types
    function makeActiveTypes(index){
        setTypes({...types, activeBtn: types.allTypes[index]});
        setFormData({...formData, types: types.allTypes[index].name});
        // console.log(types.allTypes[index].name);
    }

    const showActiveTypes = (index) => {
        if(types.allTypes[index] === types.activeBtn){
            return "all_btn active";
        }else{
            return "all_btn";
        }
    }
    // for typess

    // for checkbox //

    const [check, setCheck] = useState([]);

    const handleCheck = (e) => {
        const value = e.target.value;
        if(e.target.checked){
            setFormData({...formData, days: [...formData.days, value]});

            //setCheck([...check, value]);
            // setFormData({...formData, days: value});
        }else{
            // return false;
            const removeValue= formData.days.filter(item => item !== value);
            setFormData({...formData, days: removeValue});

        }
    }

    let newDays = [...new Set(formData.days)];


    // timepicker
    //const timeValue = new Date("");

    // const [startTime, setStartTime] = useState("");
    // const [endTime, setEndTime] = useState("");

    const handleStartTime = (e) => {
        const newValue = e.target.value
        //setStartTime(newValue);
        setFormData({...formData, startTime: newValue.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});

    }

    const handleEndTime = (e) => {
        const newValue = e.target.value
        setFormData({...formData, endTime: newValue.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})});
    }

    const handleDescription = (e) => {
        setFormData({...formData, description: e.target.value});

    }


    const handleTypes = (e) => {
        setFormData({...formData, types: e.target.value});

    }

    
// Equipment

    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
        if(storageItems){
            //setItems(storageItems);
            setFormData({...formData, equipments: storageItems});

        }
    }, [])

    useEffect(() => {        
        // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(equipments));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData.equipments));

    }, [formData.equipments]);


    const addItem = (newItem) => {
        //setItems([newItem, ...equipments]);
        // setFormData([newItem, ...formData.equipments]);
        setFormData({...formData, equipments: [newItem, ...formData.equipments]});

    };

    const removeItem = (id) => {
        // const removeItem = equipments.filter(item => item.id !== id);
        const removeItem = formData.equipments.filter(item => item.id !== id);
        // setItems(removeItem);
        setFormData({...formData, equipments: removeItem});

        
    };


// Equipment


const [message, setMessage] = useState("")


// handle Submit
const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(newDays);
    // console.log(formData);

       
    const data = new FormData();
    data.append('levels', formData.levels);
    data.append('formats', formData.formats);
    data.append('types', formData.types);
    data.append('description', formData.description);
    data.append('days', JSON.stringify(formData.days));
    data.append('startTime', formData.startTime);  
    data.append('endTime', formData.endTime);
    data.append('equipments', JSON.stringify(formData.equipments));

    Axios.post(`/auth/trainer-dashboard/${id}/create-a-class`, data)
    .then((res) => {
        setMessage(res.data.message);
        setTimeout(() => {
            history.push(`/auth/trainer-dashboard/classes`)
        }, 2000)
    })
    .catch(err => {
        console.log(err.message);
    })  
    
}






    return ( 

        <>
        
            <Header />
            <div className="main_page">
                

                <div className="class_content">
                    <h3 className="heading_class">Add a new class</h3>
                    <form className="entity_container" onSubmit={handleSubmit}>
                        <div className="entity_row">
                            <div className="row_label">Level of competency</div>
                            <div className="row_btns">
                                {levels.allLevels.map((item, index)=>{
                                   return <Button 
                                                cName={showActiveLevels(index)}
                                                name={item.name} 
                                                click={() => {makeActiveLevels(index)}}
                                                key={index} />
                                })}
                            </div>
                        </div>

                        <div className="entity_row">
                            <div className="row_label">Training Format</div>
                            <div className="row_btns">
                                {formats.allFormats.map((item, index)=>{
                                   return <Button 
                                            cName={showActiveFormats(index)} 
                                            name={item.name}
                                            click={() => {makeActiveFormats(index)}} 
                                            key={index}/>
                                })}
                            </div>
                        </div>
                        <div className="entity_row">
                            <div className="row_label">Training Type</div>
                            <div className="row_btns">
                                {types.allTypes.map((item, index)=>{
                                   return <Button 
                                            cName={showActiveTypes(index)} 
                                            name={item.name}
                                            click={() => {makeActiveTypes(index)}} 
                                            key={index}/>
                                })}
                            </div>

                            <div className="other_btn all_btn" onClick={showMore}>
                                <div className="more_options">Other</div>
                                <div className="plus_icon"><HiPlus /></div>
                            </div>

                            { show ? 
                            
                                <div className="more">
                                    <p>Type a training type that's not in the list above</p>
                                    <input 
                                        type="text" 
                                        className="input_more"
                                        value={formData.types}
                                        onChange={handleTypes}
                                        
                                        />
                                    <Button cName='all_btn' name='Add more type'/>
                                </div>
                                : null
                     
                            }
                            

                        </div>

                        <div className="entity_row">
                            <div className="row_label">Description</div>
                            <div className="row_text">
                                <textarea 
                                    placeholder="Provide additional description/information about the class" 
                                    cols="105" 
                                    rows="15"
                                    value={formData.description}
                                    onChange={handleDescription}
                                ></textarea>
                            </div>
                        </div>

                        <div className="entity_row">
                            <div className="row_label">Day/s</div>
                            <div className="row_boxes">
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Mon</div>
                                    <CheckBoxComponent value="Mon" onChange={handleCheck}/>
                                </div>
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Tue</div>
                                    <CheckBoxComponent value="Tue" onChange={handleCheck}/>
                                </div>
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Wed</div>
                                    <CheckBoxComponent value="Wed" onChange={handleCheck}/>
                                </div>
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Thu</div>
                                    <CheckBoxComponent value="Thu" onChange={handleCheck}/>
                                </div>
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Fri</div>
                                    <CheckBoxComponent value="Fri" onChange={handleCheck}/>
                                </div>
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Sat</div>
                                    <CheckBoxComponent value="Sat" onChange={handleCheck}/>
                                </div>
                                <div className="checkbox_container">
                                    <div className="checkbox_label">Sun</div>
                                    <CheckBoxComponent value="Sun" onChange={handleCheck}/>
                                </div>
                            </div>
                        </div>

                        <div className="entity_row">
                            <div className="time_slots">
                                <div className="start_time">

                                    <div className="row_label">Start time</div>
                                    <div className="row_text">
                                        <TimePickerComponent 
                                            placeholder="Select a start time"
                                            value={formData.startTime}
                                            step={15}
                                            onChange ={handleStartTime}
                                                                                          
                                            >

                                        </TimePickerComponent>
                                    </div>

                                </div>

                                <div className="end_time">

                                    <div className="row_label">End time</div>
                                    <div className="row_text">
                                        
                                        <TimePickerComponent 
                                            placeholder="Select an end time"
                                            value={formData.endTime}
                                            step={15}
                                            onChange ={handleEndTime}
                                            
                                            >
                                            
                                        </TimePickerComponent>
                                    </div>

                                </div>
                                

                            </div>
                            
                        </div>

                        <div className="entity_row">
                            <div className="row_label">Exercise equipment needed</div>
                            <div className="row_equipment">
                                <div className="profile_input_row">
                                    <ItemForm addItem={addItem} placeholder="Add an Equipment"/>
                                </div>
                                
                            </div>

                            <ItemList 
                                    items={formData.equipments}
                                    removeItem={removeItem}
                                    name="allEquipments"

                                    
                                />

                            
                        </div>

                        {message === "" ? <span></span> : <span className='success-message'>{message}</span>}


                        <button className="add_class_btn">
                            <FlatButton name='add class' />
                        </button>




                    </form>
                
                </div>

            </div>         
        </>

     );
}
 
export default withRouter (CreateClass);