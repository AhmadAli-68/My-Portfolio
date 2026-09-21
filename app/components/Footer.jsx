'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
	return (
		<div className='mt-20'>
			<div className='text-center'>
				<Image src={assets.logo_dark} alt='logo' className='w-36 mx-auto mb-2' />

				<a href='maito:dev.ahmadalii@gmail.com' className='w-max flex text-secondary items-center gap-2 mx-auto'>
					<Image src={assets.mail_icon_dark} alt='mail icon' className='w-6' />
					dev.ahmadalii@gmail.com
				</a>
			</div>

			<div className='text-center sm:flex items-center justify-between border-t border-darkBorder mx-[10%] mt-12 py-6'>
				<p>&copy; 2026 Ahmad Ali. All rights reserved.</p>
				<ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
					<li>
						<a
							href="https://github.com/AhmadAli-68"
							target='_blank'
							className='text-white hover:text-secondary transition-all duration-300 ease-in-out'
						>
							Github
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ahmad-ali-dev/"
							target='_blank'
							className='text-white hover:text-secondary transition-all duration-300 ease-in-out'
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/dev.ahmad_/"
							target='_blank'
							className='text-white hover:text-secondary transition-all duration-300 ease-in-out'
						>
							Instagram
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer