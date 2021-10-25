import React from "react"
import { ITask } from "../Interfaces"

interface Props {
    task :ITask
    completeTask(taskNameToDelete: string) : void
}

const TodoTask = ({task,completeTask} :Props) => {
    return (
        <div className="task">
            <div className="content"></div>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
            <button onClick={()=>{
                completeTask(task.taskName)
            }}>X</button>
        </div>
    )

}
export default TodoTask;