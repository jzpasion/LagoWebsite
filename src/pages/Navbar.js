import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Logo from "../component/Lago_logo.png";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBar.css";

class NavBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar className="NavCointaniner" collapseOnSelect expand="lg">
          <Link to="/">
            <img alt="" src={Logo} width="270" height="120" className="icon" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Link className="links" to="/Home/">
                About Us
              </Link>
            </Nav>
            <Nav>
              <Link className="links" to="/Home/">
                Products
              </Link>
            </Nav>
            <Nav>
              <Link className="links" to="/Home/">
                Projects
              </Link>
            </Nav>
            <Nav>
              <Link className="links" to="/Home/">
                Career
              </Link>
            </Nav>
            <Nav className="lastNav">
              <p className="divider">| </p>{" "}
              <Dropdown alignRight>
                <Dropdown.Toggle className="Dropdown">English</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Netherland</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Chinese</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavBars;
