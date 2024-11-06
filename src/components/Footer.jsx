import Icons from './utils/Icons';


const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='border-t-2 grid justify-center text-center py-4 bg-teal-300 dark:bg-teal-950 dark:text-white'>
            {/* TODO grid-cols-x: cunado se annaden elementos hay que modificar el layout (esta mal)  */}
            <div className=" grid grid-cols-4">
                <Icons />
            </div>
            <h4 className='pt-2 text-teal-800 dark:text-slate-300 font-bold text-lg'>Manuel Alejandro Rodríguez Prieto </h4>
            <span className='text-slate-900  dark:text-teal-300 font-bold text-lg tracking-widest '>{date}</span>

        </footer>
    )
}

export default Footer;