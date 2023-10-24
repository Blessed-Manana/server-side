import { Box } from "@mui/material";
import NavBar from "../components/navBar/Navbar";
import TaskManager from "../components/taskManager/TaskManager";

const TaskPage = () => {
    return (
        <Box>
            <NavBar />
            <TaskManager />
        </Box>
    );
}

export default TaskPage;