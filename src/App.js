import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { TodoApp } from './Pages/TodoApp';
import { Counterapp } from './Pages/Counterapp';
import { Home } from './Pages/Home';
import  Login  from './Pages/Login';
import { Edit } from './Pages/Edit';
import {Error} from "./Pages/Error"
import { Requrired } from './hoc/Requrired';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path="/todo" element={<Requrired><TodoApp/></Requrired>}/>
         <Route path='/todo/:id/edit' element={<Edit/>}/>
         <Route path="/error"element={<Error/>}/>
     
        <Route  path="/counter" element={<Counterapp/>}/>
       
        <Route  path="/login" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
