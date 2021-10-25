import React, {FC,useState,ChangeEvent} from 'react';
import "./App.css"

const App : FC = () =>{
  const [task, setTask]=useState<string>("")
  const [deadline, setDeadline]=useState<number>(0)
  const [todo, setTodoList]=useState([])

  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{

  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type= "text" placeholder="Task... " onChange={handleChange}></input>
        <input type= "number" placeholder="Deadline in Days... " onChange={handleChange}></input>
        </div>
        <button >Add Task</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
}

export default App;
