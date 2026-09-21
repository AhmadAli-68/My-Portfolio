import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Work = () => {

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

				className='grid grid-cols-1 md:grid-cols-2 my-5 gap-6'>
				{workData.map(({ id, title, description, frontend_backend_Stack, techStack, repoLink, liveLink }) => (
					<motion.div
						key={id}

						// whileHover={{ scale: 1.05 }}

						className='w-full h-full py-4 px-6 bg-darkHover/30 rounded-lg border-[0.5px] border-darkBorder cursor-pointer hover:-translate-y-1 hover:shadow-black hover:shadow-secondary transition-all duration-500 ease-in-out'
					>
						<h2 className='text-xl font-semibold text-secondary mb-3'>{title}</h2>

						<hr className='text-darkBorder mb-4' />

						<p className='text-white text-sm max-w-2xl mb-4'>{description}</p>

						<ul
							className='flex flex-wrap gap-2 max-w-[26rem] mb-4'
						>
							{Array.isArray(techStack) && techStack.map((tech) => (
								<li
									key={tech}
									className='text-sm text-secondary border-[0.5px] border-secondary/50 px-3 py-1 hover:-translate-y-1 duration-300 ease-in-out select-none cursor-pointer bg-darkHover/80 rounded-lg'
								>{tech}</li>
							))}
						</ul>

						<hr className='text-darkBorder mb-4' />

						<div className='flex items-center justify-between'>
							<div className='flex text-secondary items-center gap-4'>
								{Array.isArray(frontend_backend_Stack) && frontend_backend_Stack.map((stack) => (
									<div
										key={stack}
										className='flex items-center cursor-pointer hover:underline underline-offset-4 decoration-1 gap-1'
									>
										<CheckCircle2 className='text-secondary' />
										<p className=''>{stack}</p>
									</div>
								))}
							</div>

							<div className='flex items-center gap-2'>
								<button className='flex items-center cursor-pointer gap-1 text-sm text-secondary p-2 rounded-lg bg-darkHover/80 border-[0.5px] border-secondary/50'>
									<FaGithub className='w-6 h-6' />
									<Link href={repoLink}>GitHub Repo</Link>
								</button>

								<button className={!liveLink ? 'hidden' : 'flex items-center cursor-pointer gap-1 text-sm text-secondary p-2 rounded-lg bg-darkHover/80 border-[0.5px] border-secondary/50'}>
									{liveLink && (
										<>
											<ExternalLink className='w-5 h-6' />
											<Link href={liveLink}>Live Demo</Link>
										</>
									)}
								</button>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			<motion.a
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.1 }}

				href="/projects"
				className='w-max flex items-center bg-darkTheme justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 transition-all duration-500 ease-in-out text-white border-darkBorder hover:bg-darkHover/30 hover:text-secondary'
				// target="_blank"
				rel="noopener noreferrer">
				See all Projects <ArrowRight className='w-5' />
			</motion.a>
		</motion.div>
	)
}

export default Work