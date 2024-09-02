// components/TodoList.js
import React from 'react';
import './TodoList.css'; // Optional: Add some CSS for styling

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Date: {todo.date}</p>
            <p>Tag: {todo.tag}</p>
          </div>
        ))
      ) : (
        <p>No tasks available. Add some tasks!</p>
      )}
    </div>
  );
}

export default TodoList;
