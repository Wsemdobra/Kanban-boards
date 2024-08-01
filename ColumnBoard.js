import React from "react";

function ColumnBoard(props) {

  
  return (
    <div className="col">
      <h2>{props.status}</h2>
      {props.tasks
        .filter((task) => task.status === props.status)
        .sort((a, b) => a.priority - b.priority)
        .map((task) => (
          <div className='card m-1' style={{ border: '3px solid grey', borderRadius: '3px' }} key={task.id}>
            <div className="card-body">
              <h3 className="card-title">{task.title}</h3>
              <p>{task.priority}</p>
              <input
                type='text'
                placeholder="Введите комментарий..."
              />
              <select class="form-select" aria-label="Default select example" defaultValue={props.status} onChange={(e) => props.onStatusChange(task.id, e.target.value)}>
                {props.statuses.map((status) => (
                  <option key={status} value={status} >{status}</option>
                ))}
              </select>
              <button onClick={()=> props.remove(task)}>X</button>
            </div>
          </div>
        ))}
    </div>
  )
}
export default ColumnBoard;