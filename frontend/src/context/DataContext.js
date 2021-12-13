import { createContext, useContext, useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import Axios from 'axios';



const DataContext = createContext();

export function useData(){
    return useContext(DataContext)
}




const DataProvider = ({ children }) => {


    const [allTrainers, setAllTrainers] = useState([]);


    // get all trainers
    useEffect(() => {
        Axios.get('/client-dashboard/trainers')
        .then((response) => {
            setAllTrainers(response.data);
            console.log(response.data);
        })
      }, [])


    // get a single trainer
    





    const value = {
        allTrainers
    }


    return ( 
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
     );
}
 
export default DataProvider;