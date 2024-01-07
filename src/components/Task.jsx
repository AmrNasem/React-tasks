import classes from "./Task.module.css";
import React from "react";

const Task = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default Task;
