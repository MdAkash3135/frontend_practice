import React, { useState } from 'react';

const NewTodos = (props) => {
  
  const [formData, setFormData] = useState({ name: ''});

  const handleSubmit = (e) => {
     e.preventDefault(); // Prevent default form submission behavior

    props.onChangeNewData({
      formdata: formData
    });

    // Clear the input field after submission
    //setFormData({ name: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTodos;
