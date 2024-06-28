import selfie from "../assets/images/selfie.png";
function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid m-auto flex">
        <div className="container text-center align-content-center h-100 w-100">
          <img src={selfie} className="w-25 flex" />
          <h1 className="display-1">Full-Stack Web-Developer</h1>
          <p className="lead display-3">Welcome to my Portfolio!</p>
        </div>
      </div>
    </>
  );
}
export default Home;
