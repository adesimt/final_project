import './Class.css';
import '../trainer/User.css';


const ClassCard = ({btnName}) => {

    const background = {
        background: '#CBD0D6 0% 0% no-repeat padding-box'
    }


    return (  

        <div className="class_card_container" style={background}>
            <div className="class_level">Beginners</div>
            <div className="class_name">Yoga Training</div>
            <div className="class_card_format">Group training</div>
            <div className="class_card_schedule class_card_schedule_first"><p className="class_card_day">Mon, Tue, Thu;</p><p className="class_card_time">9:00 am - 10:00 am</p></div>
            <div className="class_card_schedule class_card_schedule_second"><p className="class_card_day">Sat;</p><p className="class_card_time">9:00 am - 10:00 am</p></div>
            <div className="card_btn view_profile class_card_btn">
                {btnName}
            </div>

        </div>
    );
}
 
export default ClassCard;