import '../App.css';
import {ListItem, ListItemText} from "@mui/material";
import {IconButton} from "@mui/material";

//  icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UndoIcon from '@mui/icons-material/Undo';

function Todo({markDone, task, deleteTask, editTask}) {
  
  return (
    <ListItem className="task"
        secondaryAction={
        <div className='todo-icons'>
            
            <IconButton edge="end" color="success" 
            title="check" aria-label="check"
            onClick={()=> markDone(task.id)}>
            { task.status ? <UndoIcon /> : <CheckCircleIcon /> }
            </IconButton>
            
            { !task.status ?
            <IconButton edge="end" color="primary" 
            title="Edit" aria-label="Edit"
            onClick={() => editTask(task) }>
            <EditIcon /></IconButton>
            : "" }
            
            <IconButton edge="end" color="warning" 
            title="delete" aria-label="delete"
            onClick={()=> deleteTask(task.id)}><DeleteIcon /></IconButton>
        </div>
        }>
        <ListItemText primary={task.title} className={task.status ? "done" : ""} />
    </ListItem>
  )
}

export default Todo