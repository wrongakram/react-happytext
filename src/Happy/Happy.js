import React from "react";
import styles from "./styles.css";

const Happy = props => (
  <>
    <style>{`${styles}`}</style>
    <span className="happy-text-element">{props.value}</span>
  </>
);

export default Happy;
