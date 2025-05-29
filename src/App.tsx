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

        if (currentTask.trim() === '') return alert('Please enter a task');

        const newTask = {
            text: currentTask,
            id: Date.now().toString(),
        };

        setTasks([...tasks, newTask]);
        setCurrentTask('');
    };

    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

  return (
    <>
        <AddTaskForm
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        onAdd={handleAddTask}
        />
            {tasks.map((task) => {
              return  <Task key={task.id} task={task.text} id={task.id} onDelete={handleDeleteTask} />
            })}
    </>
  )
}

export default App
