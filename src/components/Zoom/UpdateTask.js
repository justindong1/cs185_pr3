import {useState} from 'react';
import './AddTask.css';

const UpdateTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [textInfor, setTextInfor] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (title.length > 30) {
            alert('Title can not be more than 30 characters!')
            return
        }
        if (!title) {
            alert('Please add a title!')
            return
        }
        if (textInfor.length > 100) {
            alert('The summary of your schedule can not be more than 100 characters!')
            return
        }
        if (!day) {
            alert('Please enter a date!')
            return
        }
        if (day && Date.parse(day) < Date.now()) {
            alert('Please use a date in the future!')
            return
        }
        if (textInfor && !textInfor.includes("zoom")) {
            alert('Zoom URL not valid!')
            return
        }

        onAdd({title, day, textInfor, important})

        setTitle('')
        setDay('')
        setTextInfor('')
        setImportant(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <br></br>
                <input className="addTaskInput" type='text' placeholder='Add Task'
                value={title} onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <br></br>
                <input className="addTaskInput" type='datetime-local'
                value={day} onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Zoom Link</label>
                <br></br>
                <input className="addTaskInput" type="url" placeholder='Zoom link to the meeting'
                value={textInfor} onChange={(e) => setTextInfor(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Important</label>
                <br></br>
                <input className="addTaskInput" type='checkbox' checked={important}
                value={important} onChange={(e) => setImportant(e.currentTarget.checked)}
                />
            </div>
            <br></br>
            <input className="addTaskInput" type='submit' value='Update Information'/>
        </form>
    )
}

export default UpdateTask;