import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  // { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-teal-600' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
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
];

// cspell:disable
export const projects = [
  {
    id: nanoid(),
    img: '/backroads.png',
    url: 'https://temporal-backroads-app.netlify.app/',
    github: 'https://github.com/greluma/temp-backroads-app',
    title: 'Backroads Tour Company',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: nanoid(),
    img: '/drinks.png',
    url: 'https://greluma-drinks-master.netlify.app/',
    github: 'https://github.com/greluma/drinks-master',
    title: 'Wiki Cocktails',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: nanoid(),
    img: '/unsplash.png',
    url: 'https://greluma-unsplash-project.netlify.app/',
    github: 'https://github.com/greluma/unsplash-images-tuto',
    title: 'Unsplash API Images',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];
