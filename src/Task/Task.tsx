import './Task.css';

const Task = () => {
    return (
        <div className={'task-block'}>
            <span className={'task-text'}>Task</span>
            <button type={'button'} className={'task-button'}>Delete</button>
        </div>
    )
}

export default Task;