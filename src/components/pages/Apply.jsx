import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Apply = () => {
  const { id } = useParams(); // Get job id from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Navigate back to Jobs page after submitting the form
    navigate('/Jobs');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Apply for Job ID: {id}</h1>
      <h2 className="text-xl mb-4">Job Title: Software Engineer</h2>
      <h3 className="text-lg mb-4">Company: Tech Corp</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Resume:</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                required
              />{' '}
              Male
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                required
              />{' '}
              Female
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Apply;
