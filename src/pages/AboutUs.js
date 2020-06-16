import React from "react";
import Footer from "./Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Container classname="Footer">
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
          <p>HEhehehe</p>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default AboutUs;
