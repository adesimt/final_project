import { createContext, useContext, useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useAuth  } from './AuthContext';



const DataContext = createContext();

export function useData(){
    return useContext(DataContext);
}




const DataProvider = ({ children }) => {

    const {currentId, currentEmail} = useAuth();
   

    Axios.get(`/user/${currentId}`)
    .then((res) => {
        console.log((res));
    })
  



    const value = {
        
    }


    return ( 
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
     );
}
 
export default DataProvider;