import mvc from "../assets/images/mvc-armory.png";
// import madlibs from "../assets/images/madlibs-react.png";
// import express from "../assets/images/express-backend.png";
// import tracker from "../assets/images/nodejs-tracker.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Projects() {
  return (
    <>
      <div id="projects" className="projects">
        <Card className="m-auto" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mvc} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Projects;
