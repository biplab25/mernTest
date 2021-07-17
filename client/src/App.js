import React from "react";
import "./App.scss";
import axios from "axios";
import TaskAdder from "./components/TaskAdder";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = React.useState([]);
    React.useEffect(() => {
        axios
            .get("/api/posts/getAllPosts")
            .then((response) => {
                setTasks(response.data.posts);
            })
            .catch((err) => console.log(err));
    }, []);

    async function addTask(task) {
        await axios({
            method: "POST",
            url: "/api/posts/createPost",
            data: { content: task },
        });
        const {
            data: { posts },
        } = await axios.get("/api/posts/getAllPosts");
        setTasks(posts);
    }

    async function deleteTask(taskId) {
        await axios({
            method: "DELETE",
            url: `/api/posts/deletePost/${taskId}`,
        });
        const {
            data: { posts },
        } = await axios.get("/api/posts/getAllPosts");
        setTasks(posts);
    }

    return (
        <div className="App">
            <TaskAdder addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
