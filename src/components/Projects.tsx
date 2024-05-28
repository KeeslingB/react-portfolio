import Mvc from "../assets/images/mvc-armory.png";

export default function Projects() {
  return (
    <div className="card w-25">
      <img src={Mvc} className="card-img-top max-width: .25rem" alt="..." />
      <div className="card-body">
        <h5 className="card-title">MvC Armory (OOP)</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Github Here
        </a>
      </div>
    </div>
  );
}
