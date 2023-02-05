import React from "react";
import classes from "./Template.module.css";

const Template = ({ children, todos }) => {
  return (
    <div className={classes.Template}>
      <div className={classes.title}>민정이가 <br /> 오늘 할 일 {todos.length}개 </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Template;