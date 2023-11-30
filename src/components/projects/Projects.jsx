import ProjectCard from "./ProjectCard"
import { projects } from "../../data"
import SectionTitle from '../utils/SectionTitle'
import { useAppContext } from "../Context"

const Projects = () => {
    const { before } = useAppContext();

    return (
        <section className="py-4 relative align-element dark:bg-gray-800" id="projects">
            {<style>
                {`#projects${before}`}
            </style>}
            <SectionTitle text={['web', 'creations']}></SectionTitle>
            <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project}></ProjectCard>
                })}
            </div>
        </section>
    )
}
export default Projects