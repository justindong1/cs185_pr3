import './Task.css'

const Task = ({task, onDelete, updateSignal}) => {

    return (
        <div onDoubleClick={() => {updateSignal(task.id)}}>
            <div className={`taskContainer ${task.important ? 'important' : ''}`}>
                <h3> 
                    <div className="alignLeft">{task.title}</div>
                    <div className="delete alignRight" onClick={() => onDelete(task.id)}>
                        Delete
                    </div>
                </h3>
                <br></br>
                <p>{task.day}</p>
                <a href={task.textInfor} className="zoomLink">{task.textInfor}</a>
            </div>
            <br></br>
        </div>
    )
}

export default Task;