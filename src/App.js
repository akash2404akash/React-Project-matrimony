
import LoginPage from './components/LoginPage.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
       
       <BrowserRouter ><Routes>
 <Route path='/' element={<LoginPage/>}/>
 <Route path='/Home' element={<Home/>}/>
 <Route path='/Contact' element={<Contact/>}/>
 
   </Routes></BrowserRouter>


    </div>
  );
}

export default App;









