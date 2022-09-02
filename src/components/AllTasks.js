import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import {AiOutlineCheckCircle} from 'react-icons/ai';

const AllTasks = ({ allTask, deleteNewTask }) => {
  return (
    <>
    
      {allTask.map((task) => {
        return (
          <div key={task.id}>
            <div className="allTask-list">
            <div className="item"><AiOutlineCheckCircle /></div>
              <span className="allTask-title-list">{task.taskTitle}</span>
              <span className="allTask-priority-list"> {task.priority}</span>
              <span className="allTask-delete-list">
               
                <MdOutlineDeleteSweep style={{color: 'red', cursor: 'pointer'}} 
                onClick={() => deleteNewTask(task.id)}
                
                 />
              </span>
            </div>
          </div>

     
          
        );
      })}
      

    </>
    
  );
};

export default AllTasks;
