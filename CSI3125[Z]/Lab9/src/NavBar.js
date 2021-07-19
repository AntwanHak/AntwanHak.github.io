import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

function NavBar(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
          <div>
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
              <Card.Link href="/">
                <img
                  alt="QuickPrep logo"
                  src="/logo.png"
                  width="70"
                  height="60"
                  className="d-inline-block align-top"
                />{" "}
              </Card.Link>
              <Card.Link href="/">
                <Navbar.Brand>QuickPrep</Navbar.Brand>
              </Card.Link>
            </Navbar>
          </div>
        </div>
        <div className="language-select">
          <select
            className="custom-select"
            value={props.language}
            onChange={(e) => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Français">Français</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
