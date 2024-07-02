import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <main>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;
