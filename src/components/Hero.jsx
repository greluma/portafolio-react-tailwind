import Icons from './utils/Icons';
import { useAppContext } from './Context';

const Hero = () => {
    const { before } = useAppContext()
    return (
        <div
            className={`py-24 lg:py-28 relative bg-cover bg-center bg-fixed dark:bg-[url('/hero-img.jpg')] bg-[url('/hero-img-2.jpg')]`}
            id='home'
        >
            {<style>
                {`#home${before}`}
            </style>}
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
            <div className="relative align-element grid justify-center gap-8">
                <article className="bg-white bg-opacity-30 p-2 sm:p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:bg-opacity-30">
                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                    <h1 className='text-7xl font-bold tracking-wider text-white'>I'm <span className=" text-teal-300">Manuel</span></h1>
                    <p className='mt-4 text-3xl text-slate-100 capitalize tracking-wide text-shadow'>
                        Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-100 capitalize tracking-wide text-shadow'>
                        bringing ideas to life through interactivity
                    </p>
                    <div className="flex gap-x-4 mt-4">
                        <Icons />
                    </div>
                </article>
            </div>
        </div>
    )
}
export default Hero