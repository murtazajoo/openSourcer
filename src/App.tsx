import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Docs from "./pages/Docs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" bg-gray-900 relative selection:bg-purple-100 selection:text-purple-950 backdrop-blur-3xl min-h-screen font-saira text-white bg-body">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/docs" element={<Docs />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
