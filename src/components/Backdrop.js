import React, { Fragment } from "react";
import classes from "../styles/Backdrop.module.css";

const Backdrop = ({ toggleSidebar, show }) => {
  return (
    <Fragment>
      {show ? (
        <div className={classes.Backdrop} onClick={toggleSidebar}></div>
      ) : null}
    </Fragment>
  );
};

export default Backdrop;
