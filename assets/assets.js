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
		title: 'Task Manager',
		description: 'MERN Stack',
		bgImage: '/work-1.png',
		link: "https://github.com/AhmadAli-68/Full-Stack-Task-Manager"
	},
	{
		title: 'Brainwave UI',
		description: 'Frontend',
		bgImage: '/work-2.png',
		link: "https://brainwave-one-theta.vercel.app"
	},
	{
		title: 'Netflix Clone',
		description: 'HTML, CSS, Js',
		bgImage: '/work-3.png',
		link: "https://net-flix-clone-org.netlify.app/"
	},
	{
		title: 'AI Chatbot',
		description: 'AI Chatting',
		bgImage: '/work-4.png',
		link: "https://ahmad-chatbot.netlify.app/"
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
	{ node: <SiJavascript />, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
	{ node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
	{ node: <GrMysql />, title: "MySQL", href: "https://www.mysql.com/" },
	{ node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
	{ node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/en" },
	{ node: <SiReact />, title: "React", href: "https://react.dev" },
	{ node: <SiRedux />, title: "Redux", href: "https://redux.js.org/" },
	{ node: <SiPython />, title: "Python", href: "https://www.python.org/" },
	{ node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
	{ node: <SiHtml5 />, title: "HTML5", href: "https://www.w3schools.com/html/" },
	{ node: <SiCss />, title: "CSS", href: "https://www.w3schools.com/css/css_intro.asp" },
	{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
	{ node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
	{ node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
	{ node: <SiPostman />, title: "Postman", href: "https://www.postman.com/" },
	{ node: <IoLogoFirebase />, title: "Firebase", href: "https://firebase.google.com/" },
	{ node: <VscVscode />, title: "VScode", href: "https://code.visualstudio.com/" },
	{ node: <TbBrandVite />, title: "Vite", href: "https://tailwindcss.com" },
	{ node: <SiVercel />, title: "Vercel", href: "https://vite.dev/" },
	{ node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com/" },
	{ node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
];