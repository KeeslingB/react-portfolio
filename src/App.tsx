import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<About />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="blog" element={<Blog />} /> */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
