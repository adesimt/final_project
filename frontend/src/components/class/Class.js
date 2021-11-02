import './Class.css';


const Class = () => {

    const background_personal = {
        background: 'transparent linear-gradient(239deg, #789BCD 0%, #CBD0D6 100%) 0% 0% no-repeat'
    }

    // const background_group = {
    //     background: 'transparent linear-gradient(241deg, #F7DD95 0%, #CBD0D6 100%) 0% 0% no-repeat'
    // }


    return (  

        <div className="class_container" style={background_personal}>
            <div className="class_level">Beginners</div>
            <div className="class_name">Yoga Training</div>
            <div className="trainer_name">By Skala Dudley</div>
            <div className="class_format">Personal training</div>
            <div className="schedule"><p className="schedule_day">Mon, Fri;</p><p className="schedule_time">9:00 am - 10:00 am</p></div>

        </div>
    );
}
 
export default Class;