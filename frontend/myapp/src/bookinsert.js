import React, { useState } from 'react';
import './style.css'; 
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    bookid: '',
    title: '',
    description: '', 
    publish_year: '',
    quantity: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:4000/bookinsert');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('Response status:', xhr.status);
        console.log('Response text:', xhr.responseText);
        if (xhr.status === 201 || xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setSubmittedData(data); 
          setFormSubmitted(true);
          setFormData({ bookid: '', title: '', description: '', publish_year: '', quantity: '' });
          toast.success('Data inserted successfully!', { autoClose: 5000 });
        } else if (xhr.status === 409) { 
          toast.error('Duplicate ID found. Please choose a different ID.');
        } else {
          toast.error('An error occurred while submitting the form. Please try again later.');
        }
      }
    };
    xhr.send(JSON.stringify(formData));
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Book ID:
          <input type="text" name="bookid" value={formData.bookid} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Publish Year:
          <input type="text" name="publish_year" value={formData.publish_year} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <div>
       
          <Link to="/fetchbook">Go to Book Table</Link>
        </div>
      )}
    </div>
  );
};

export default MyFormComponent;
