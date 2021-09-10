
import FullPage from './Components3/FullPage'
import Newfile2 from './Components2/Newfile2'

import  {Newfile} from './Componets/Newfile'
import {Context2} from './Componets/Context2'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
//  <Context2>
    
        
     


        <Router>

        
         <Switch>

         
           <Route path="/about/:id">

             <Context2>
               <Newfile>
              
             <FullPage></FullPage>
             

             
            </Newfile>
             </Context2>
            
           
          </Route>


         
          
          <Route path="/">

         
              <Newfile>

             <Newfile2></Newfile2>
             
             </Newfile>

             

          </Route>





        </Switch>
     
    </Router>

    
   
  );
}

export default App;
