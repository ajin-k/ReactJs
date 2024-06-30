import React from "react";

function TODO(){
    const [value, setValue] = React.useState(""); //to store value from input box
    const [tasks, setTasks] = React.useState([]); //to store value from tasks box --"Coding","Cleaning","Grocery shoping"

    function getTask(e){
        setValue(e.target.value);
        console.log("Inside getTask")
    }

    function addTask(){
        const newSetOfTasks = [...tasks, value];
        setTasks(newSetOfTasks);
        setValue("")
        console.log("Inside addTask")
    }
    
    function deleteTask(task){
        const newSetOfTasks = tasks.filter((item)=>{return task!=item}) // only keeps the task other than received items
        setTasks(newSetOfTasks);
    }

    return<>
        <h1>To-Do Planner.</h1>
        <div id="InputSection">
            {/* change is input will change value of input field */}
            <input type="text" onChange={getTask} value={value}></input>
            {/* add button will add the input tag value to task list */}
            <button onClick={addTask}>Add</button>
        </div>
        <div id="todoItems">
            <ul id="ListItems">
            {tasks.map((item, idx)=>{
                return <li key={idx}>{item} <button onClick={()=>{deleteTask(item)}}>X</button> 
                {/* https://react.dev/learn/responding-to-events#:~:text=for%20short%20functions.-,Pitfall,-Functions%20passed%20to */}
                </li>
            })} 
            </ul>
        </div>
    </>
}

export default TODO