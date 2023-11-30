import { links } from "../data"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import React from 'react';
import PropTypes from 'prop-types';


const Navbar = React.forwardRef(({ darkMode, toggleDarkMode }, ref) => {
    return (
        <nav ref={ref} className="bg-teal-300 h-fit dark:bg-teal-950 dark:border-b-2 fixed top-0 z-10 w-full shadow-custom-dark dark:shadow-none">
            <div className="align-element flex flex-col justify-between  sm:flex-row sm:gap-x-16 sm:items-center py-2">
                <h2 className="text-3xl font-bold dark:text-white">Web<span className="text-teal-600 dark:text-teal-300">Dev</span></h2>
                <div className="flex gap-x-2 sm:gap-x-4 lg:gap-8">
                    {links.map(link => {
                        const { id, href, text } = link;
                        return <a href={href} key={id} className="capitalize text-lg tracking-wide hover:text-teal-600 dark:hover:text-teal-300 dark:text-white duration-300">{text}</a>
                    })}
                </div>
                <section className="toggle-container absolute right-4 top-4 sm:relative sm:right-0 sm:top-0">
                    <div className="flex gap-x-4 sm:gap-x-8 lg:gap-x-12">
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
                    </div>
                </section>
            </div>
        </nav>
    );
});


Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};


Navbar.displayName = "Navbar";
export default Navbar;