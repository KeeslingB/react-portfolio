import city from "../assets/images/minneapolis.jpg";

function Home() {
  return (
    <div className="container-fluid">
      <img src={city} className="container-fluid" alt="city-background" />
      <h1>Text Here</h1>
    </div>
  );
}

export default Home;
