import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import next_js from './nextjs.png';
import react from './react.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    next_js,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    react
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
    { icon: assets.mobile_icon, title: 'Backend Development', description: 'Backend development focuses on server-side logic, databases, and APIs to ensure seamless communication between the frontend and the server.', link: '' },
    { icon: assets.ui_icon, title: 'Version Control', description: 'Version control is the practice of tracking and managing changes to code. It enables multiple developers to collaborate, maintain history.', link: '' },
    { icon: assets.graphics_icon, title: 'API Integration', description: 'API integration enables applications to connect with external systems, exchange data, and extend functionality efficiently.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelors in Information Technology' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.next_js, assets.mongodb, assets.react, assets.git
];