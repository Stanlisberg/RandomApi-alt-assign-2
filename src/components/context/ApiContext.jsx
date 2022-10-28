import React from 'react'
import { useState, createContext} from 'react'

const ApiContext = createContext();
 
export const ApiProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([])
 
    const fetchApiData = async () => {
        const response = await fetch('https://randomuser.me/api?results=500');
        const { results } = await response.json()
        console.log(results)
         setUser(results)
         setLoading(false);
        // }
       }
   
    return(  
        <ApiContext.Provider value={{
            user,
            loading,
            fetchApiData,
        }}>
        {children}
        </ApiContext.Provider>
    );
};

export default ApiContext