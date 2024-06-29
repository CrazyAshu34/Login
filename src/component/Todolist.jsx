import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Todolist() {
  const [formDataList, setFormDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('storedDataOnLocal')) || [];
    setFormDataList(storedData);
  }, []);

  function handleDelete(id) {
    const updatedFormData = formDataList.filter(item => item.id !== id);
    setFormDataList(updatedFormData);
    localStorage.setItem('storedDataOnLocal', JSON.stringify(updatedFormData));
  }

  const handleEdit = (id) => {
    const dataToEdit = formDataList.find(item => item.id === id);
    navigate('/registration', { state: { dataToEdit } });
  };

  return (
    
    <div>
      <h2>Stored Form Data</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.formData.fullName}</td>
              <td>{item.formData.email}</td>
              <td>{item.formData.password}</td>
              <td>{item.formData.confirmPassword}</td>
              <td><button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button></td>
              <td><button onClick={() => handleEdit(item.id)} className='btn btn-success'>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
