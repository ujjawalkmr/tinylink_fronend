import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilterBar from "./SearchFilter";

const TodoApp = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    // // Load tasks from localStorage when component mounts
    // useEffect(() => {
    //     const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    //     setTasks(saved);
    // }, []);

    // // Save tasks to localStorage whenever tasks change
    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [tasks]);

    // Add new task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!longUrl.trim()) return;
        const newTask = {
            longUrl,
            shortCode,
            clicks: 0,
            lastClick: null
        };
        setTasks([...tasks, newTask]);
        setLongUrl("");
        setShortCode("");
    };

    // Delete task
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
            <h2>📝 Create new short link</h2>

            {/* Input + Submit */}
            <form onSubmit={handleAddTask}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    Enter your long URL:
                </label>
                <input
                    type="text"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Enter a long URL"
                    style={{ padding: "8px", width: "100%", marginBottom: "12px" }}
                />

                <label style={{ display: "block", marginBottom: "8px" }}>
                    Custom short code:
                </label>
                <input
                    type="text"
                    value={shortCode}
                    onChange={(e) => setShortCode(e.target.value)}
                    placeholder="Enter a custom code"
                    style={{ padding: "8px", width: "100%" }}
                />

                <div style={{ marginTop: "12px", textAlign: "center" }}>
                    <button
                        type="submit"
                        style={{ padding: "8px 12px", width: "70%" }}
                    >
                        Add
                    </button>
                </div>
            </form>
            <h2>Your short link</h2>
            <SearchFilterBar />
            {/* Task Table */}
            <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Shortened URL</th>
                        <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Target URL</th>
                        <th style={{ borderBottom: "1px solid #ccc", textAlign: "center" }}>Total Clicks</th>
                        <th style={{ borderBottom: "1px solid #ccc", textAlign: "center" }}>Last Click Time</th>
                        <th style={{ borderBottom: "1px solid #ccc" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index}>
                            <td style={{ padding: "8px" }}>
                                {/* Example shortened URL display */}
                                {window.location.origin}/{t.shortCode}
                            </td>
                            <td style={{ padding: "8px" }}>{t.longUrl}</td>
                            <td style={{ padding: "8px", textAlign: "center" }}>{t.clicks}</td>
                            <td style={{ padding: "8px", textAlign: "center" }}>
                                {t.lastClick ? new Date(t.lastClick).toLocaleString() : "—"}
                            </td>
                            <td style={{ padding: "8px", textAlign: "center" }}>
                                <button
                                    onClick={() => handleDeleteTask(index)}
                                    style={{ background: "red", color: "white", border: "none", padding: "6px 10px" }}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => navigate(`/task/${index}`, { state: { task: t } })}
                                    style={{ background: "blue", color: "white", border: "none", padding: "6px 10px", marginLeft: "8px" }}
                                >
                                    View
                                </button>
                            </td>

                        </tr>
                    ))}
                    {tasks.length === 0 && (
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center", padding: "10px" }}>
                                No tasks yet
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
};

export default TodoApp;
