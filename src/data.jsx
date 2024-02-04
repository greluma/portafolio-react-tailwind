// cspell:disable
import { RiMailFill } from "react-icons/ri";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
// import {FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';


import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

const skillsIconClass = `h-16 w-16 text-teal-600 dark:text-teal-300`;
export const skills = [
  {
    id: nanoid(),
    title: 'HTML5 & CSS3',
    icon: <FaHtml5 className={skillsIconClass} />,
    text: 'Focused on responsive design and optimization for a variety of devices and browsers.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className={skillsIconClass} />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className={skillsIconClass} />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className={skillsIconClass} />,
    text: ' I have been using TypeScript for a while now and I really like it. I think it makes the code more readable and easier to understand.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <TbBrandNextjs className={skillsIconClass} />,
    text: 'I believe that Next.js is ideal for building modern, high-performance web applications. I really enjoy working with it.',
  },
  {
    id: nanoid(),
    title: 'Additional Features',
    icon: <FaLaptopCode className={skillsIconClass} />,
    text: 'Jest - Vitest / Tailwind CSS/ reactStyledComponents / Git-GitHub / Redux Toolkit / reactQuery / reactRouter',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '/focus-todo.png',
    url: 'https://focus-todo-clon.netlify.app/',
    github: 'https://github.com/greluma/focus-todoe',
    title: 'Focus TO-DO',
    text: 'This is my version of the popular app Focus TO-Do, you can find the original app in Google Play or Microsoft Store. For this project I used React, Tailwind, Redux, reactRouter and reactQuery',
  },
  {
    id: nanoid(),
    img: '/comfy.png',
    url: 'https://comfy-store-study.netlify.app/',
    github: 'https://github.com/greluma/comfy-store',
    title: 'Comfy Store',
    text: 'A React project for study purposes. I used React, Tailwind, DaisyUI, Redux, and reactQuery',
  },
  {
    id: nanoid(),
    img: '/github-users.png',
    url: 'https://searchforgithubusers.netlify.app/',
    github: 'https://github.com/greluma/github-users-project',
    title: 'Github Users',
    text: "This is a simple React project created for educational purposes, utilizing the GitHub API. It incorporates Styled Components, React Router DOM v6, Fusion Charts for graphics, and Auth0 for authentication.",
  },
  {
    id: nanoid(),
    img: '/unsplash.png',
    url: 'https://greluma-unsplash-project.netlify.app/',
    github: 'https://github.com/greluma/unsplash-images-tuto',
    title: 'Unsplash API Images',
    text: 'A React project using the Unsplash API to search for images.',
  },
  {
    id: nanoid(),
    img: '/dev2.svg',
    github: 'https://github.com/greluma/portafolio-react-tailwind',
    title: 'This portafolio repository',
    text: 'For this project I used React, Vite.js and Tailwind CSS',
  },
];

const socialIconClass = `h-8 w-8 hover:text-teal-600 dark:hover:text-teal-300 dark:text-slate-300 duration-300`;
export const social = [
  {
    id: nanoid(),
    url: 'mailto:greluma2@gmail.com',
    icon: <RiMailFill className={socialIconClass} />
  },

  {
    id: nanoid(),
    url: "https://github.com/greluma",
    icon: <FaGithubSquare className={socialIconClass} />
  },
  {
    id: nanoid(),
    url: 'https://www.linkedin.com/in/manuel-rodriguez-prieto-252a50242/',
    icon: <FaLinkedin className={socialIconClass} />
  },
  // * Instagram
  /* {
    id: nanoid(),
    url: "https://www.instagram.com/rodriguezprieto__/",
    icon: <FaInstagramSquare className={socialIconClass} />
  }, */
  // * Facebook
  /* {
    id: nanoid(),
    url: "https://www.facebook.com/profile.php?id=100074574602402",
    icon: <FaFacebookSquare className={socialIconClass} />
  }, */
]