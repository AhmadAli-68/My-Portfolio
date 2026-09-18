import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'

const Work = ({ isDarkMode }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}

			id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}

				className='text-center text-secondary mb-2 text-lg font-georama'>My Portfolio</motion.h4>

			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}

				className='text-center text-secondary font-semibold text-5xl font-georama'>My Latest Work</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}

				className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full stack development.</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.9 }}

				className='grid grid-cols-auto my-10 gap-5 text-black'>
				{workData.map((project, index) => (
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}

						key={index}
						className='aspect-4/3 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-xl hover:shadow-lightHover/20'

						style={{ backgroundImage: `url(${project.bgImage})` }}>
						<a href={project.link} target='_blank' className='bg-secondary w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500'>
							<div>
								<h2 className='font-semibold'>{project.title}</h2>
								<p className='text-sm text-black'>{project.description}</p>
							</div>

							<div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-darkHover group-hover:text-secondary transition-all duration-500 ease-in-out'>
								<ExternalLink className='w-5' />
							</div>
						</a>
					</motion.div>
				))}
			</motion.div>

			<motion.a
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.1 }}

				href="https://github.com/AhmadAli-68"
				className='w-max flex items-center bg-darkTheme justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 transition-all duration-500 ease-in-out text-white border-darkBorder hover:bg-darkHover/30 hover:text-secondary'
				target="_blank"
				rel="noopener noreferrer">
				Show more <ArrowRight className='w-5' />
			</motion.a>
		</motion.div>
	)
}

export default Work