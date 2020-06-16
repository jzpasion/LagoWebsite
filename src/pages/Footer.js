import React from "react";
import "../css/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Container classname="Footer">
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p className="FooterText">
                {" "}
                Visit nhentai.net/Hentai.Cafe/Tsumino.com
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Footer;
