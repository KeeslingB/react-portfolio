import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import mvc from "../assets/images/mvc-armory.png";
function Projects() {
  return (
    <Card style={{ width: "25rem" }} className="bg-dark text-white m-auto">
      <Card.Img src={mvc} alt="Card img-thumbnail" />
      <Card.ImgOverlay>
        <Card.Title>MVC-Armory</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        <Button
          variant="success"
          href="https://github.com/KeeslingB/mvc-armory"
        >
          Source Code
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Projects;
