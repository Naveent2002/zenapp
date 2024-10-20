import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

const TaskManager = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'To Do' });

  useEffect(() => {
    const unsubscribe = firestore
      .collection('tasks')
      .where('userId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const fetchedTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(fetchedTasks);
      });

    return unsubscribe;
  }, [user.uid]);

  const addTask = async () => {
    if (newTask.title) {
      await firestore.collection('tasks').add({
        ...newTask,
        userId: user.uid,
        createdAt: new Date()
      });
      setNewTask({ title: '', description: '', status: 'To Do' });
    }
  };

  const updateTask = async (id, updatedTask) => {
    await firestore.collection('tasks').doc(id).update(updatedTask);
  };

  const deleteTask = async (id) => {
    await firestore.collection('tasks').doc(id).delete();
  };

  const groupedTasks = {
    'To Do': tasks.filter(task => task.status === 'To Do'),
    'In Progress': tasks.filter(task => task.status === 'In Progress'),
    'Completed': tasks.filter(task => task.status === 'Completed')
  };
  
  return (
    <div>
      <h2>Your Tasks</h2>
      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => updateTask(task.id, { status: 'In Progress' })}>Move to In Progress</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Task title"
        value={newTask.title}
        onChange={e => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newTask.description}
        onChange={e => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskManager;
