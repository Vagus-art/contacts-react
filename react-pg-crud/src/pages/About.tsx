import React from "react";
import classes from "./Pages.module.css";

export default function About() {
  return (
    <div className={classes.Page}>
      <h1>About</h1>
      <br />
      <p>
        React-pg-crud was made only as a proof of concept, to compare React and
        Vue in terms of maintainability, scalability and simplicity.Is the first
        of 3 UIs designed to do the same task.
      </p>
    </div>
  );
}
