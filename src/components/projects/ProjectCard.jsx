import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


const ProjectCard = ({ url, img, github, title, text }) => {
    return (
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl duration-300 transform hover:scale-110 border-2 border-white">
            <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64" />
            <div className="capitalize p-8 text-center">
                <h2 className="text-xl tracking-wide font-medium text-teal-600 dark:text-teal-300">{title}</h2>
                <p className="mt-4 text-slate-700 dark:text-white  leading-loose" >{text}</p>
                <div className="mt-4 flex gap-x-4 justify-center">
                    {url && <a href={url} target="_blank" rel="noreferrer">
                        <TbWorldWww className="h-8 w-8 text-slate-500 dark:text-white  hover:text-teal-600 dark:hover:text-teal-300  duration-300"></TbWorldWww>
                    </a>}
                    <a href={github} target="_blank" rel="noreferrer">
                        <FaGithubSquare className="h-8 w-8 text-slate-500 dark:text-white  hover:text-teal-600 dark:hover:text-teal-300 duration-300"></FaGithubSquare>
                    </a>
                </div>
            </div>
        </article>
    )
}
export default ProjectCard