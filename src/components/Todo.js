import '../App.css';
import {ListItem, ListItemText} from "@mui/material";
import {IconButton} from "@mui/material";

//  icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UndoIcon from '@mui/icons-material/Undo';

function Todo({markDone, task, deleteTask, editTask, tabIndex}) {
  
  return (
    <ListItem className="task"
        secondaryAction={
        <div className='todo-icons'>
            {/* mark done icon */}
            <IconButton edge="end" color="success" 
            title="check" aria-label="check"
            onClick={()=> markDone(task.id)}>
            { task.status ? <UndoIcon /> : <CheckCircleIcon /> }
            </IconButton>
            {/* edit icon */}
            { !task.status ?
            <IconButton edge="end" color="primary" 
            title="Edit" aria-label="Edit"
            onClick={() => editTask(task) }>
            <EditIcon /></IconButton>
            : "" }
            {/* delete icon */}
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