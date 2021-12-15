import { createContext, useContext, useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useAuth  } from './AuthContext';
import { useParams } from "react-router-dom";




const DataContext = createContext();

export function useData(){
    return useContext(DataContext);
}




const DataProvider = ({ children }) => {

    // const {currentId, currentEmail} = useAuth();
    // const { id } = useParams(currentId);

   

    // useEffect(() => {
    //     Axios.get(`/user/${id}`)
    //     .then((res) => {
    //         console.log((res));
    //     })
    // }, [currentId]);
    
  



    const value = {
        
    }


    return ( 
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
     );
}
 
export default DataProvider;