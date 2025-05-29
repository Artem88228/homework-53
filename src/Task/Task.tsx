import './Task.css';

type Props = {
    task: string;
    id: string;
    onDelete: (id: string) => void;
};

const Task = ({task, id, onDelete}: Props) => {
    return (
        <div className={'task-block'}>
            <span className={'task-text'}>{task}</span>
            <button type={'button'} onClick={() => onDelete(id)} className={'task-button'}>Delete</button>
        </div>
    )
}

export default Task;