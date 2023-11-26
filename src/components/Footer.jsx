import { FaGithubSquare, FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaRegArrowAltCircleUp } from 'react-icons/fa';
import { RiMailFill } from "react-icons/ri";
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='border-t-4 grid justify-center text-center p-7 bg-teal-200 dark:bg-teal-950 dark:text-white'>
            <a href="#home" className='grid justify-center mb-4 duration-300 hover:text-teal-600 dark:hover:text-teal-300'><span className=''><FaRegArrowAltCircleUp className='scale-150' /></span> </a>
            <div className=" grid grid-cols-5" >
                <a href="mailto:greluma2@gmail.com" target="_blank" rel='noreferrer' className='place-self-center'><RiMailFill className='h-8 w-8 hover:text-teal-600 dark:hover:text-teal-300 duration-300 dark:text-white' /></a>
                <a href="https://github.com/greluma" className='place-self-center' target="_blank" rel='noreferrer'><FaGithubSquare className='h-8 w-8 hover:text-teal-600 dark:hover:text-teal-300 duration-300 dark:text-white' /></a>
                <a href="https://www.linkedin.com/in/manuel-rodriguez-prieto-252a50242/" className='place-self-center' target="_blank" rel='noreferrer'><FaLinkedin className='h-8 w-8 hover:text-teal-600 dark:hover:text-teal-300 duration-300 dark:text-white' /></a>
                <a href="https://www.facebook.com/profile.php?id=100074574602402" className='place-self-center' target="_blank" rel='noreferrer'><FaFacebookSquare className='h-8 w-8 hover:text-teal-600 dark:hover:text-teal-300 duration-300 dark:text-white' /></a>
                <a href="https://www.instagram.com/rodriguezprieto__/" className='place-self-center' target="_blank" rel='noreferrer'><FaInstagramSquare className='h-8 w-8 hover:text-teal-600 dark:hover:text-teal-300 duration-300 dark:text-white' /></a>
            </div>
            <h4 className='pt-2 text-teal-800 dark:text-white font-bold text-lg'>Manuel Alejandro Rodríguez Prieto </h4>
            <span className='text-slate-900  dark:text-white font-bold text-lg tracking-widest '>{date}</span>

        </footer>
    )
}
export default Footer