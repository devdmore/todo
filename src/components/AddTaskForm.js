import '../App.css';
import { Card, CardContent} from "@mui/material";
import {Button, TextField} from "@mui/material";


function AddTaskForm({newTask, addTask, newTaskHandleChange}) {
    
    return (
    <Card>
        <CardContent className="spacies-row">
        <TextField size="small" className='textbox' name="newTask" 
        value={newTask} onChange={newTaskHandleChange}  />
        <Button variant="contained"
        onClick={addTask}>Add Task</Button>
        </CardContent>
    </Card>
  )
}

export default AddTaskForm