import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import Icons from './utils/Icons';


const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='border-t-4 grid justify-center text-center p-7 bg-teal-200 dark:bg-teal-950 dark:text-white'>
            <a href="#home" className='grid justify-center mb-4 duration-300 hover:text-teal-600 dark:hover:text-teal-300'><span className=''><FaRegArrowAltCircleUp className='scale-150 dark:text-slate-300' /></span> </a>
            <div className=" grid grid-cols-5">
                <Icons />
            </div>
            <h4 className='pt-2 text-teal-800 dark:text-slate-300 font-bold text-lg'>Manuel Alejandro Rodríguez Prieto </h4>
            <span className='text-slate-900  dark:text-teal-300 font-bold text-lg tracking-widest '>{date}</span>

        </footer>
    )
}

export default Footer;