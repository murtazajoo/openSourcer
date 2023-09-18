import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Docs from "./pages/Docs";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile";
import { AppProvider } from "./utils/Context";

function App() {
  const [theme, setTheme] = useState("light");
  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <div
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-900"
            } relative selection:bg-purple-100 selection:text-purple-950 backdrop-blur-3xl min-h-screen font-saira dark:text-white text-black bg-body`}
          >
            <NavBar themeToggler={themeToggler} theme={theme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/profile/:username" element={<Profile />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
