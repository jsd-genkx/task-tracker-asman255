import { useState } from 'react'
import TaskForm from './components/TaskForm'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





export function onAddTask(id,task) {
  const [tasks, setTask] = useState([]);
  setTask({
    id: id,
    text: task
  })

  console.log(tasks)
}
function App() {


  

  return (

    <>
      <div className="container">
        <h1 className="text-3xl font-bold underline text-red-500">Task</h1>

      </div>
      <TaskForm />
    </>


  )
}

export default App
