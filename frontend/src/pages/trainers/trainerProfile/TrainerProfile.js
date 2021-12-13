import Header from "../../../components/Header";
import ProfileBanner from "../../../components/profileBanner/ProfileBanner";
import SubBanner from "../../../components/SubBanner";
import { specs, offeredClasses } from '../../../files/profileFiles';
import '../../../files/Profile.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';

// import { useData } from "../../../context/DataContext";

const TrainerProfile = () => {
    const [trainer, setTrainer] = useState([]);
    const [isTrainer, setIsTrainer] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        Axios.get(`/trainers/profile/${id}`)
        .then((res) => {
            setTrainer(res.data);
            setIsTrainer(true);
        })
        .catch(err => {
            console.log(err.message);
        })  
        

      }, [id])

    //   const newData = trainer.map((item) => {
    //       return item;
    //   })

     // console.log(trainer && trainer[0].trainer_city);

    //  const getTrainer = () => {
    //     if(trainer.length === 0){
    //         return;
    //     }else{
    //         const newData = trainer[0].map((item)=>(item))
    //         return newData;
    //     }
    //  }
      
      
    //   console.log(trainer.trainer_first_name);
    //   console.log(trainer.trainer_last_name);
    //   console.log(trainer.trainer_image);
      


    return ( 
        <>
            
            {trainer.length === 0 ? <div className="main_page">Loading...</div> :

                <div className="main_page">
                <Header />
                <ProfileBanner isTrainer = {isTrainer} firstName={trainer[0].trainer_first_name} lastName={trainer[0].trainer_last_name} picture={trainer[0].trainer_image} city={trainer[0].trainer_city} state={trainer[0].trainer_state}/>
                <SubBanner name = 'Trainers' subNumber1 = '4' subNumber2 = '3'/>

                <div className="profile_info">
                    <div className="profile_section">
                        <div className="profile_Section_title">About me</div>
                        <p className="about_me_para">
                            {trainer[0].trainer_about_me}
                        </p>
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">Specializations</div>
                        <div className="specs_container">
                            {specs.map((item, index) => {
                                return <div className="specs" key={index}>{item}</div>
                            })}
                        </div>
                        
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">Offered classes</div>
                        <div className="offer_container">
                            {offeredClasses.map((item, index) => {
                                return <div className="my_classes" key={index}>{item}</div>
                            })}
                        </div>
                        
                    </div>
                </div>
                </div>

            }
          
        </>
     );
}
 
export default TrainerProfile;