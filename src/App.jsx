import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import { useRef, useState } from 'react';
import Footer from "./components/Footer";
import { getInitialDarkMode } from "./utils";
import { useEffect } from 'react';
import { AppContext } from "./components/Context";

export default function App() {
  const initial = getInitialDarkMode()
  const [darkMode, setDarkMode] = useState(initial);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkTheme", newMode);
  }

  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  }, [])

  const before = (`::before {content: ''; display: block; height: ${navbarHeight}px}`)

  return (
    <AppContext.Provider value={{ before }} >
      <div className={`${darkMode ? 'dark' : ''} `}>
        <div className="dark:dark:bg-gray-800">
          <Navbar ref={navbarRef} darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
          <Hero></Hero>
          <Skills></Skills>
          <About></About>
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>
    </AppContext.Provider>

  )


}



