import React,{useState,useContext,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {AppContext} from '../Componets/Newfile'

import {AppContext2} from "../Componets/Context2"



const FullPage = () => {

    const {id} =useParams()
    

     const [value,setValue] =useContext(AppContext)
     
     const [context2,setContext2] =useContext(AppContext2)

     console.log(context2)
  
      const value12 = value.filter(v => v.id ==id)

    
    return (
        <div className='text-center'>


       <div>

        <h3>Value SEARCHING....</h3>
           <p>{value12[0]?.id }</p>
          <h6>  {value12[0]?.title }</h6>
          <h3>  {value12[0]?.body }</h3>
       
       
       </div>

       <div>
       
       
       </div>

          


            
            
        </div>

       
    );
};

export default FullPage;