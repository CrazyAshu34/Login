import React from 'react';
import todolist from "../assets/todolist.png";
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        {/* First column */}
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center"> {/* Added d-flex and justify-content-center */}
          <div className=''>
            <p className='fw-bold'>Todo list is on the dev process </p>
            <h1 className='fw-bold'>WELCOME TO OUR <br /> <span className='text-purple'>REMINDER</span></h1>
            <p className='fs-5 text-secondary'>We create the world's best todo list here </p>
            <Link to="/registration"> <button className="btn mybtn">Get Start &rarr;</button></Link>
          </div>
        </div>

        {/* Second column */}
        <div className="col-lg-6 col-sm-12 p-0 ">
          <div className="div bg-color-white">
            <img className="hero_img" src={todolist} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
