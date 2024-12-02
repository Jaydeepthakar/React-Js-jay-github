import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo, toggleComplete } from './actions/todoActions';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTodo(editId, editText));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div className="app">
      <h1>Crud</h1>
      <div>
        <input
          type="text"
          placeholder={editId ? 'Edit task' : 'Add a task'}
          value={editId ? editText : text}
          onChange={(e) => (editId ? setEditText(e.target.value) : setText(e.target.value))}
        />
        {editId ? (
          <button className="add" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="add" onClick={handleAdd}>
            Add
          </button>
        )}
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? 'completed' : ''}
              onClick={() => dispatch(toggleComplete(todo.id))}
            >
              {todo.text}
            </span>
            <div>
              <button className="edit" onClick={() => handleEdit(todo.id, todo.text)}>
                Edit
              </button>
              <button className="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
