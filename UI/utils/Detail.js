import React from "react";
import classes from "./Detail.module.css";

const Detail = ({ label, value }) => {
  console.log("value", value);
  return (
    <div>
      <label>{label}</label>
      <span className={classes.value_text}>{value}</span>
    </div>
  );
};

export default Detail;
