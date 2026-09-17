import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { ArrowUpRight, X } from 'lucide-react'

const Navbar = () => {

	const [isScroll, setIsScroll] = useState(false)
	const sideMenuRef = useRef()
	const openMenu = () => {
		sideMenuRef.current.style.transform = "translateX(-16rem)"
	}
	const closeMenu = () => {
		sideMenuRef.current.style.transform = "translateX(16rem)"
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 50) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})
	}, [])

	return (
		<>
			<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between  z-50 ${isScroll ? "bg-darkTheme/50 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-primary/20" : ""}`}>
				<a href="#top">
					<Image src={assets.logo_dark} alt='logo' loading='eager' className='w-32 cursor-pointer mr-14' />
				</a>

				<ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-darkTheme/50  backdrop-blur-lg shadow-sm border-[0.5px] border-darkBorder"} `}>
					<li><a className='font-georama text-primary hover:text-hoverText transition-all duration-300 ease-in-out' href="#top">Home</a></li>
					<li><a className='font-georama text-primary hover:text-hoverText transition-all duration-300 ease-in-out' href="#about">About Me</a></li>
					<li><a className='font-georama text-primary hover:text-hoverText transition-all duration-300 ease-in-out' href="#services">Services</a></li>
					<li><a className='font-georama text-primary hover:text-hoverText transition-all duration-300 ease-in-out' href="#work">My Work</a></li>
					<li><a className='font-georama text-primary hover:text-hoverText transition-all duration-300 ease-in-out' href="#contact">Contact Me</a></li>
				</ul>

				<div className='flex items-center gap-4'>

					<a className='hidden lg:flex items-center gap-3 px-10 py-2.5 bg-darkTheme/50 backdrop-blur-lg border border-darkBorder hover:text-hoverText rounded-full ml-4 transition-all duration-300 ease-in-out' href="#contact">Contact <ArrowUpRight alt='arrow' className='w-5' /></a>

					<button className='block md:hidden ml-3' onClick={openMenu}>
						<Image src={assets.menu_white} alt='menu' className='w-11 cursor-pointer bg-darkTheme border-[0.5px] border-darkBorder p-2 rounded-lg' />
					</button>
				</div>

				{/* - ------- mobile menu ------- - */}

				<ul ref={sideMenuRef} className='flex md:hidden flex-col gap-3 py-20 px-4 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-darkTheme transition duration-500 text-white'>

					<div className='absolute right-6 top-6' onClick={closeMenu}>
						<X className='w-9 h-9 p-2 border-[0.5px] border-darkBorder rounded-lg cursor-pointer hover:text-hoverText' />
					</div>

					<li><a onClick={closeMenu} className='py-1 px-2 rounded-lg inline-block hover:bg-primary/20 w-full transition-all ease-in-out duration-300' href="#top">Home</a></li>
					<li><a onClick={closeMenu} className='py-1 px-2 rounded-lg inline-block hover:bg-primary/20 w-full transition-all ease-in-out duration-300' href="#about">About Me</a></li>
					<li><a onClick={closeMenu} className='py-1 px-2 rounded-lg inline-block hover:bg-primary/20 w-full transition-all ease-in-out duration-300' href="#services">Services</a></li>
					<li><a onClick={closeMenu} className='py-1 px-2 rounded-lg inline-block hover:bg-primary/20 w-full transition-all ease-in-out duration-300' href="#work">My Work</a></li>
					<li><a onClick={closeMenu} className='py-1 px-2 rounded-lg inline-block hover:bg-primary/20 w-full transition-all ease-in-out duration-300' href="#contact">Contact Me</a></li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar