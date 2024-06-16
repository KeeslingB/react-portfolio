import emoji from "../assets/images/emoji.jpg";
function Home() {
  return (
    <div id="home">
      <img className="emoji" src={emoji} alt="emoji" />
      <p>text here about me</p>
      <p>More text here.</p>
    </div>
  );
}
export default Home;
