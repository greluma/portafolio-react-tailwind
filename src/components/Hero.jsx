import heroImg from '/dev1.svg'
import Icons from './utils/Icons';
import { useAppContext } from './Context';

const Hero = () => {
    const { before } = useAppContext()
    return (
        <div className='bg-teal-200 dark:bg-teal-950 py-24 lg:py-28 relative' id='home' >
            {<style>
                {`#home${before}`}
            </style>}
            <div className=" align-element align-e grid md:grid-cols-2 items-center gap-8">
                <article>
                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                    <h1 className='text-7xl font-bold tracking-wider dark:text-white'>I'm <span className="text-teal-600 dark:text-teal-300">Manuel</span></h1>
                    <p className='mt-4 text-3xl text-slate-700 dark:text-slate-100 capitalize tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className=' mt-2 text-lg text-slate-700 dark:text-slate-100 capitalize tracking-wide'>
                        bringing ideas to life through interactivity
                    </p>
                    <div className="flex gap-x-4 mt-4">
                        <Icons />
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