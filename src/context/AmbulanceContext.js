import {createContext, useState} from 'react';

export const Context = createContext();

const AmbulanceContext = ({children})=>{
    const [isVisible, setVisible]=useState(false)
    

    return (
<Context.Provider value={{visible:[isVisible, setVisible]}}>
    {children}
</Context.Provider>
    )
}

export default AmbulanceContext;