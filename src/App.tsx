import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
// import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Home />
        {/* <Projects /> */}
        <About />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
