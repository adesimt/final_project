import Header from '../../components/Header';
import Navbar from '../../components/navbar/Navbar';
import Trainer from '../../components/trainer/Trainer';
import { ClientNavItems } from '../../files/NavItems';
import { useEffect, useState } from 'react';
import Axios from 'axios';
// import { Types } from '../../files/ClassEntities';



const Trainers = () => {


    const [trainerList, setTrainerList] = useState([]);

    useEffect(() => {
        Axios.get('/client-dashboard/trainers')
        .then(res => {
            console.log(res.data);
            setTrainerList(res.data);
        });
        
      }, [])









    return (  
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {ClientNavItems} />
                <div className="dashboard_content">
                    <div className="filters_container">

                        {/* <div className="filter_elements">
                            <select name="workout types" className="filter_elements">
                                {Types.map((item, index) => {
                                    return <option value={item.name} key={index}>{item.name}</option>
                                })}
                            </select>
                        </div> */}


                    </div>
                    <div className="content_container">
                        <div className="trainers_container">

                            {trainerList && trainerList.map((trainer, index) => {
                                // <Trainer trainer={data} key={data.trainer_id}/>
                                return <h1 key={index} >{trainer.trainer_firstName}</h1>
                                
                            })}
                            
                        </div>
                    </div>
                </div>

            </div>    
        </>
    );
}
 
export default Trainers;