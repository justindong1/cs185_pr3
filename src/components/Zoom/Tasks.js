import Task from './Task';

const Tasks = ({tasks, onDelete, updateSignal}) => {
    return (
        <div>
            {
                tasks.length > 0 ? tasks.map((task)=> <Task task={task} onDelete={onDelete} updateSignal={updateSignal}/>) : <p style={{color: 'red'}}>There are no available meetings.</p>
            }
        </div>
    )
}

export default Tasks;