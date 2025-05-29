import './App.css'
import {useState} from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";
import Task from './Task/Task.tsx';

const App = () => {
    const [tasks, setTasks] = useState([
        {text: 'Buy milk', id: '1'},
        {text: 'Walk with dog', id: '2'},
        {text: 'Do homework', id: '3'}
    ])

  return (
    <>
        <AddTaskForm />
            {tasks.map((task) => {
              return  <Task key={task.id} task={task.text} />
            })}
    </>
  )
}

export default App
