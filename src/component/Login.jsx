import React from 'react';
import people from "../assets/people.jpg";
import "./Registration.css";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be 8 characters').required('Password is required'),
  });

  function handleLogin(values, { resetForm }) {
    const storedData = JSON.parse(localStorage.getItem('storedDataOnLocal')) || [];
    const user = storedData.find(item => item.formData.email === values.email);

    if (user && user.formData.password === values.password) {
      alert('Login successful!');
      resetForm();
      navigate('/company');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: '4rem' }}>
          {/* first column */}
          <div className="col-lg-6 col-sm-12 d-flex align-items-center flex-column">
            <h1 className='text-center '>Get things done<br /> with TODO</h1>
            <img src={people} alt="" className='w-75 m-3' style={{ background: 'transparent', mixBlendMode: 'multiply' }} />
            <p className='mt-4'>PATIENCE IS A KEY ELEMENT OF SUCCESS</p>
          </div>

          {/* Second column */}
          <div className="col-lg-6 col-sm-12 text-center">
            <p className='fs-4 mb-5'>Let's help you meet your tasks</p>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  {/* Email */}
                  <div>
                    <Field
                      name='email'
                      type='email'
                      className={`form-control py-2 rounded-4 mb-3 center-input w-75 ${touched.email && errors.email ? 'is-invalid' : ''}`}
                      placeholder='Enter your email'
                    />
                    <ErrorMessage name="email" component="div" className='invalid-feedback' />
                  </div>

                  {/* Password */}
                  <div>
                    <Field
                      name="password"
                      type="password"
                      className={`form-control py-2 rounded-4 mb-3 center-input w-75 ${touched.password && errors.password ? 'is-invalid' : ''}`}
                      placeholder="Enter password"
                    />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                  </div>

                  <button type='submit' className="btn mybtn mt-3" disabled={isSubmitting}>
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <p className='mt-3'>Not a Member? <Link to='/registration'><button className='btn'><span style={{ color: 'blue' }}>SignUp</span></button></Link></p>
          </div>
        </div >
      </div >
    </>
  );
}

export default Login;
