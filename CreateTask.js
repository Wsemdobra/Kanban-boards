import React, { useState } from "react";

function CreateTask(props) {
const [title,setTitle]= useState('')
const [priority,setPriority]= useState(1)
function onSubmit(){
setTitle('')
setPriority(1)
props.onSubmit({title,priority})
}

    return (
        <div>
            <div className="m-3">
                <label htmlFor="title" className="form-label" >Title</label>
                <input type='text' placeholder="Введите задачу..." className="form-control" id='title' style={{width:'92%',minHeight:'20px', marginLeft:'22px',borderRadius: '3px'}} value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="m-3">
                <label htmlFor="priority" className="form-label">Priority</label>
                <input type='number' className="form-control" id='priority' style={{minHeight:'20px',margin:'3px',borderRadius: '3px'}} value={priority} onChange={(e)=> setPriority(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default CreateTask;