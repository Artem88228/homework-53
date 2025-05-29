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
    const [currentTask, setCurrentTask] = useState<string>('');

    const handleAddTask = () => {
        const newTask = {
            text: currentTask,
            id: Date.now().toString(),
        };

        setTasks([...tasks, newTask]);
        setCurrentTask('');
    };

  return (
    <>
        <AddTaskForm
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        onAdd={handleAddTask}
        />
            {tasks.map((task) => {
              return  <Task key={task.id} task={task.text} />
            })}
    </>
  )
}

export default App
