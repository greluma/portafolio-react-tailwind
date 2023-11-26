import { links } from "../data"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import PropTypes from 'prop-types';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    // console.log(darkMode);
    return (
        <nav className="bg-teal-200 dark:bg-teal-950">
            <div className="align-element py-4 flex flex-col justify-between  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
                <h2 className="text-3xl font-bold dark:text-white">Web<span className="text-teal-600 dark:text-teal-300">Dev</span></h2>
                <div className="flex gap-x-3">
                    {links.map(link => {
                        const { id, href, text } = link;
                        return <a href={href} key={id} className="capitalize text-lg tracking-wide hover:text-teal-600 dark:hover:text-teal-300 dark:text-white duration-300">{text}</a>
                    })}
                </div>
                <section className="toggle-container absolute right-10 top-10 sm:relative sm:right-0 sm:top-0">
                    <button style={{
                        background: 'transparent',
                        borderColor: 'transparent',
                        scale: '2',
                        cursor: 'pointer'
                    }} onClick={() => {
                        toggleDarkMode();
                    }}>
                        {darkMode ? <BsFillSunFill className="toggle-icon text-white"></BsFillSunFill> : <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>}
                    </button>
                </section>
            </div>
        </nav>
    )
}


PropTypes.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired
}

export default Navbar;