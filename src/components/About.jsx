import aboutImg from '/dev3.svg'
import SectionTitle from './utils/SectionTitle'
import { IoMdArrowDropright } from "react-icons/io";

const Arrow = () => {
    const style = `inline text-teal-600 dark:text-teal-300`
    return (
        <span><IoMdArrowDropright className={style} /></span>
    )

}

const About = () => {

    return (
        <section className='bg-white dark:bg-gray-800 py-10' id='about'>

            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutImg} alt="about img" className='w-full h-72' />
                <div className='grid gap-10'>
                    <article>
                        <SectionTitle text={['about', 'me']}></SectionTitle>
                        {/* cspell:disable */}
                        <p className='text-slate-600 dark:text-slate-100 mt-8 leading-loose'>Passionate Software Engineer with 2 years of experience, specializing as a FrontEnd developer. I hold a degree in Computer Engineering from the University of Camagüey in Cuba, with a strong background in the development of intuitive and efficient applications. As a dedicated self-learner, I stay consistently updated with the latest technological trends and am always ready to take on new challenges.
                        </p>
                    </article>
                    <article>
                        <SectionTitle text={['main', 'skills']}></SectionTitle>
                        <ul className='text-slate-600 dark:text-slate-100 mt-8 leading-loose grid gap-1'>
                            <li> <Arrow /> Responsive design and optimization for a variety of devices and browsers.</li>
                            <li> <Arrow /> Implementation of good development practices, including unit testing and version control.</li>
                            <li> <Arrow /> Building user-centric applications, using methodologies such as SOLID and Clean Code.</li>
                            <li> <Arrow />  Effective collaboration with multidisciplinary teams, including designers and backend developers.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default About