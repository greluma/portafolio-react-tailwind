import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import { useState } from 'react';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <div className="dark:dark:bg-gray-800">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <About></About>
        <Projects></Projects>
      </div>
    </div>
  )
}

