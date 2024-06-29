import React, { useEffect, useState } from 'react';
import people from "../assets/people.jpg";
import "./Registration.css";
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

function Registration() {
  const location = useLocation();
  const dataToEdit = location.state?.dataToEdit

  // const [formData, setFormData] = useState({ // updating the value using the [name] attribute; 
  //   fullName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // })

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be 8 digit').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
  });

  useEffect(() => {
    if (dataToEdit) {
      formik.setValues(dataToEdit.formData)
    }
  }, [dataToEdit])


  // //handle change
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value })
  // }

  // //handle delete
  // function handleSubmit(e) {
  //   e.preventDefault();


  //   const timeStamp = dataToEdit ? dataToEdit.id : new Date().getTime();

  //   const existingData = JSON.parse(localStorage.getItem('storedDataOnLocal')) || [];

  //   const updatedData = dataToEdit
  //     ? existingData.map(item => item.id === timeStamp ? { id: timeStamp, formData } : item)
  //     : [...existingData, { id: timeStamp, formData }];

  //   localStorage.setItem('storedDataOnLocal', JSON.stringify(updatedData));

  //   setFormData({
  //     fullName: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //   });
  //   alert('Data is going to send to the localstorage')
  // }

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: '4rem' }}>
          {/* first column */}
          <div className="col-lg-6 col-sm-12 d-flex align-items-center flex-column">
            <h1 className='text-center '>Get's things done<br /> with TODO</h1>
            <img src={people} alt="" className='w-75 m-3' style={{ background: 'transparent', mixBlendMode: 'multiply' }} />
            <p className='mt-4'>PATIENCE IS A KEY ELEMENT OF SUCCESS</p>
          </div>
          {/* Second column */}
          <div className="col-lg-6 col-sm-12 text-center">
            <p className='fs-4 mb-5'>Let's help you meet your tasks</p>
           <Formik
           
           >

              <input
                onChange={handleChange}
                value={formData.fullName}
                name='fullName'
                type="text"
                className="form-control py-2 rounded-4 mb-3 w-75 center-input"
                placeholder="Enter your full name" aria-label="Username" aria-describedby="basic-addon1"
              />

              <input
                onChange={handleChange}
                value={formData.email}
                name='email'
                className="form-control py-2 rounded-4 mb-3 center-input w-75"
                placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1"
              />

              <input
                onChange={handleChange}
                value={formData.password}
                name='password'
                type="text"
                className="form-control py-2 rounded-4 mb-3 center-input w-75"
                placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1"
              />

              <input
                onChange={handleChange}
                value={formData.confirmPassword}
                name='confirmPassword'
                type="text"
                className="form-control py-2 rounded-4 mb-3 center-input w-75"
                placeholder="confirm password" aria-label="Username" aria-describedby="basic-addon1"
              />

              <button type='submit' className="btn mybtn mt-3 ">Get Start &rarr;</button>
            </form>
            <p className='mt-3'>Already have an account ? <Link><button className='btn'><span style={{ color: 'red' }}>signin</span></button></Link></p>
          </div>
        </div >
      </div >
    </>
  );
}

export default Registration;
