
import {Route, Routes } from 'react-router-dom';

import Home1 from './Assignment/Home1';
import Create from './Assignment/Create';
import Delete from './Assignment/Delete';
import Update from './Assignment/Update';
import Read from './Assignment/Read';
import Home from './Home';

const App=()=>
{

    

    return(
        
        <> 
         <Routes>
         <Route path="/" element={<Home1></Home1>}/>
     <Route path="/Home1" element={<Home1></Home1>}/>
     <Route path="/Create" element={<Create></Create>}/>
     <Route path="/Read" element={<Read></Read>}/>
     <Route path="/Delete" element={<Delete></Delete>}/>
     <Route path="/Update" element={<Update></Update>}/>
 </Routes>
        </>



    )
}
export default App;