const AddTaskForm = ({ newTask, setNewTask, addTask, addDescription, newDescription, setNewDescription }) => {
  
  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col-auto">
          <input placeholder="*Add task name"
            value={newTask}
            onChange={ (e) => 
              { setNewTask(e.target.value);}
            }
            className="form-control form-control-lg"
          />
          </div>
          <div className="col">
            <input  placeholder="Add Description to your task"
              value={newDescription}
              onChange={  (e) => 
                { setNewDescription(e.target.value); }
              }
              className="form-control form-control-lg"
            /> 
            </div>

        <div className="col-auto">
          <button
            onClick={() => { addTask(); addDescription();}}

            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;