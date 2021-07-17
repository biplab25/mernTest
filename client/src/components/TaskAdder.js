import styles from "./css/TaskAdder.module.scss";

import React, { useState, useEffect } from "react";

function TaskAdder(props) {
    const inputRef = React.useRef();
    function clickHandler() {
        if (inputRef.current.value.trim() === "") return;
        props.addTask(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <div className={styles.TaskAdder}>
            <input
                onKeyPress={(e) => {
                    if (e.key === "Enter") clickHandler();
                }}
                ref={inputRef}
                placeholder="Enter a task"
            />
            <button onClick={clickHandler} type="button">
                Add Task
            </button>
        </div>
    );
}

export default TaskAdder;
