import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'

const Contact = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", '7ecf83da-a98e-423b-9353-7cb5cb97f542');

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			setResult('');
			toast.success('Message sent Successfully')
			event.target.reset();
		} else {
			console.log('Error', data);
			toast.error(data.message)
			setResult();
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}

			id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 1, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}

				className='text-center text-secondary mb-2 text-lg font-georama'>Connect With Me</motion.h4>

			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}

				className='text-center text-secondary font-semibold text-5xl font-georama'>Get In Touch</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}

				className='text-center max-w-2xl mx-auto mt-5 mb-12 font-georama'>I'd love to hear from you! If you have any questions, comments, or feedback, please fill the form below</motion.p>

			<motion.form
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.9 }}

				onSubmit={onSubmit} className='max-w-2xl mx-auto'>
				<div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

					<motion.input
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.1 }}

						type="text"
						className='flex-1 p-3 outline-none text-secondary border-[0.5px] border-darkBorder rounded-lg bg-darkHover/30'
						placeholder='Enter your name' name='name' required />

					<motion.input
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.2 }}

						type="email"
						className='flex-1 p-3 outline-none text-secondary border-[0.5px] border-darkBorder rounded-lg bg-darkHover/30'
						placeholder='Enter your email' name='email' required />
				</div>

				<motion.textarea
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.3 }}

					rows='6'
					className='w-full p-4 outline-none resize-none text-secondary border-[0.5px] border-darkBorder rounded-lg mb-6 dark:bg-darkHover/30'
					placeholder='Enter your message'
					name='message'
					required></motion.textarea>

				<motion.button
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}

					className='py-3 px-8 flex items-center justify-between gap-2 bg-darkTheme hover:bg-darkHover/30 text-white rounded-full mx-auto duration-500 cursor-pointer border-[0.5px] border-darkBorder hover:text-secondary'
					type='submit'>Submit Now <ArrowRight className='w-5' /></motion.button>

				<p className='mt-4 mx-auto flex items-center justify-center'>{result}</p>
			</motion.form>
		</motion.div>
	)
}

export default Contact