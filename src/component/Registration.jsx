import React, { useEffect, useState } from 'react';
import people from "../assets/people.jpg";
import "./Registration.css";
import { Link, useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


function Registration() {
  const location = useLocation();
  const dataToEdit = location.state?.dataToEdit

  //regex for all 
  const fullNameRegex = /^(?!\s)[a-zA-Z\s]*(?<!\s)$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [formData, setFormData] = useState({ // updating the value using the [name] attribute; 
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isError, setIserror] = useState('');
  const [isFilledName, setisFilledName] = useState('');
  const [isFilledEmail, setisFilledEmail] = useState('');
  const [isFilledPassword, setisFilledPassword] = useState('');
  const [isValid, setisValid] = useState(false);

  //handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  //handle delete
  function handleSubmit(e) {
    e.preventDefault();


    if (!fullNameRegex.test(formData.fullName)) {
      setisValid({ ...isValid, fullName: 'PLEASE put valid email' })
    }
    if (!emailRegex.test(formData.email)) {
      setisValid({ ...isValid, email: 'PLEASE put valid email' })
    }
    if (!passwordRegex.test(formData.password)) {
      setisValid({ ...isValid, password: 'PLEASE put valid email' })
    }


    //check valid ok

    if (!formData.fullName) {
      isFilledName('please fill the name')
      return
    }
    if (!formData.email) {
      isFilledEmail('please fill the email')
      return
    }
    if (!formData.password || !formData.confirmPassword) {
      isFilledPassword('please fill the password')
      return
    }


    // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
    //   return;
    // }

    const timeStamp = dataToEdit ? dataToEdit.id : new Date().getTime();

    const existingData = JSON.parse(localStorage.getItem('storedDataOnLocal')) || [];

    const updatedData = dataToEdit
      ? existingData.map(item => item.id === timeStamp ? { id: timeStamp, formData } : item)
      : [...existingData, { id: timeStamp, formData }];

    localStorage.setItem('storedDataOnLocal', JSON.stringify(updatedData));

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setIserror('')
    alert('Data is going to send to the localstorage')
  }

  useEffect(() => {
    if (dataToEdit) {
      setFormData(dataToEdit.formData)
    }
  }, [dataToEdit])


  return (
    <>
      {isError && (
        <Alert variant="danger" className='my-3 mx-5 bg-danger text-white text-center fs-5' dismissible onClose={() => setIserror(false)}>
          ⚠ {isError}
        </Alert>
      )}


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
            <form onSubmit={handleSubmit}>
              <input

                onChange={handleChange}
                value={formData.fullName}
                name='fullName'
                type="text"
                className="form-control py-2 rounded-4 mb-3 w-75 center-input"
                placeholder="Enter your full name" aria-label="Username" aria-describedby="basic-addon1"
                style={{ isFilled }} />
              {is && <p>{isFilledEmail}</p>}

              <input
                onChange={handleChange}
                value={formData.email}
                name='email'
                className="form-control py-2 rounded-4 mb-3 center-input w-75"
                placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" />
              {isFilledEmail && <p>{isFilledEmail}</p>}

              <input
                onChange={handleChange}
                value={formData.password}
                name='password'
                type="text"
                className="form-control py-2 rounded-4 mb-3 center-input w-75"
                placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1" />
              {isFilled && <p>{isFilled}</p>}

              <input
                onChange={handleChange}
                value={formData.confirmPassword}
                name='confirmPassword'
                type="text"
                className="form-control py-2 rounded-4 mb-3 center-input w-75"
                placeholder="confirm password" aria-label="Username" aria-describedby="basic-addon1" />
              {isFilled && <p>{isFilled}</p>}
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
