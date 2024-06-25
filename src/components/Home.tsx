import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/images/emoji.jpg";

function Home() {
  return (
    <>
      <div id="home">
        <Container fluid>
          <Row>
            <Col>
              <img src={img} />
            </Col>

            <Col>
              <div>
                <h1>Full Stack Developer</h1>
                <p>Brendan</p>
                <span>
                  <p>
                    Background in Auto Mechanics Transitioning into Web
                    Development.
                  </p>
                </span>
                <p>Love building responsive Web Apps!</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Text Here</h1>
            </Col>
            <Col>
              <h1>Text Here</h1>
            </Col>
            <Col>
              <h1>Text Here</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Home;
