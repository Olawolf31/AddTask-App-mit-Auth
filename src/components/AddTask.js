import React, { useState } from "react";
import AllTasks from "./AllTasks";
import AddTaskForm from "./AddTaskForm";


const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("");

  //state for all default task in the app and controlling them
  const [allTask, setAllTask] = useState([]);

  //counting the number of tasks using state
  const [countTask, setCountTask] = useState(0);

  //show taskform on button click instead
  const [taskForm, setTaskForm] = useState(false); 



  //method 1 can be use when you want to pass from child to parent
  //or vice-versa
  // 1. adding new task to the list
  /* const addNewTask = (generatedTask) => {
  let id = Math.random().toString()
  let newTask = {...generatedTask, id}
  setAllTask([newTask, ...allTask])
  console.log(newTask)
} */

  //method 2 is used when the button onclick is in another component
  //it can be use alongside method 1

  //2. rendering alltasks when user clicks the add task button
  /* const addTaskButton = (e) => {
  e.preventDefault()
  addNewTask({taskTitle, priority})
  setTaskTitle('')
  setPriority('')
} */

  //alternative way rendering alltasks when user clicks the add task button
  const addTaskButton = (e) => {
    e.preventDefault();

    if (priority === "") {
      alert("Enter Priority Level");
      return;
    }
    //create a new Object if there isn't an initial one to store items
    const allData = {
      ...allTask,
      taskTitle,
      priority,
      id: Math.random().toString(),
    };
    setAllTask((prevTask) => {
      return [allData, ...prevTask];
    });
    setCountTask((prevCount) => prevCount + 1);
    setTaskTitle("");
    setPriority("");
  };

  //Delete Task

  const deleteNewTask = (id) => {
    setAllTask(
      allTask.filter((task) => {
        return task.id !== id;
      })
    );
    setCountTask((prevCount) => prevCount - 1);
  };

  //show add TaskForm

  const triggerAddTaskForm = () => {
    setTaskForm(!taskForm);
  };

  return (
    <>
      
        <>
        <div className="login-container">

          <div className="welcomeHeader">Welcome to Add Task</div>
            
            {taskForm ? <AddTaskForm
              taskTitle={taskTitle}
              setTaskTitle={setTaskTitle}
              priority={priority}
              setPriority={setPriority}
              addTaskButton={addTaskButton}
              triggerAddTaskForm={triggerAddTaskForm}
            />  : <div>
              <button className='btn-vanilla' onClick={triggerAddTaskForm}>AddTask</button>
              </div>}
            
            <span className="countTask">
              You have {countTask} task in your Task List
            </span>
            <AllTasks allTask={allTask} deleteNewTask={deleteNewTask} />
          </div>
        </>
      
      
    </>
  );
};

export default AddTask;
