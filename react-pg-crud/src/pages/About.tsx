import React from "react";
import classes from "./Pages.module.css";

const { page } = classes;

export default function About() {
  return (
    <div className={page}>
      <h1>About</h1>
      <br />
      <p>
        React-pg-crud was made only as a proof of concept, to compare React and
        Vue in terms of maintainability, scalability and simplicity.
      </p>
      <p>With this project I've learned how to use Typescript with React.</p>
    </div>
  );
}
