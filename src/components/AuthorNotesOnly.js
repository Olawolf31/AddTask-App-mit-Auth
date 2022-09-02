
  //change priority level alternative in addTask component

  /*   const getPriorityValue = (newPriority) => {
    setPriority(newPriority)
  } */


  //usingGrid Instead

    <>
      <div className="allTask-body">
        <span className="allTask-title"> All Tasks</span>
        <span className="allTask-priority">Priority Level</span>
      </div>
      {allTask.map((task) => {
        return (
          <div key={task.id}>
            <div className="title-grid">
            <div className="item-0"><TbDotsCircleHorizontal /></div>
            <div className="item-1">{task.taskTitle}</div>
            <div className="item-2"> {task.priority}</div>
            <div className="item-3">
               
                <TiDelete />
              </div>
            </div>
          </div>

          //using grid css instead of flexbox
          
        );
      })}
      
      <div className="angry-grid">
              <div className="item-0"><TbDotsCircleHorizontal /></div>
              <div className="item-1">welp</div>
              <div className="item-2"> jhashvdsdvdjhh</div>
              <div className="item-3"><TiDelete /> </div>
            </div>
    </>
    
 
/* * trying grid css */

/* .title-grid {
  display: grid; 

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  gap: 0px;
  height: 100%;
  padding: 10px;
border-bottom: 1px solid #fefe;
}

.item-0 {

  background-color: #d777ab; 
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 2;
  
}

.item-1 {

  background-color: #979558; 
  grid-row-start: 1;
  grid-column-start: 2;

  grid-row-end: 2;
  grid-column-end: 3;
  
}
.item-2 {

  background-color: #c697a9; 
  grid-row-start: 1;
  grid-column-start: 3;

  grid-row-end: 2;
  grid-column-end: 4;
  
}
.item-3 {

  background-color: #ffd95b; 
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 2;
  grid-column-end: 5;
  
} */