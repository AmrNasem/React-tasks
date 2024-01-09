import classes from "./Task.module.css";
import React from "react";

const Task = ({ title, children }) => {
  return (
    <div className="my-2 p-2">
      <h2 className="text-center">{title}</h2>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default Task;
