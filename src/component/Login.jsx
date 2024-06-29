import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
  const navigate = useNavigate(); // Get navigate function from useNavigate hook

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = (values, { resetForm }) => {
    // Your login logic here, validate against stored credentials
    // Example: check against storedDataOnLocal or backend API
    // For simplicity, assume storedDataOnLocal holds user data

    const storedData = JSON.parse(localStorage.getItem('storedDataOnLocal')) || [];
    const user = storedData.find(item => item.formData.email === values.email);

    if (user && user.formData.password === values.password) {
      // Successful login logic, navigate to Company page
      alert('Login successful!');
      resetForm();
      navigate('/company'); // Navigate to '/company' route
    } else {
      // Failed login logic, handle error (e.g., display error message)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
            <div className="form-group">
              <Field
                name="email"
                type="email"
                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
