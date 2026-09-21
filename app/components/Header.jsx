import { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import DotField from './DotField'
import { ArrowRight, DownloadIcon } from 'lucide-react'

const FONT_WEIGHTS = {
	subtitle: { min: 100, max: 400, default: 100 },
	title: { min: 400, max: 900, default: 400 }
}

const renderText = (text, className, baseWeight = 400) => {
	return [...text].map((char, i) => (
		<span
			key={i}
			className={className}
			style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
		>
			{char === ' ' ? '\u00A0' : char}
		</span>
	))
}

const setupTextHover = (container, type) => {
	if (!container) return () => { };

	const letters = container.querySelectorAll('span')
	const { min, max, default: base } = FONT_WEIGHTS[type]

	const animateLetter = (letter, weight, duration = 0.25) => {
		return gsap.to(letter, {
			duration,
			ease: 'power2.out',
			fontVariationSettings: `'wght' ${weight}`
		})
	}

	const handleMouseMove = (e) => {
		const { left } = container.getBoundingClientRect()
		const mouseX = e.clientX - left

		letters.forEach((letter) => {
			const { left: l, width: w } = letter.getBoundingClientRect()
			const distance = Math.abs(mouseX - (l - left + w / 2))
			const intensity = Math.exp(-(distance ** 2) / 20000)

			animateLetter(letter, min + (max - min) * intensity);
		})
	}

	const handleMouseLeave = () =>
		letters.forEach((letter) =>
			animateLetter(letter, base, 0.3))

	container.addEventListener('mousemove', handleMouseMove)
	container.addEventListener('mouseleave', handleMouseLeave)

	return () => {
		container.removeEventListener('mousemove', handleMouseMove)
		container.removeEventListener('mouseleave', handleMouseLeave)
	}
}

const Header = () => {
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);

	useGSAP(() => {
		const titleCleanup = setupTextHover(titleRef.current, 'title')
		const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle')

		return () => {
			titleCleanup()
			subtitleCleanup()
		}
	}, [])

	return (
		<div className='w-full bg-none text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
			<div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}>
				<DotField
					dotRadius={1.5}
					dotSpacing={14}
					bulgeStrength={67}
					glowRadius={0}
					sparkle={true}
					waveAmplitude={0}
					cursorRadius={500}
					cursorForce={0.1}
					bulgeOnly={true}
					gradientFrom="#2A835F"
					gradientTo="#4E9F3D"
				/>
			</div>

			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
				className='border-[0.5px] border-darkBorder rounded-full'
			>
				<Image src={assets.profile_img} alt='profile' className='rounded-full w-40' />
			</motion.div>

			<motion.h3
				initial={{ y: -30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.5 }}

				className='flex items-end text-secondary text-xl md:text-2xl mb-3 select-none'
				ref={subtitleRef}
			>
				{renderText(
					`Hey! I'm Ahmad Ali`,
					`text-3xl font-georama`,
					100
				)}
			</motion.h3>

			<motion.h1
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.7 }}

				className='text-4xl md:text-6xl text-secondary lg:text-7xl font-georama select-none'
				ref={titleRef}
			>
				{renderText(
					`Full Stack Web Developer.`,
					`italic font-georama`
				)}
			</motion.h1>

			<motion.p
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.3 }}

				className='max-w-2xl mb-2 mx-auto font-georama'>
				I am a Full Stack Web Developer from Lahore, Pakistan with 2+ year of experience in full stack development.
			</motion.p>

			<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
				<motion.a
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1 }}

					href="#contact"
					className='px-10 py-3 border border-darkBorder rounded-full bg-darkTheme text-white flex items-center gap-2 hover:text-hoverText transition-all duration-300 ease-in-out'
				>
					Contact me <ArrowRight alt='profile' className='w-5' /></motion.a>

				<motion.a
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.2 }}

					href="/Ahmad-Ali-Resume-[Full-Stack-Web-Developer].docx" download
					className='px-10 py-3 border-[0.5px] border-darkBorder rounded-full flex items-center gap-2 text-secondary bg-darkTheme hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out'
				>
					My Resume <DownloadIcon className='w-5' /></motion.a>
			</div>
		</div >
	)
}

export default Header