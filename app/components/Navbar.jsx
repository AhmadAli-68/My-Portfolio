'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets, navLinks } from '@/assets/assets'
import { ArrowUpRight, ArrowRight, X } from 'lucide-react'
import Link from 'next/link';

const Navbar = () => {

	const [isScroll, setIsScroll] = useState(false)
	const [Open, setOpen] = useState(false);

	// const sideMenuRef = useRef()
	// const openMenu = () => {
	// 	sideMenuRef.current.style.transform = "translateX(-16rem)"
	// }
	// const closeMenu = () => {
	// 	sideMenuRef.current.style.transform = "translateX(16rem)"
	// }

	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(window.scrollY > 32)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-darkTheme/50 backdrop-blur-lg shadow-md shadow-primary/20" : ""}`}>
				<Link href="/">
					<Image src={assets.logo_dark} alt='logo' loading='eager' className='w-32 cursor-pointer mr-14' />
				</Link>

				<ul className={`hidden md:flex items-center gap-6 lg:gap-2 rounded-full px-2 py-3 ${isScroll ? "" : "bg-darkTheme/50 backdrop-blur-lg shadow-sm border-[0.5px] border-darkBorder"} `}>

					{navLinks.map(({ id, link, title }) => (
						<li key={id}>
							<Link
								href={link}
								className='font-georama text-white px-4 py-3 hover:text-secondary hover:bg-darkHover/30 hover:rounded-full transition-all duration-300 ease-in-out'
							>
								{title}
							</Link>
						</li>
					))}
				</ul>

				<div className='flex items-center gap-4'>

					<a className='hidden lg:flex items-center gap-3 px-10 py-2.5 bg-darkTheme/50 backdrop-blur-lg border border-darkBorder hover:text-hoverText hover:bg-darkHover/30 rounded-full ml-4 transition-all duration-300 ease-in-out' href="#contact">Contact <ArrowUpRight alt='arrow' className='w-5' /></a>

					<button className='block md:hidden ml-3' onClick={() => setOpen(true)}>
						<Image src={assets.menu_white} alt='menu' className='w-11 cursor-pointer bg-darkTheme border-[0.5px] border-darkBorder p-2 rounded-lg' />
					</button>
				</div>

				{/* - ------- mobile menu ------- - */}
				<ul
					className={`md:hidden fixed right-0 top-0 bottom-0 bg-darkTheme z-50 flex w-82 max-w-[85vw] h-screen flex-col py-20 px-4 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${Open ? "translate-x-0" : "translate-x-full"
						}`}
					aria-hidden={!Open}
				>

					<div className='absolute right-6 top-6' onClick={() => setOpen(false)}>
						<X className='w-9 h-9 p-2 border-[0.5px] border-darkBorder rounded-lg cursor-pointer hover:text-hoverText hover:bg-darkHover/30 transition-colors duration-300 ease-in-out' />
					</div>

					{navLinks.map((menu, index) => (
						<li key={menu.id}>
							<Link
								href={menu.link}
								style={{ transitionDelay: Open ? `${120 + index * 60}ms` : "0ms" }}
								className={`group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-darkHover/30 hover:text-secondary hover:translate-x-0.5 w-full transition-all ease-in-out duration-300 ${Open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
									}`}
								onClick={() => setOpen(false)}
							>
								{menu.title}
								<ArrowRight
									style={{ transitionDelay: Open ? `${120 + index * 60}ms` : "0ms" }}
									className="w-5 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
								/>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}

export default Navbar