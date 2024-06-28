import mvc from "../assets/images/mvc-armory.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Projects() {
  return (
    <section
      id="projects"
      className="justify-content-center align-content-center text-center h-auto"
    >
      {" "}
      <h2 className="justify-content-center align-content-center text-center">
        Projects
      </h2>
      <Card className="" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mvc} />
        <Card.Body>
          <Card.Title>MVC Armory</Card.Title>
          <Card.Text>
            This project features an application where the user to build an
            optimum character loadout. The user can select a helmet, shield,
            torso armor, weapon, gem, and boots. Each of these items has various
            stats for health, armor, attack, defense, and speed.
          </Card.Text>
          <Card.Text>JavaScript Handlebars SQL</Card.Text>
          <Button variant="primary">
            <FontAwesomeIcon icon={faSquareGithub} />
            Github
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mvc} />
        <Card.Body>
          <Card.Title>MVC Armory</Card.Title>
          <Card.Text>
            This project features an application where the user to build an
            optimum character loadout. The user can select a helmet, shield,
            torso armor, weapon, gem, and boots. Each of these items has various
            stats for health, armor, attack, defense, and speed.
          </Card.Text>
          <Card.Text>JavaScript Handlebars SQL</Card.Text>
          <Button variant="primary">
            <FontAwesomeIcon icon={faSquareGithub} />
            Github
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Projects;
