import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            
                
             <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                
              <table className="table">
              <thead className="thead-dark">
                         
                         <th>ID</th>
                         <th>Task</th>
                         <th>Description</th>
                         <th></th>
              </thead>
                  <tbody>
                 
              
                <td><span className="id">{index + 1}</span></td>
                <td><span className="taskText">{task.title}</span></td>
                <td><span className="taskDescription">{task.Description}</span></td>
        
                </tbody> 

                </table>
              </div>
              
              <div className="iconsWrap">
                <td><span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span></td>

                {task.status ? null : (
                  <td><span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title,
                      Description: task.Description,  
                      status: task.status ? true : false
                    }) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span></td>
                )}

                <td><span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span></td>
                
            
              </div>
             
                
            </div>
            
            
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;