import React, {useState} from "react"

function TaskApp() {

    // Initialize tasks as objects with text and time
    const [tasks, taskSetter] = useState([
        { text: 'Design', time: new Date().toLocaleString() },
        { text: 'Implement', time: new Date().toLocaleString() },
        { text: 'Deploy', time: new Date().toLocaleString() }
    ])
    const [newTask, newTaskSetter] = useState('')

    function inputChange(event) {
        newTaskSetter(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== '') {
            // Add new task as object with text and time
            const taskObj = { text: newTask, time: new Date().toLocaleString() }
            taskSetter(t => [...t, taskObj])
            newTaskSetter('')
        }
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            taskSetter(updatedTasks)
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            taskSetter(updatedTasks)
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        taskSetter(updatedTasks)
    }

    return(
    <div className="to-do-list">
        <h1>To-Do List</h1>

        <div className="add-task">
            <input type="text" value={newTask} onChange={inputChange} placeholder="Add a task..."/>
            <button className="add-button" onClick={addTask}>+</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <div style={{textAlign: 'left'}}>
                    <span className="text">{task.text}</span>
                    <p className="time" style={{fontSize: '13px', color: '#888'}}>({task.time})</p>
                </div>

                <div className="task-action">
                    <button onClick={() => moveUp(index)} className="move-up" >⬆</button>
                    <button onClick={() => moveDown(index)} className="move-down">⬇</button>
                    <button className="delete" onClick={() => deleteTask(index)}>🗑</button>
                </div>
            </li>)}
        </ol>

    </div>
    )
    

}

export default TaskApp

