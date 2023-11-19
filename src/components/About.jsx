import aboutImg from '../assets/dev2.svg'
import SectionTitle from './utils/SectionTitle'

const About = () => {
    return (
        <section className='bg-white py-10' id='about'>
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutImg} alt="about img" className='w-full h-72' />
                <article>
                    <SectionTitle text={['about', 'me']}></SectionTitle>
                    {/* cspell:disable */}
                    <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea consequuntur soluta molestiae, dignissimos non repudiandae possimus velit quis perferendis nam doloremque doloribus alias modi fuga qui optio, temporibus iure?</p>
                    {/* cspell:enable */}
                </article>
            </div>
        </section>
    )
}
export default About