import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation logic
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Add more validations for email, phone, address, and feedback

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Save to the database (simulated with localStorage)
      const feedbackData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        feedback: formData.feedback,
      };

      // Simulated database storage
      const storedData = JSON.parse(localStorage.getItem('feedbackData')) || [];
      storedData.push(feedbackData);
      localStorage.setItem('feedbackData', JSON.stringify(storedData));

      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        feedback: '',
      });

      alert('Feedback submitted successfully!');
    }
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>
        </div>
        {/* Add similar blocks for email, phone, address, and feedback */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* Add validation error span for email */}
        </div>
        {/* ... */}
        <div>
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
          {/* Add validation error span for feedback */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
