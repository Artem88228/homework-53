import './AddTaskForm.css'

const AddTaskForm = () => {
    return (
        <div>
            <input className={'input'} type={'text'} placeholder={'Add new Task'}/>
            <button className={'button'} type={'button'}>Add</button>
        </div>
    )
}
export default AddTaskForm;