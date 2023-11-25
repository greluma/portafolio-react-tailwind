// cspell:ignore Linkedin
import { FaGithubSquare, FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { RiMailFill } from "react-icons/ri";
import heroImg from '../assets/dev1.svg'

const Hero = () => {
    return (
        <div className='bg-teal-200 py-24 h-screen' id='home'>
            <div className=" align-element align-e grid md:grid-cols-2 items-center gap-8">
                <article>
                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                    <h1 className='text-7xl font-bold tracking-wider'>I'm <span className="text-teal-600">Manuel</span></h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                        turning ideas into interactive reality
                    </p>
                    <div className="flex gap-x-4 mt-4">
                        <a href="https://github.com/greluma" target="_blank" rel='noreferrer'><FaGithubSquare className='h-8 w-8 hover:text-teal-600 duration-300' /></a>
                        <a href="https://www.linkedin.com/in/manuel-rodriguez-prieto-252a50242/" target="_blank" rel='noreferrer'><FaLinkedin className='h-8 w-8 hover:text-teal-600 duration-300' /></a>
                        <a href="https://www.facebook.com/profile.php?id=100074574602402" target="_blank" rel='noreferrer'><FaFacebookSquare className='h-8 w-8 hover:text-teal-600 duration-300' /></a>
                        <a href="https://www.instagram.com/rodriguezprieto__/" target="_blank" rel='noreferrer'><FaInstagramSquare className='h-8 w-8 hover:text-teal-600 duration-300' /></a>
                        <a href="mailto:greluma2@gmail.com" target="_blank" rel='noreferrer'><RiMailFill className='h-8 w-8 hover:text-teal-600 duration-300' /></a>
                    </div>
                </article>
                <article >
                    <img src={heroImg} alt="developer" className='h-52' />
                </article>
            </div>
        </div>
    )
}
export default Hero