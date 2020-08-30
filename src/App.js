import React from 'react';

import './App.css';
//import data from './data/data.json';
import Header from './Components/Header/Header';
import Enroll from './Components/Enroll/Enroll';
import Product from './Components/Product/Product';


function App() {
 
// const [course, setCourse] = useState([])
//  useEffect(() =>{
//    setCourse(data);
//  })
 


  //console.log(data);
  return (
  <div>
     
       <Header></Header>
       <Enroll></Enroll>
     

</div>
   
  );
}

export default App;
