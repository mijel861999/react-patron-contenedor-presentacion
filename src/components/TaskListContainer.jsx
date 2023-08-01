import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';


export default function TaskListContainer() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }


  return (
    <div>    
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  )
}
