import user_image from './user-image.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import next_js from './nextjs.png';
import react from './react.png';
import api_icon from './api-icon.png'
import web_icon from './web-icon.png'
import version_control_icon from './version-control-icon.png'
import database_icon from './database-icon.png'

import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiNodedotjs, SiRedux, SiHtml5, SiCss, SiGit, SiGithub, SiPostman, SiVercel, SiNetlify, SiBootstrap, SiPython } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandVite } from 'react-icons/tb';
import { IoLogoFirebase } from 'react-icons/io5';
import { GrMysql } from 'react-icons/gr';

import '../app/globals.css'

export const assets = {
	user_image,
	code_icon_dark,
	edu_icon_dark,
	project_icon_dark,
	vscode,
	firebase,
	figma,
	git,
	mongodb,
	right_arrow_white,
	logo_dark,
	mail_icon,
	mail_icon_dark,
	profile_img,
	hand_icon,
	header_bg_color,
	sun_icon,
	menu_black,
	menu_white,
	next_js,
	right_arrow,
	send_icon,
	right_arrow_bold,
	right_arrow_bold_dark,
	react,
	api_icon,
	database_icon,
	version_control_icon,
	web_icon
};

export const workData = [
	{
		id: 1,
		title: 'Restro',
		description: 'Restro – A premium restaurant website built with React and Tailwind CSS, featuring an elegant UI, smooth animations with Motion, and seamless scrolling powered by Lenis.',
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js',
			'Tailwind CSS',
			'Motion',
			'Lenis Scroll',
			'JavaScript',
		],
		repoLink: 'https://github.com/AhmadAli-68/Restro.git',
		//todo: liveLink here
	},
	{
		id: 2,
		title: 'Estate',
		description: 'Estate – A modern real estate website built with React.js and Tailwind CSS, featuring a clean UI, responsive design, and interactive property browsing. Designed with elegant visuals and intuitive navigation for a seamless property discovery experience.',
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js',
			'JavaScript',
			'Tailwind CSS',
		],
		repoLink: "https://github.com/AhmadAli-68/Full-Stack-Task-Manager",
		liveLink: 'https://estate-website-rust.vercel.app/'
	},
	{
		id: 3,
		title: 'Mac-OS Style Portfolio',
		description: 'Mac OS Portfolio – A macOS-inspired portfolio built with React.js and Tailwind CSS, featuring smooth GSAP animations, interactive desktop elements, and state management with Zustand.',
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js',
			'Tailwind CSS',
			'JavaScript',
			'GSAP',
			'Zustand'
		],
		repoLink: 'https://github.com/AhmadAli-68/MacOS-Style-Portfolio.git',
		//todo: liveLink here
	},
	{
		id: 4,
		title: 'Full Stack Netflix Clone',
		description: 'Netflix Clone – A full-stack streaming platform built with React, CSS, and Firebase Authentication, user authentication, and responsive layouts. Designed with a clean interface to provide a smooth and engaging streaming experience.',
		frontend_backend_Stack: ['Frontend', 'Backend'],
		techStack: [
			'React.js',
			'JavaScript',
			'Firebase Auth',
			'CSS3',
			'TMDB API'
		],
		repoLink: 'https://github.com/AhmadAli-68/Full-Stack-Netflix-Clone.git',
		liveLink: 'https://full-stack-netflix-clone-two.vercel.app/',
	},
	{
		id: 5,
		title: 'Photo-Video Sharing App',
		description: 'Photo & Video Sharing App – A modern media-sharing platform built with Python, Streamlit, and FastAPI, enabling users to upload, share, and manage photos and videos.Designed with a clean interface, fast API integration, and a seamless experience for managing shared media.',
		frontend_backend_Stack: ['Frontend', 'Backend'],
		techStack: [
			'Python',
			'FastAPI',
			'Streamlit',
		],
		repoLink: "https://github.com/AhmadAli-68/FastAPI-PhotoVideoSharingApp.git",
		liveLink: ''
	},
	{
		id: 6,
		title: 'DevEvent Platform',
		description: 'DevEvent – The hub for every developer event you mustn’t miss, built with Next.js and TypeScript. Discover, explore, and stay updated with upcoming conferences, hackathons, workshops, and community events in one place.',
		frontend_backend_Stack: ['Frontend', 'Backend'],
		techStack: [
			'Next.js',
			'Typescript',
			'MongoDB',
			'Tailwind CSS',
			'Shadcn UI'
		],
		repoLink: "https://github.com/AhmadAli-68/DevEvent-Platform.git",
		liveLink: 'https://dev-events-blue-zeta.vercel.app/'
	},
	{
		id: 7,
		title: '3D IPhone Website',
		description: `iPhone 15 Pro – A recreation of Apple's iPhone 15 Pro website, built with React.js and Tailwind CSS, featuring immersive Three.js 3D effects and smooth GSAP animations. Designed to deliver a highly interactive and visually engaging experience inspired by Apple's premium product presentation.`,
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js',
			'Tailwind CSS',
			'JavaScript',
			'Three.js',
			'GSAP'
		],
		repoLink: "https://github.com/AhmadAli-68/3D-Iphone-Website-with-GSAP.git",
		liveLink: 'https://3d-iphone-website-seven.vercel.app/'
	},
	{
		id: 8,
		title: 'MacBook 3D Website',
		description: `Apple-style website built with React, Three.js, GSAP, and TailwindCSS. Create immersive 3D product scenes with realistic lighting, scroll-triggered animations, masking effects and smooth animations.`,
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js',
			'Tailwind CSS',
			'JavaScript',
			'GSAP',
			'Three.js'
		],
		repoLink: "https://github.com/AhmadAli-68/Macbook-GSAP-App.git",
		liveLink: 'https://macbook-gsap-app-indol.vercel.app/'
	},
	{
		id: 9,
		title: 'Full Stack Promptopia',
		description: 'Promptopia – A modern prompt-sharing platform built with Next.js, Tailwind CSS, MongoDB, and NextAuth. Discover, create, and share AI prompts with a clean interface and seamless user authentication.',
		frontend_backend_Stack: ['Frontend', 'Backend'],
		techStack: [
			'Next.js 15',
			'Next Auth',
			'React.js',
			'MongoDB',
			'JavaScript',
			'Tailwind CSS',
		],
		repoLink: "https://github.com/AhmadAli-68/Next.js-Promptopia.git",
		liveLink: ''
	},
	{
		id: 10,
		title: 'Cocktail Website',
		description: 'A modern cocktail website built with React and TailwindCSS, featuring smooth GSAP animations such as SplitText reveals, scroll-triggered effects, parallax scrolling, and a custom carousel.',
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js',
			'JavaScript',
			'Tailwind CSS',
			'React-Responsive',
			'GSAP',
		],
		repoLink: "https://github.com/AhmadAli-68/Cocktails-Website-using-React-and-GSAP.git",
		liveLink: 'https://cocktails-website-nine.vercel.app/'
	},
	{
		id: 11,
		title: 'Full Stack Task Manager',
		description: 'A powerful MERN Stack task management application featuring role-based Admin and Member dashboards, task assignment, progress tracking, and data visualization with interactive charts.',
		frontend_backend_Stack: ['Frontend', 'Backend'],
		techStack: [
			'MongoDB',
			'Express.js',
			'React.js',
			'Node.js',
			'JavaScript',
			'Tailwind CSS',
			'JWT',
		],
		repoLink: "https://github.com/AhmadAli-68/Full-Stack-Task-Manager",
		liveLink: ''
	},
	{
		id: 12,
		title: 'Full Stack Quick Blog App',
		description: 'AI Quick Blog – An AI-powered blogging platform built with the MERN Stack, Gemini API, Tailwind CSS, and Motion. Generate and manage blog content effortlessly with AI assistance, smooth animations, and a clean, responsive interface.',
		frontend_backend_Stack: ['Frontend', 'Backend'],
		techStack: [
			'MongoDB',
			'Express.js',
			'React.js',
			'Node.js',
			'JavaScript',
			'Tailwind CSS',
			'Motion',
			'Gemini AI'
		],
		repoLink: "https://github.com/AhmadAli-68/MERN-Quick-Blog.git",
		liveLink: 'https://quick-blog-eight-zeta.vercel.app/'
	},
	{
		id: 13,
		title: 'Brainwave UI',
		description: 'Brainwave UI – A modern AI-inspired website built with React.js and Tailwind CSS, featuring a sleek interface, responsive layouts, and engaging interactive sections. Designed with a clean, futuristic aesthetic to deliver a smooth and immersive browsing experience.',
		frontend_backend_Stack: ['Frontend'],
		techStack: [
			'React.js 18',
			'JavaScript',
			'Tailwind CSS',
			'UI/UX'
		],
		repoLink: 'https://github.com/AhmadAli-68/React-Brainwave.git',
		liveLink: "https://brainwave-one-theta.vercel.app"
	},
]

