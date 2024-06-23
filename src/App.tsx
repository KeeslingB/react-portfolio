import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      {/* <div id="app"> */}
      <Home />
      <Projects />
      <Contact />
      <Footer />
      {/* </div> */}
    </>
  );
}
export default App;
