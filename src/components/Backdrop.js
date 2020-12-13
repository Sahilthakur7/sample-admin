import React from "react";
import classes from "../styles/Backdrop.module.css";

const Backdrop = ({ toggleSidebar }) => {
  return <div className={classes.Backdrop} onClick={toggleSidebar}></div>;
};

export default Backdrop;
