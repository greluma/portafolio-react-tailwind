import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
    icon: <FaHtml5 className='h-16 w-16 text-teal-600 dark:text-teal-300' />,
    text: 'Focused on responsive design and optimization for a variety of devices and browsers.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-teal-600 dark:text-teal-300' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-teal-600 dark:text-teal-300' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-teal-600 dark:text-teal-300' />,
    text: ' I have been using TypeScript for a while now and I really like it. I think it makes the code more readable and easier to understand.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <TbBrandNextjs className='h-16 w-16 text-teal-600 dark:text-teal-300' />,
    text: 'I believe that Next.js is ideal for building modern, high-performance web applications. I really enjoy working with it.',
  },
  {
    id: nanoid(),
    title: 'Additional Features',
    icon: <FaLaptopCode className='h-16 w-16 text-teal-600 dark:text-teal-300' />,
    text: 'Tailwind CSS/ reactStyledComponents / Git-GitHub / Redux Toolkit / reactQuery / reactRouter',
  },
];

// cspell:disable
export const projects = [
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
    img: '/portaf.svg',
    github: 'https://github.com/greluma/unsplash-images-tuto',
    title: 'This portafolio repository',
    text: 'For this project I used React, Vite.js and Tailwind CSS',
  },
];
