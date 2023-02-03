import '../App.css';
import { Card, CardContent} from "@mui/material";
import {Button, TextField} from "@mui/material";

function UpdateTaskForm({cancelUpdate, updateTask, updateData, updateTaskHandleChange}) {
    
    return (
    <Card>
        <CardContent className="spacies-row">
            <TextField size="small" className='textbox' name="update_task" 
                value={updateData && updateData.title} 
                onChange={(e) => updateTaskHandleChange(e)} 
            />
            <Button variant="contained"
            onClick={updateTask}>
                Update
            </Button>
            <Button variant="contained" color="warning"
            onClick={cancelUpdate}>
                cancel
            </Button>
        </CardContent>
    </Card>
  )
}

export default UpdateTaskForm