import React, { useState } from 'react'

export default function AddTaskForm({ onAddTask }) {
  const [taskText, setTaskText]  = useState('')

  const handleChange = (e) => {
    setTaskText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText.trim(),
      }
      onAddTask(newTask)
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskText} onChange={handleChange} />
      <button type="submit">Agregar tarea</button>
    </form>
  )
}
