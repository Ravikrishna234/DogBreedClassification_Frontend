import React from "react";
import classes from "./Content.module.css";

function Content(props) {
  return (
    <div className={`${classes.content} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Content;
