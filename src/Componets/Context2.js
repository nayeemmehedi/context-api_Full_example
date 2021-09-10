import React,{useState,useContext,createContext} from 'react';

export const AppContext2 = createContext()

export const Context2 = (props) => {


    const [newValue , setNewValue] = useState([

        {
            name: "Se J hei KAL",
            age : 650
        },
        {
            name: "hei KAL",
            age : 320
        },
        {
            name: " J hei ",
            age : 130
        },



    ])



    return (
        <AppContext2.Provider value={[newValue , setNewValue]}>
        {props.children}
            
        </AppContext2.Provider>
    );
};

