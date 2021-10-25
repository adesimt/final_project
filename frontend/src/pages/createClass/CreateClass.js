import Button from "../../components/Button";
import Header from "../../components/Header";
import './CreateClass.css';
import { Levels, Formats, Types } from "../../files/ClassEntities";
import { HiPlus } from 'react-icons/hi';
import { Options } from '../../files/CheckboxOptions';
import { useState } from 'react';
import Checkbox from "../../components/navbar/Checkbox";
import TimePicker from 'react-time-picker';
import { EquipmentFiles } from "../../files/EquimentFile";
import Equipment from "../../components/Equipment";
import FlatButton from "../../components/navbar/FlatButton";

const CreateClass = () => {

    const [show, setShow] = useState(false);

    const showMore = () => {
        setShow(true)
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
                                {Levels.map((item, index)=>{
                                   return <Button cName={item.cName} name={item.name} key={index}/>
                                })}
                            </div>
                        </div>

                        <div className="entity_row">
                            <div className="row_label">Training Format</div>
                            <div className="row_btns">
                                {Formats.map((item, index)=>{
                                   return <Button cName={item.cName} name={item.name} key={index}/>
                                })}
                            </div>
                        </div>
                        <div className="entity_row">
                            <div className="row_label">Training Type</div>
                            <div className="row_btns">
                                {Types.map((item, index)=>{
                                   return <Button cName={item.cName} name={item.name} key={index}/>
                                })}
                            </div>

                            <div className="other_btn all_btn" onClick={showMore}>
                                <div className="more_options">Other</div>
                                <div className="plus_icon"><HiPlus /></div>
                            </div>

                            { show? 
                            
                                <div className="more">
                                    <p>Type a training type that's not in the list above</p>
                                    <input type="text" name="more" /><Button cName='all_btn' name='Add'/>
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

                                { Options.map((item, index) => {
                                   return <Checkbox day={item.day} key={index} />
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