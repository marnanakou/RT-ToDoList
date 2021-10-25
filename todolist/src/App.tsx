import React, {FC,useState,ChangeEvent} from 'react';
import "./App.css"
import {ITask} from "./Interfaces"
import ToDoTask from "./Components/ToDoTask"
import TodoTask from './Components/ToDoTask';

const App : FC = () =>{
  const [task, setTask]=useState<string>("")
  const [deadline, setDeadline]=useState<number>(0)
  const [todoList, setTodoList]=useState<ITask[]>([])

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
    if (e.target.name === "task"){
      setTask(e.target.value)
    } else {
      setDeadline(Number(e.target.value))
    }
  }


  const addTask = ():void => {
    const newTask = {deadline:deadline,taskName:task}
    setTodoList([...todoList,newTask])
    //to clear out everything on the list
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string):void => {
  setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
  }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input 
        type= "text" 
        placeholder="Task... " 
        name ="task" 
        value= {task}
        onChange={handleChange}>
        </input>
        <input 
        type= "number" 
        name ="deadline"
        value = {deadline}
        placeholder="Deadline in Days... " 
        onChange={handleChange}>
          </input>
        </div>
        <button onClick={addTask} >Add Task</button>
      </div>
      <div className="todolist">
        {todoList.map((task:ITask,key:number)=>{return <TodoTask key={key} task={task} completeTask={completeTask}/>})}</div>
    </div>
  );
}

export default App;
