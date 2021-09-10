import React,{useState,useEffect,createContext} from 'react';

export const AppContext = createContext()  

export const Newfile = (props) => {

    const [data,setData] = useState([])

    useEffect(() => {

     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(data =>data.json())
     .then(newdata => setData(newdata))

    }, [])


    return (
        <>

           <AppContext.Provider value={[data,setData]}>

              {props.children}
           
           </AppContext.Provider>
        
            
        </>
    );
};

