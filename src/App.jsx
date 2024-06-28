import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, } from 'react-router';
import Element from "./component/Element"
import Registration from "./component/Registration"
import Login from './component/Login';
import Todolist from './component/Todolist';
import Home from './component/Home';

const App = () => {
  // console.log(`EVERTHING IS GOOD`)
  return (

    <>
      <Element />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todolist' element={<Todolist />} />
      </Routes>
    </>
  );
};

export default App;
