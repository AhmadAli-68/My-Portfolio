import { assets, serviceData } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}

			id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}

				className='text-center mb-2 text-secondary text-lg font-georama'>What I offer</motion.h4>

			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}

				className='text-center font-semibold text-secondary text-5xl font-georama'>My Services</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}

				className='text-center max-w-2xl mx-auto mt-5 mb-12 font-georama'>I am a full stack developer from Lahore, Pakistan with 1 year of experience in multiple companies Like NexSkill - Be Productive and P2P Clouds.</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.9 }}

				className='grid grid-cols-auto gap-6 my-10'>
				{serviceData.map(({ icon, title, description, link }, index) => (
					<motion.div
						whileHover={{ scale: 1.05 }}

						key={index}
						className='bg-darkHover/30 border-[0.5px] border-darkBorder rounded-lg px-8 py-12 hover:shadow-black hover:shadow-secondary transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-darkHover'
					>
						<Image src={icon} alt='icon' className='w-10' />
						<h3 className='text-lg my-4 text-white'>{title}</h3>
						<p className='text-sm text-secondary leading-5'>{description}</p>
						<a href={link} className='flex items-center gap-2 text-sm mt-5'>
							Read more <Image src={assets.right_arrow_bold_dark} alt='right-arrow' className='w-4' />
						</a>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	)
}

export default Services
