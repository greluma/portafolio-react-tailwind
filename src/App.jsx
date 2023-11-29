import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import { useState } from 'react';
import Footer from "./components/Footer";
import { getInitialDarkMode } from "./utils";


export default function App() {
  const initial = getInitialDarkMode()
  const [darkMode, setDarkMode] = useState(initial);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkTheme", newMode);
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <div className="dark:dark:bg-gray-800">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>

  )


}



