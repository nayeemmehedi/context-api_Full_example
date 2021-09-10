import React,{useState,useContext} from 'react';
import {AppContext} from '../Componets/Newfile'
import { Link } from "react-router-dom";



const Newfile2 = (props) => {

    const [movie, setMovie] =useContext(AppContext)

  



    return (
        <div style={{fontFamily:'Besley'}}>

        {/* font-family: 'Besley', serif; */}
          
          
           <div className="row">
           <h1>THis is OUR movie club</h1>

           { 
              movie.map(value => 

             
             
        <div className="col-4">

        <div class="card" style={{width: "28rem",margin:"10px",backgroundColor:"#edeac2"}}>
            <div class="card-body">
                
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>

                <p class="card-text">{value.body}</p>

                <Link to={`./about/${value.id}`}>
                 <button >Click me</button>
                
                </Link>
                
               
            </div>
          </div>
                  
                  
                  
                  </div>

              )

}
           </div>
          
          

            
        </div>
    );
};

export default Newfile2;