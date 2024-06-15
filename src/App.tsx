import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
