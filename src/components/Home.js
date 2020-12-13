import React, { Fragment, useState } from "react";
import { Container, Col, Row, Alert } from "react-bootstrap";

import Header from "./Header.js";
import Sidebar from "./Sidebar.js";

const Home = () => {
  const [template, setTemplate] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <Header />
      {showSidebar && (
        <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      )}
      <Container fluid>
        <Row>
          <Col xs={9}>
            {template ? (
              <div>You have a templagte</div>
            ) : (
              <Alert variant="warning" className="text-center">
                No template selected.{" "}
                <Alert.Link onClick={() => toggleSidebar()} className="cursor">
                  {showSidebar ? "Hide templates" : "Select Template"}
                </Alert.Link>
              </Alert>
            )}
          </Col>
          <Col xs={3}>Bot Preview</Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
