import { useParams, useLocation } from "react-router-dom";

const StaticPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const taskFromState = location.state?.task;

    // Fallback: load from localStorage if state is missing
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = taskFromState || tasks[id];

    return (
        <div style={{ padding: "20px" }}>
            <h2>🔍 Task Details</h2>
            {task ? (
                <>
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Long URL:</strong> {task.longUrl}</p>
                    <p><strong>Short Code:</strong> {task.shortCode}</p>
                </>
            ) : (
                <p>No task data passed</p>
            )}
        </div>
    );
};

export default StaticPage;
