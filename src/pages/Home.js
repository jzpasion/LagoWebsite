import React from "react";
import "../css/Home.css";
import NavBars from "./Navbar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Arrow from "../component/Arrow.png";
import Icon1 from "../component/Icon1.png";
import Icon2 from "../component/Icon2.png";
import Icon3 from "../component/Icon3.png";
import test2 from "../component/1.jpg";
import Test from "../component/test.png";
import Fade from "react-reveal/Fade";

import {
  Jumbotron,
  Container,
  Row,
  Col,
  ResponsiveEmbed,
  Button,
  Card,
} from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="Header">
              <NavBars />

              <Fade bottom>
                <div className="Greeting-Group">
                  <p className="Greetings">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </p>

                  <p className="Second-Greetings">
                    Pellentesque porttitor felis leo, non blandit diam faucibus
                    ac.
                    <br /> Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </Fade>
              <div class="downArrow bounce">
                <img width="40" height="40" alt="" src={Arrow} />
              </div>
            </div>
          </Col>
        </Row>

        <Container className="Introduction" fluid>
          <Container>
            <Row>
              <Col md="12">
                <Fade bottom>
                  <p className="IntroText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla scelerisque sem efficitur justo hendrerit.
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row className="Icons">
              <Col md={4}>
                <img width="100" height="100" alt="" src={Icon1} />
                <p className="Title">Lorem Ipsum</p>
                <p className="Description">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                  <br /> Duis porttitor urna at erat tempus.{" "}
                </p>
              </Col>
              <Col md={4}>
                <img width="100" height="100" alt="" src={Icon2} />
                <p className="Title">Lorem Ipsum</p>
                <p className="Description">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                  <br /> Duis porttitor urna at erat tempus.{" "}
                </p>
              </Col>
              <Col md={4}>
                <img width="100" height="100" alt="" src={Icon3} />
                <p className="Title">Lorem Ipsum</p>
                <p className="Description">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                  <br /> Duis porttitor urna at erat tempus.{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="Summary" fluid>
          <Container>
            <Row>
              <Col md={6}>
                <Container>
                  <Fade left>
                    <Row className="SummaryTitle">
                      <p>Aenean eleifend facilisis finibus.</p>
                    </Row>
                    <Row>
                      <p className="SummaryDescription">
                        Duis vestibulum ipsum suscipit erat iaculis, at
                        scelerisque leo tempor. Pellentesque tincidunt quam ut
                        velit efficitur dapibus. Aenean ut magna in quam viverra
                        gravida.
                      </p>
                    </Row>
                    <Row>
                      <style type="text/css">
                        {`
                      .btn-flat {
                        background-color: transparent;
                        color: #131a3f;
                        font-family: "MerriWeather-Bold";
                        border-radius: 17px !important;
                        border: 1px solid #131a3f;
                        
                        
                      }

                      .btn-xxl {
                        padding: .65rem 1.5rem;
                        font-size: 1.3rem;
                        margin: 1rem;
                      }
                      `}
                      </style>

                      <Button variant="flat" className="SummaryBtn" size="xxl">
                        About Projects
                      </Button>
                      <Button variant="flat" className="SummaryBtn" size="xxl">
                        About Prouducts
                      </Button>
                    </Row>
                  </Fade>
                </Container>
              </Col>
              <Col md={6}>
                <Fade right>
                  <div
                    className="SummaryImage"
                    style={{ width: "auto", height: "auto" }}
                  >
                    {" "}
                    <ResponsiveEmbed aspectRatio="16by9">
                      <embed type="image/svg+xml" src={Test} />
                    </ResponsiveEmbed>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="hehe" fluid>
          <Container className="News">
            <Row className="NewsIntro">
              <p>What's New?</p>
            </Row>
            <Row style={{ marginTop: "2rem" }}>
              <Col md={6}>
                <Card className="NewsCards">
                  <Card.Img variant="top" src={test2} />
                  <Card.Body>
                    <Card.Title>
                      <p className="NewsTitle">Lorem Ipsum</p>
                    </Card.Title>
                    <Card.Text className="NewsDescription">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="NewsCards">
                  <Card.Img variant="top" src={test2} />
                  <Card.Body>
                    <Card.Title>
                      <p className="NewsTitle">Lorem Ipsum</p>
                    </Card.Title>
                    <Card.Text className="NewsDescription">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Home;
