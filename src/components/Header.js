import React from "react";
import { Navbar, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand>All templates</Navbar.Brand>
      <div className="ml-auto mr-0">
        <Button variant="warning">Templates</Button>
      </div>
    </Navbar>
  );
};

export default Header;
