import React from 'react';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import './App.css';
import ClassComponent from './components/classComponent';
import FunctionalEvent from './components/events/FunctionalEvent';
import ConditionalRendering from './components/functionalCom';
import FunctionPassingProps from './components/FunctionPassingProps';

import Heading from './components/heading';
import Looping from './components/Looping';
import Navbar from './components/Navbar';
import Props1 from './components/props/props1';
import State from './components/props/state/functionalState';
import Users from './components/services/Users';
import UserDetail from './components/UserDetail';
function App() {
  let styleObj ={backgroundColor : "red",color:"blue"}
  return (
    
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <UserDetail/>
      <Routes>
        <Route path="/user" element={<Users/>}/>
        <Route path="/functional" element={<FunctionalEvent/>  }/>
        <Route path="/conditionalRendering" element ={ <ConditionalRendering/>}/>
        <Route path="/Looping" element={<Looping/> }/>
        <Route path ='/passingProps' element={ <FunctionPassingProps />}/>
        <Route path ='/user/:id' element={<UserDetail/>}/>
        {/* <Heading/>
      <Props1 colorValue="red" name="surendra" />
      <State name='developer' age={22}/> */}
      {/* <FunctionPassingProps />
        
      */}
      {/*  */}
      {/* <Form/>  */}
      


{/* <h3 className="bg-info">react type script</h3> */}
{/* <ClassComponent userid="d123" userName="developer"/>   */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
  










