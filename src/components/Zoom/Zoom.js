import {useState, useEffect} from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import './Zoom.css'
import UpdateTask from './UpdateTask';

const Zoom = () => {
    const [tasks, setTasks] = useState([])
    const [showSchedule, setShowSchedule] = useState(true)
    const [buttonText, setButtonText] = useState("Create a Meeting")
    const [signal, setSignal] = useState(false)
    const [id, setID] = useState(-1)

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        return data
    }

    // Add task
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data])
    }

    // Delete a Task with all filter
    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    const updateTask = async ({title, day, textInfor, important}) => {
        const updTask = {id: id, important: important, title: title,
                        day: day, textInfor: textInfor}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updTask),
        })
    
        setTasks(tasks.map((task) => task.id === id ?
          {id: task.id, important: important, title: title,
          day: day, textInfor: textInfor}
         : task))
         setSignal(false)
         setID(-1)
    }

    const updateSignal = (local_id) => {
        if (local_id == id) {
          setSignal(false)
          setID(-1)
          return 
        }
        setSignal(true)
        setID(local_id)
    }

    const toggleButton = () => {
        setShowSchedule(!showSchedule)
        if (buttonText == "Full Schedule") {
            setButtonText("Create a Meeting")
        }
        else {
            setButtonText("Full Schedule")
        }
    }

    return(
        <div className="container">
            <div className="inline">
                <h className="header">Zoom Meeting Manager</h>
                <button className="button" onClick={toggleButton}>{buttonText}</button>
            </div>
            {showSchedule ? <Tasks tasks={tasks} onDelete={deleteTask} updateSignal={updateSignal}></Tasks> : <AddTask onAdd={addTask}></AddTask>}
            {signal ? <UpdateTask onAdd={updateTask}></UpdateTask> : null}
        </div>
    )
}

export default Zoom; 