import styles from "./css/TaskList.module.scss";

import React, { useState, useEffect } from "react";

import Task from "./Task";

function TaskList(props) {
    return (
        <div className={styles.TaskList}>
            {props.tasks.map((t) => (
                <Task
                    content={t.content}
                    deleteTask={props.deleteTask}
                    taskId={t._id}
                    key={t._id}
                />
            ))}
        </div>
    );
}

export default TaskList;
