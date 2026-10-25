'use client';

import { assets, FooterLinks } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
	return (
		<div className='mt-20'>
			<div className='text-center'>
				<Image src={assets.logo_dark} alt='logo' className='w-36 mx-auto mb-2' />

				<a href='maito:dev.ahmadalii@gmail.com' className='w-max flex text-secondary items-center gap-2 mx-auto'>
					<Image src={assets.mail_icon_dark} alt='mail icon' className='w-6' />
					dev.ahmadalii@gmail.com
				</a>
			</div>

			<div className='text-center sm:flex items-center select-none justify-between border-t border-darkBorder mx-[8%] mt-12 py-6'>
				<p>&copy; 2026 Ahmad Ali Dev. All Rights Reserved.</p>
				<ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
					{FooterLinks.map(({ id, logo, url, title }) => (
						<li
							key={id}
						>
							<a
								href={url}
								target='_blank'
								className='flex size-10 items-center justify-center rounded-full border-[0.5px] border-darkBorder hover:bg-darkHover/30 transition-all duration-500 hover:border-secondary'
							>
								<Image
									src={logo}
									width={20}
									height={20}
									alt={title}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Footer