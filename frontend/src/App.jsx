// App.js
import Navbar from './components/Navbar/Navbar';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";  // Import close icon
import React, { useState } from 'react';
import './App.css'; // Include your CSS file
import TodoList from './components/TodoList/TodoList'; // Import the new TodoList component

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    tag: ''
  });
  const [todos, setTodos] = useState([]);

  // Toggle form visibility
  const handleCreateClick = () => {
    setShowForm(!showForm);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.date && formData.tag) {
      setTodos((prev) => [...prev, formData]); // Add new todo to the list
      setFormData({ title: '', description: '', date: '', tag: '' }); // Reset form data
      setShowForm(false); // Hide the form after submission
    }
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    setFormData({ title: '', description: '', date: '', tag: '' }); // Clear form data
  };

  // Handle close button click
  const handleCloseClick = () => {
    setShowForm(false); // Hide the form
  };

  return (
    <div className="app">
      <Navbar />
      <button className="create-button" onClick={handleCreateClick}>
        <IoMdAdd className="create-icon" />Create
      </button>

      {showForm && (
        <div className="form-container">
          {/* Close button at top-right corner */}
          <button className="close-icon" onClick={handleCloseClick}>
            <AiOutlineClose />
          </button>
          <h1 className="form-heading">New Task</h1>
          <form onSubmit={handleSubmit} className="todo-form">
            <input
              className="form-row"
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              className="form-row"
              name="description"
              placeholder="Enter task description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <div className="form-row">
              <input
                type="date"
                id="date"
                name="date"
                className="date-input"
                value={formData.date}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="cars">Choose a tag:</label>
              <select
                id="cars"
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a tag</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div className="form-buttons">
              <button type="button" onClick={handleCancelClick} className="cancel-button">
                Cancel
              </button>
              <button type="submit" className="submit-button">Submit</button>
              {/* Cancel button */}

            </div>
          </form>
        </div>
      )}

      {/* Use the TodoList component and pass the todos as a prop */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