export const serviceData = [
	{ icon: assets.web_icon, title: 'Web design', description: 'Web design is the process of planning, conceptualizing, and arranging content online. It combines aesthetics with functionality and better UI.', link: '' },
	{ icon: assets.database_icon, title: 'Backend Development', description: 'Backend development focuses on server-side logic, databases, and APIs to ensure seamless communication between the frontend and the server.', link: '' },
	{ icon: assets.version_control_icon, title: 'Version Control', description: 'Version control is the practice of tracking and managing changes to code. It enables multiple developers to collaborate, maintain history.', link: '' },
	{ icon: assets.api_icon, title: 'API Integration', description: 'API integration enables applications to connect with external systems, exchange data, and extend functionality efficiently.', link: '' },
]

export const infoList = [
	{ iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
	{ iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelors in Information Technology' },
	{ iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
	assets.vscode, assets.next_js, assets.mongodb, assets.react, assets.git
];

export const techLogos = [
	{ node: <SiJavascript className='logoLoop-icons' />, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ node: <SiNextdotjs className='logoLoop-icons' />, title: "Next.js", href: "https://nextjs.org" },
	{ node: <SiMongodb className='logoLoop-icons' />, title: "MongoDB", href: "https://www.mongodb.com/" },
	{ node: <GrMysql className='logoLoop-icons' />, title: "MySQL", href: "https://www.mysql.com/" },
	{ node: <SiExpress className='logoLoop-icons' />, title: "Express", href: "https://expressjs.com/" },
	{ node: <SiNodedotjs className='logoLoop-icons' />, title: "Node.js", href: "https://nodejs.org/en" },
	{ node: <SiReact className='logoLoop-icons' />, title: "React", href: "https://react.dev" },
	{ node: <SiRedux className='logoLoop-icons' />, title: "Redux", href: "https://redux.js.org/" },
	{ node: <SiPython className='logoLoop-icons' />, title: "Python", href: "https://www.python.org/" },
	{ node: <SiTypescript className='logoLoop-icons' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
	{ node: <SiHtml5 className='logoLoop-icons' />, title: "HTML5", href: "https://www.w3schools.com/html/" },
	{ node: <SiCss className='logoLoop-icons' />, title: "CSS", href: "https://www.w3schools.com/css/css_intro.asp" },
	{ node: <SiTailwindcss className='logoLoop-icons' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
	{ node: <SiGit className='logoLoop-icons' />, title: "Git", href: "https://git-scm.com/" },
	{ node: <SiGithub className='logoLoop-icons' />, title: "GitHub", href: "https://github.com/" },
	{ node: <SiPostman className='logoLoop-icons' />, title: "Postman", href: "https://www.postman.com/" },
	{ node: <IoLogoFirebase className='logoLoop-icons' />, title: "Firebase", href: "https://firebase.google.com/" },
	{ node: <VscVscode className='logoLoop-icons' />, title: "VScode", href: "https://code.visualstudio.com/" },
	{ node: <TbBrandVite className='logoLoop-icons' />, title: "Vite", href: "https://tailwindcss.com" },
	{ node: <SiVercel className='logoLoop-icons' />, title: "Vercel", href: "https://vite.dev/" },
	{ node: <SiNetlify className='logoLoop-icons' />, title: "Netlify", href: "https://www.netlify.com/" },
	{ node: <SiBootstrap className='logoLoop-icons' />, title: "Bootstrap", href: "https://getbootstrap.com/" },
];