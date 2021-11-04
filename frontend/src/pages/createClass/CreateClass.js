import { useState } from 'react';
import Button from "../../components/Button";
import Header from "../../components/Header";
import './CreateClass.css';
import { Levels, Formats, Types } from "../../files/ClassEntities";
import { HiPlus } from 'react-icons/hi';
import { daysOption } from '../../files/CheckboxOptions';
import Checkbox from "../../components/Checkbox";
import TimePicker from 'react-time-picker';
import { EquipmentFiles } from "../../files/EquimentFile";
import Equipment from "../../components/Equipment";
import FlatButton from "../../components/FlatButton";

const CreateClass = () => {


    const [show, setShow] = useState(false);
    const [levels, setLevels] = useState(Levels);
    const [formats, setFormats] = useState(Formats);
    const [types, setTypes] = useState(Types);
    const [options, setOptions] = useState(daysOption);
    const [isChecked, setIsChecked] = useState(false);
    
    

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

    const makeCheck = (index) => {
        setOptions({ ...options, activeBox: options.allDays[index]})
        setIsChecked(!isChecked)
        if(!isChecked){
            return console.log(`${options.allDays[index].name} checked`)
        }else{
            return console.log(`${options.allDays[index].name} not checked`)

        }
        
    }

    // const handleCheck = () =>{
    //     setIsChecked(!isChecked)
    //     console.log(isChecked)
    // }







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
                                { options.allDays.map((item, index) => {
                                   return <Checkbox day={item.name} key={index} check={() => makeCheck(index)}/>
                                })}
                            </div>
                        </div>

                        <div className="entity_row">
                            <div className="time_slots">
                                <div className="start_time">

                                    <div className="row_label">Start time</div>
                                    <div className="row_text">
                                        <TimePicker />
                                    </div>

                                </div>

                                <div className="end_time">

                                    <div className="row_label">End time</div>
                                    <div className="row_text">
                                        
                                        <TimePicker />
                                    </div>

                                </div>
                                

                            </div>
                            
                        </div>

                        <div className="entity_row">
                            <div className="row_label">Exercise equipment needed</div>
                            <div className="row_equipment">

                                { EquipmentFiles.map((item, index) => {
                                   return <Equipment name={item.name} cName={item.cName} placeholder={item.placeholder} key={index}/>
                                })}


                            </div>

                            <div className="other_btn all_btn" onClick={showMore}>
                                <div className="more_options">More</div>
                                <div className="plus_icon"><HiPlus /></div>
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