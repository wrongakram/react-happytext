import React from "react";
import styles from "./styles.css";

const Happy = props => (
  <>
    <style>{styles.toString()}</style>
    <span className="happy-text-element">{props.value}</span>
  </>
);

export default Happy;
