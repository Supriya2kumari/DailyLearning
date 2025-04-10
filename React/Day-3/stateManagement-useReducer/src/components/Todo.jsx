import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state,{id: Date.now(),text: action.payload,completed: false}];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed }: todo);
    default:
      return state;
  }
};

function Todo () {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch({ type: 'ADD', payload: text });
      setText('');
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} >
            <span onClick={() => handleToggle(todo.id)}>
              {todo.text}
            </span>
            <button
              onClick={() => handleRemove(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;