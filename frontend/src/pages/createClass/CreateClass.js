import { useState } from 'react';
import Button from "../../components/Button";
import Header from "../../components/Header";
import './CreateClass.css';
import { Levels, Formats, Types } from "../../files/ClassEntities";
import { HiPlus } from 'react-icons/hi';
//import { EquipmentFiles } from "../../files/EquimentFile";
import Equipment from "../../components/Equipment";
import FlatButton from "../../components/FlatButton";
import { TimePickerComponent} from '@syncfusion/ej2-react-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';


const CreateClass = () => {


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
        console.log(levels.allLevels[index].name);
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
        console.log(formats.allFormats[index].name);
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
        console.log(types.allTypes[index].name);
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

    const handleCheck = (e) => {
        const value = e.target.value;
        if(e.target.checked){
            console.log(`${value} is checked`);
        }else{
            console.log(`${value} is not checked`);
        }
    }


    // timepicker
    //const timeValue = new Date("");

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleStartTime = (e) => {
        const newValue = e.target.value
        setStartTime(newValue);
        console.log(newValue.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }

    const handleEndTime = (e) => {
        const newValue = e.target.value
        setEndTime(newValue);
        console.log(newValue.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }

    
//


    const [equipments, setEquipments] = useState([
        { equipmentName: ""},
        { equipmentName: ""}
    ]);
    

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const values = [...equipments];
        values[index][name] = value;
        setEquipments(values);
    }

    const handleMore = () => {
        setEquipments([...equipments, { equipmentName:""}])

    }

    const handleClick = () => {
        const newValue = JSON.stringify(equipments)
        console.log(newValue)

    }

    const clearInput = () => {
        setEquipments("")
        
    }



    return ( 

        <>
        
            <Header />
            <div className="main_page">

                <div className="class_content">
                    <h3 className="heading_class">Add a new class</h3>
                    <form className="entity_container">
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

                            { show? 
                            
                                <div className="more">
                                    <p>Type a training type that's not in the list above</p>
                                    <input type="text" className="input_more" />
                                    <Button cName='all_btn' name='Add more type'/>
                                </div>
                                : null
                     
                            }
                            

                        </div>

                        <div className="entity_row">
                            <div className="row_label">Description</div>
                            <div className="row_text">
                                <textarea placeholder="Provide additional description/information about the class" cols="105" rows="15"></textarea>
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
                                            value={startTime}
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
                                            value={endTime}
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

                                { equipments.map((equipment, index) => (
                                    <Equipment 
                                        name={`equipment${index + 1}`}
                                        cName='equipment_input' 
                                        key={index}
                                        value={equipment.equipmentName}
                                        placeholder={`Equipment ${index + 1}`}
                                        change={(e) => handleChange(e, index)}
                                        clear={clearInput}
                                    />
                                ))}
                            </div>

                            <div className="other_btn all_btn" onClick={handleMore}>
                                <div className="more_options">More</div>
                                <div className="plus_icon"><HiPlus /></div>
                            </div>
                            <div className="other_btn all_btn" onClick={handleClick}>
                                <div className="more_options">show</div>
                                
                            </div>
                        </div>

                        <button className="add_class_btn">
                            <FlatButton name='add class' />
                        </button>




                    </form>
                
                </div>

            </div>         
        </>

     );
}
 
export default CreateClass;