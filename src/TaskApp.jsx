import React, {useState} from "react"

function TaskApp() {

    const [tasks, taskSetter] = useState(['Workout', 'Laundry', 'Learn React'])
    const [newTask, newTaskSetter] = useState('')

    function inputChange(event) {
        newTaskSetter(event.target.value)
    }

    function addTask() {

        if (newTask.trim() !== '') {
            taskSetter(t => [...t, newTask])
            newTaskSetter('')
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        taskSetter(updatedTasks)
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
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            taskSetter(updatedTasks)
        }
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
                <span className="text">{task}</span>
                
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

