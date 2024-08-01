import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ColumnBoard from './components/ColumnBoard';
import CreateTask from './components/CreateTask';
import Modal from './components/Modal';


const taskStatuses = ['Todo', 'In Progres', 'Testing', 'Done'];
const initialTasks = [{
  id: 1,
  title: 'Задача 1',
  status: 'Done',
  priority: '1'
},
{
  id: 2,
  title: 'Задача 2',
  status: 'Testing',
  priority: '2'
},
{
  id: 3,
  title: 'Задача 3',
  status: 'Testing',
  priority: '3'
},
{
  id: 4,
  title: 'Задача 4',
  status: 'Todo',
  priority: '4'
},
{
  id: 5,
  title: 'Задача 5',
  status: 'In Progres',
  priority: '5'
},
{
  id: 6,
  title: 'Задача 6',
  status: 'In Progres',
  priority: '6'
},
{
  id: 7,
  title: 'Задача 7',
  status: 'Todo',
  priority: '7'
},
{
  id: 8,
  title: 'Задача 8',
  status: 'In Progres',
  priority: '8'
},
{
  id: 9,
  title: 'Задача 9',
  status: 'Todo',
  priority: '9'
},
{
  id: 10,
  title: 'Задача 10',
  status: 'In Progres',
  priority: '10'
}]
function App() {
const [tasks, setTasks] = useState(initialTasks)


function onStatusChange(id,newStatus){
setTasks(tasks.map((task) => (task.id === id) ? {...task,status: newStatus} : task))
}

function onCreateTask(task){
  setTasks([...tasks,{...task, id: Math.random(), status:'Todo'}])
}
function removeTask(task) {
  setTasks(tasks.filter(t => t.id !== task.id))
}
const [modalActive,setModalActive] = useState(true)
  return (
    
    <div className="container">
      <button className='open-btn' onClick={()=>setModalActive(true)}>Войти</button>
      <Header />
     
      <CreateTask onSubmit={onCreateTask}/>
      <div class="row">
        {taskStatuses.map((status) => (
          <ColumnBoard
          remove={removeTask}
            key={status}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            statuses={taskStatuses}
          onStatusChange={onStatusChange}
          />
        ))}
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
        

    </div>
  );
}

export default App;
