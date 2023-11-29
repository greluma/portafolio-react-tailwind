import aboutImg from '/dev3.svg'
import SectionTitle from './utils/SectionTitle'

const About = () => {

    return (
        <section className='bg-white dark:bg-gray-800 py-10' id='about'>

            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutImg} alt="about img" className='w-full h-72' />
                <article>
                    <SectionTitle text={['about', 'me']}></SectionTitle>
                    {/* cspell:disable */}
                    <p className='text-slate-600 dark:text-slate-100 mt-8 leading-loose'>Passionate Software Engineer with 2 years of experience, specializing as a FrontEnd developer. I hold a degree in Computer Engineering from the University of Camagüey in Cuba, with a strong background in the development of intuitive and efficient applications. As a dedicated self-learner, I stay consistently updated with the latest technological trends and am always ready to take on new challenges.
                    </p>
                    {/* cspell:enable */}
                </article>
            </div>
        </section>
    )
}
export default About