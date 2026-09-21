import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { assets, infoList, techLogos } from '@/assets/assets'
import LogoLoop from './LogoLoop';

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}

			id='about'
			className='w-full px-[12%] py-10 scroll-mt-20'>
			<motion.h4
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}

				className='text-center text-secondary mb-2 text-lg font-georama'>Introduction</motion.h4>
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}

				className='text-center text-secondary font-semibold text-5xl font-georama'>About Me</motion.h2>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}

				className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}

					className='w-64 border-[0.5px] border-darkBorder sm:w-80 rounded-3xl max-w-none'>
					<Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}

					className='flex-1'>
					<p className='mb-10 max-w-2xl font-georama'>
						I am an experienced Full Stack Developer with over year of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
					</p>

					<motion.ul
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1 }}

						className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
						{infoList.map(({ iconDark, title, description }, index) => (
							<motion.li
								whileHover={{ scale: 1.05 }}

								className='bg-darkHover/30 border-[0.5px] border-darkBorder rounded-xl p-6 cursor-pointer hover:-translate-y-1 transition-all duration-500 ease-in-out hover:shadow-black hover:shadow-secondary'
								key={index}>
								<Image src={iconDark} alt={title} className='w-8 mt-3' />
								<h3 className='my-4 font-semibold text-white'>{title}</h3>
								<p className='text-sm text-secondary'>{description}</p>
							</motion.li>
						))}
					</motion.ul>

					<motion.h4
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.3 }}

						className='my-6 font-georama'>Languages and Tools</motion.h4>

					<div
						className='flex justify-center items-center absolute mx-auto h-auto overflow-hidden max-w-2xl max-md:max-w-3/4 max-sm:max-w-[375px]'
					>
						<LogoLoop
							logos={techLogos}
							speed={80}
							direction="left"
							logoHeight={40}
							gap={40}
							hoverSpeed={0}
							scaleOnHover
							fadeOut
							fadeOutColor="#040d12"
							ariaLabel="Languages and Tools"
						/>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default About