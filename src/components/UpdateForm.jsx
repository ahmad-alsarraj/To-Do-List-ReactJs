import {  } from "@fortawesome/free-solid-svg-icons";

const UpdateForm = ({ updateData, changeTask, changeDescription, updateTask, updateDescription, cancelUpdate }) => {
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col-auto">
          <input 
            value= {updateData && updateData.title}
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col">
          <input 
            value={updateData && updateData.Description }
            onChange={ (e) => changeDescription(e)}
            className="form-control form-control-lg"
          />
        </div>
        
        <div className="col-auto">
          <button
            onClick={() => { updateTask(); updateDescription();}}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;