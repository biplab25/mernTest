import styles from "./css/Task.module.scss";

import React, { useState, useEffect } from "react";

function Task(props) {
    function clickHandler() {
        props.deleteTask(props.taskId);
    }

    return (
        <div className={styles.Task}>
            <button
                className={styles.deleteBtn}
                onClick={clickHandler}
                type="button"
            >
                Delete
            </button>
            {props.content}
        </div>
    );
}

export default Task;
