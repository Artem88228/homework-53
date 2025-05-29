import './AddTaskForm.css'

type Props = {
    currentTask: string;
    setCurrentTask: (text: string) => void;
    onAdd: () => void;
};

const AddTaskForm = ({currentTask, setCurrentTask, onAdd}: Props) => {
    return (
        <div>
            <input className={'input'} value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} type={'text'} placeholder={'Add new Task'}/>
            <button className={'button'} type={'button'} onClick={onAdd}>Add</button>

        </div>
    )
}
export default AddTaskForm;