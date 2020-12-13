import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Backdrop from "./Backdrop";

import classes from "../styles/Sidebar.module.css";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  let sidebarClass = [classes.Sidebar, classes.Close];
  if (showSidebar) {
    sidebarClass = [classes.Sidebar, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop toggleSidebar={toggleSidebar} />
      <div className={sidebarClass.join(" ")}>I'm also here</div>
    </Fragment>
  );
};

export default Sidebar;
