import React from 'react'

const AddTaskForm = ({taskTitle, setTaskTitle, priority, setPriority, addTaskButton, triggerAddTaskForm}) => {
  return (
    <div>
        
        
          <div className="taskWrapper">
            <form onSubmit={addTaskButton}>
              <div>
                <label htmlFor="tasktitle">Task Title</label>
              </div>
              <input
                id="tasktitle"
                placeholder="Enter Task"
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />

              <div>
                <label htmlFor="select">Priority Level</label>
              </div>
              <select
                id="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Select Priority">Select Priority</option>
                <option value="High priority">High Priority</option>
                <option value="Medium priority">Medium Priority</option>
                <option value="Low priority">Low Priority</option>
              </select>
              <div>
                <button className="btn-add-task">Add New</button>
                <button onClick={triggerAddTaskForm}
                className="btn-close-task">Close</button>
              </div>
            </form>
          </div>
          
    </div>
  )
}

export default AddTaskForm