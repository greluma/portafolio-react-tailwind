import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


const ProjectCard = ({ url, img, github, title, text }) => {
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 transform hover:scale-110">
            <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64" />
            <div className="capitalize p-8 text-center">
                <h2 className="text-xl tracking-wide font-medium text-teal-600">{title}</h2>
                <p className="mt-4 text-slate-700 leading-loose" >{text}</p>
                <div className="mt-4 flex gap-x-4 justify-center">
                    <a href={url} target="_blank" rel="noreferrer">
                        <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-teal-600 duration-300"></TbWorldWww>
                    </a>
                    <a href={github} target="_blank" rel="noreferrer">
                        <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-teal-600 duration-300"></FaGithubSquare>
                    </a>
                </div>
            </div>
        </article>
    )
}
export default ProjectCard