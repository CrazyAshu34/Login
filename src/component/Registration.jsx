import React, { useEffect } from 'react';
import people from "../assets/people.jpg";
import "./Registration.css";
import { Link, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

function Registration() {
  const location = useLocation();
  const dataToEdit = location.state?.dataToEdit

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be 8 digit').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
  });

  useEffect(() => {
    if (dataToEdit) {
      Formik.setValues(dataToEdit.formData)
    }
  }, [dataToEdit]);

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
              initialValues={{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const timeStamp = dataToEdit ? dataToEdit.id : new Date().getTime();
                const existingData = JSON.parse(localStorage.getItem('storedDataOnLocal')) || [];

                const updatedData = dataToEdit
                  ? existingData.map(item => item.id === timeStamp ? { id: timeStamp, formData: values } : item)
                  : [...existingData, { id: timeStamp, formData: values }];

                localStorage.setItem('storedDataOnLocal', JSON.stringify(updatedData));
                resetForm();
                alert('Data is going to send to the localstorage');
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div>
                    <Field
                      name='fullName'
                      type='text'
                      className={`form-control py-2 rounded-4 mb-3 center-input w-75 ${touched.fullName && errors.fullName ? 'error-input w-75' : ''}`}
                      placeholder='fullName'
                    />
                    <ErrorMessage name="fullName" component="div" className='error-message' />
                  </div>

                  <div>
                    <Field
                      name='email'
                      type='email'
                      className={`form-control py-2 rounded-4 mb-3 center-input w-75${touched.email && errors.email ? 'error-input w-75' : ''}`}
                      placeholder='Enter your email'
                    />
                    <ErrorMessage name="email" component="div" className='error-message ' />
                  </div>
                  <div>
                    <Field
                      name="password"
                      type="password"
                      className={`form-control py-2 rounded-4 mb-3 center-input w-75 ${touched.password && errors.password ? 'error-input w-75' : ''}`}
                      placeholder="Enter password"
                    />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>
                  <div>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className={`form-control py-2 rounded-4 mb-3 center-input w-75 ${touched.confirmPassword && errors.confirmPassword ? 'error-input' : ''}`}
                      placeholder="Confirm password"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                  </div>
                  <button type='submit' className="btn mybtn mt-3" disabled={isSubmitting}>
                    Get Start &rarr;
                  </button>
                </Form>
              )}
            </Formik>
            <p className='mt-3'>Already have an account ? <Link><button className='btn'><span style={{ color: 'red' }}>signin</span></button></Link></p>
          </div>
        </div >
      </div >
    </>
  );
}

export default Registration;
