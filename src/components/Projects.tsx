import mvc from "../assets/images/mvc-armory.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (
    <div id="projects">
      <Card className="project-card" style={{ width: "18rem" }}>
        <img src={mvc} />
        <Card.Body>
          <Card.Title>MVC Armory</Card.Title>
          <Card.Text>
            This project features an application where the user to build an
            optimum character loadout. The user can select a helmet, shield,
            torso armor, weapon, gem, and boots. Each of these items has various
            stats for health, armor, attack, defense, and speed.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Handlebars</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>SQL</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <FontAwesomeIcon icon={faSquareGithub} />
          <Card.Link href="#">Github Repo</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;
