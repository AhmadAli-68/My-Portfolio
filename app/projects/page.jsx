'use client';

import { workData } from '@/assets/assets'
import React from 'react'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'motion/react'
import { AiFillThunderbolt } from 'react-icons/ai';

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      id='work' className='w-full px-[10%] mt-30 py-10 scroll-mt-20'>

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}

        className='text-center text-secondary mb-2 text-lg font-georama'>My Portfolio</motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}

        className='text-center text-secondary font-semibold text-5xl font-georama'>All Projects</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}

        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Explore my work — from interactive interfaces to full-stack applications built with modern technologies.</motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}

        className='grid grid-cols-1 md:grid-cols-2 my-5 gap-6'>
        {workData.map(({ id, title, description, frontend_backend_Stack, techStack, repoLink, liveLink }) => (
          <motion.div
            key={id}

            // whileHover={{ scale: 1.05 }}

            className='w-full h-fit py-4 px-6 bg-darkHover/30 rounded-lg border-[0.5px] border-darkBorder cursor-pointer hover:-translate-y-1 hover:shadow-black hover:shadow-secondary transition-all duration-500 ease-in-out'
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
                  className='text-sm text-secondary border-[0.5px] border-secondary/50 px-3 py-1 hover:-translate-y-1 duration-300 ease-in-out select-none cursor-pointer bg-darkHover/80 rounded-md'
                >{tech}</li>
              ))}
            </ul>

            <hr className='text-darkBorder mb-4' />

            <div className='flex items-center justify-between overflow-hidden'>
              <div className='flex flex-col lg:flex-row justify-center text-secondary items-center gap-4 md:gap-2'>
                {Array.isArray(frontend_backend_Stack) && frontend_backend_Stack.map((stack) => (
                  <div
                    key={stack}
                    className='flex flex-row items-center cursor-pointer hover:underline underline-offset-4 decoration-1 gap-1'
                  >
                    <CheckCircle2 className='text-secondary w-4' />
                    <p className='text-sm'>{stack}</p>
                  </div>
                ))}
              </div>

              <div className='flex flex-col items-start lg:flex-row lg:items-center gap-2'>
                <button className='flex items-center cursor-pointer gap-[5px] lg:text-sm text-xs  text-secondary p-1 rounded-md bg-darkHover/80 border-[0.5px] border-secondary/50'>
                  <FaGithub className='w-4 h-4' />
                  <Link
                    href={repoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub Repo
                  </Link>
                </button>

                <button className={!liveLink ? 'hidden' : 'flex items-center cursor-pointer gap-[5px] lg:text-sm text-xs text-secondary p-1 rounded-md bg-darkHover/80 border-[0.5px] border-secondary/50'}>
                  {liveLink && (
                    <>
                      <ExternalLink className='w-4 h-4' />
                      <Link
                        href={liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Live Demo
                      </Link>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}

        className='w-max flex items-center bg-darkHover/30 justify-center gap-1 border-[0.5px] rounded-lg py-3 px-10 mx-auto my-20 transition-all duration-500 ease-in-out text-white cursor-pointer select-none border-darkBorder hover:bg-darkHover/30 hover:text-secondary'
      >
        More Projects Coming Soon <AiFillThunderbolt className='w-6 h-6' />
      </motion.p>
    </motion.div>
  )
}

export default page;