import './Task.css';

type Props = {
    task: string;
};

const Task = ({task}: Props) => {
    return (
        <div className={'task-block'}>
            <span className={'task-text'}>{task}</span>
            <button type={'button'} className={'task-button'}>Delete</button>
        </div>
    )
}

export default Task;