import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { FaLaptopCode } from "react-icons/fa";

export const links = [
  // { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML5 & CSS3',
    icon: <FaHtml5 className='h-16 w-16 text-teal-600' />,
    text: 'Focused on responsive design and optimization for a variety of devices and browsers.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-teal-600' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-teal-600' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Additional Features',
    icon: <FaLaptopCode className='h-16 w-16 text-teal-600' />,
    text: 'Tailwind CSS/ reactStyledComponents / Git-GitHub / Redux Toolkit / reactQuery / reactRouter',
  },
];

// cspell:disable
export const projects = [
  {
    id: nanoid(),
    img: '/backroads.png',
    url: 'https://temporal-backroads-app.netlify.app/',
    github: 'https://github.com/greluma/temp-backroads-app',
    title: 'Backroads Tour Company',
    text: 'My first React project. A tour company website with a focus on responsive design and optimization for a variety of devices and browsers.',
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
    img: '/unsplash.png',
    github: 'https://github.com/greluma/unsplash-images-tuto',
    title: 'This portafolio repository',
    text: 'For this project I used React, Vite.js and Tailwind CSS',
  },
];
