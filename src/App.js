import { useState } from 'react';
import './App.css';
import {List} from "@mui/material";
import AddTaskForm from './components/AddTaskForm';
import UpdateTaskForm from './components/UpdateTaskForm';
import Todo from './components/Todo';

function App() {
  let getTodos = JSON.parse(localStorage.getItem('todo'));
  const [todo, setTodo] = useState(getTodos?.length ? getTodos : [])
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState({})

  // textboxes handle change events
  const updateTaskHandleChange = (e) => {
    setUpdateData({...updateData, title: e.target.value})
  }
  const newTaskHandleChange = (e) => {
    setNewTask(e.target.value)
  }

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36)
  }

  // CRUD functionality
  const addTask = () => {
    let ObjData = {
      id: generateUniqueId(), 
      title: newTask, 
      status: false
    }
    newTask && setTodo(prev => [...prev, ObjData]);
    newTask && setNewTask("");
    newTask && localStorage.setItem('todo', JSON.stringify([...todo, ObjData]));
  }
  const editTask = (task) => setUpdateData({...task});

  const cancelUpdate = () => setUpdateData({});

  const updateTask = () => {
    let newTasks = todo.map(task => {
      if(task.id === updateData.id){
        return ({...task, title: updateData.title  })
      }
      return task;
    });
    setTodo(newTasks);
    localStorage.setItem('todo', JSON.stringify(newTasks));
    cancelUpdate();
  }

  const deleteTask =(id) => {
    let modifiedList = todo.filter(task => task.id !== id);
    setTodo(modifiedList);
    localStorage.setItem('todo', JSON.stringify(modifiedList));
  }

  const markDone =(id) => {
    let excludeMarking = todo.filter(task => task.id !== id);
    let findMarking = todo.find(task => task.id === id);
    if(findMarking){
      findMarking = ({...findMarking, status: !findMarking.status  })
    }
    let newTasks = [...excludeMarking, findMarking];
    setTodo(newTasks);
    localStorage.setItem('todo', JSON.stringify(newTasks));
  }

  return (
    <div className="container App">
      <h2 className='mb2'>To Do list App</h2>

      {
        updateData && Object.keys(updateData).length ?
        <UpdateTaskForm 
        cancelUpdate={cancelUpdate}
        updateTask={updateTask}
        updateData={updateData}
        updateTaskHandleChange={updateTaskHandleChange} />
        :
        <AddTaskForm 
        newTask={newTask}
        addTask={addTask}
        newTaskHandleChange={newTaskHandleChange} />
      }
      
      
      <List className={'todo-list'}>
        { todo?.length ? todo
        .map((task, index) => {
          return <Todo key={task.id} 
                  task={task} 
                  editTask={editTask}
                  deleteTask={deleteTask}
                  markDone={markDone} 
                />
        }) : "" }    
      </List>
    </div>
  )
}

export default App