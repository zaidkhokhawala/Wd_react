<<<<<<< HEAD
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateItem, deleteItem } from './store';
import { motion } from 'framer-motion';
import './app.css'; // Ensure the correct CSS file path

const Main = () => {
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const tasks = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const handleAddOrUpdate = () => {
    if (!newTask.trim()) {
      alert('Task cannot be empty!');
      return;
    }

    if (editMode) {
      dispatch(updateItem({ id: editId, text: newTask }));
      setEditMode(false);
      setEditId(null);
    } else {
      dispatch(addItem({ text: newTask }));
    }

    setNewTask('');
  };

  const handleEdit = (task) => {
    setNewTask(task.text);
    setEditMode(true);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-gold">Luxury Task Manager</h1>

      {/* Input Section */}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className={`btn ${editMode ? 'btn-warning' : 'btn-primary'} ms-2`}
          onClick={handleAddOrUpdate}
        >
          {editMode ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Task List with Framer Motion for Animations */}
      <ul className="list-group">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span>{task.text}</span>
            <div>
              <button
                className="btn btn-sm btn-info me-2"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </motion.li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-muted mt-4">No tasks available. Add some tasks to get started!</p>
      )}
    </div>
  );
};

export default Main;
=======
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateItem, deleteItem } from './store';
import { motion } from 'framer-motion';
import './app.css'; // Ensure the correct CSS file path

const Main = () => {
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const tasks = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const handleAddOrUpdate = () => {
    if (!newTask.trim()) {
      alert('Task cannot be empty!');
      return;
    }

    if (editMode) {
      dispatch(updateItem({ id: editId, text: newTask }));
      setEditMode(false);
      setEditId(null);
    } else {
      dispatch(addItem({ text: newTask }));
    }

    setNewTask('');
  };

  const handleEdit = (task) => {
    setNewTask(task.text);
    setEditMode(true);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-gold">Luxury Task Manager</h1>

      {/* Input Section */}
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className={`btn ${editMode ? 'btn-warning' : 'btn-primary'} ms-2`}
          onClick={handleAddOrUpdate}
        >
          {editMode ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Task List with Framer Motion for Animations */}
      <ul className="list-group">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span>{task.text}</span>
            <div>
              <button
                className="btn btn-sm btn-info me-2"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </motion.li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-muted mt-4">No tasks available. Add some tasks to get started!</p>
      )}
    </div>
  );
};

export default Main;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
