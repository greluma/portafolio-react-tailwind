import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
    </>
  )
}