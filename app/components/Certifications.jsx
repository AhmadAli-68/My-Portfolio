import { certificateData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Certifications = () => {
  return (
    <div
      id='certifications'
      className='w-full px-[8%] py-10 scroll-mt-20'
    >
      <h4 className='text-lg text-center text-secondary font-georama mb-2'>My Achievements</h4>

      <h2 className='font-georama text-center text-5xl text-secondary font-semibold'>Certifications</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Explore my certifications and achievements that reflect my continuous learning, technical skills, and commitment to growing as a full-stack developer.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
        {certificateData.map(({ id, image, link, title, description }) => (
          <div
            key={id}
            className='w-full h-full max-md:w-fit mx-auto p-4 bg-darkHover/30 border border-darkBorder rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-black hover:shadow-secondary transition-all duration-300'
          >
            <div className='flex flex-col xl:flex-row overflow-hidden justify-center items-center gap-3'>
              <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
              >
                <Image
                  src={image}
                  alt={title}
                  loading='eager'
                  className='size-80 bg-center rounded-md border border-darkBorder object-cover bg-no-repeat overflow-hidden'
                />
              </a>

              <div>
                <h2 className='text-lg max-sm:text-center max-md:text-center max-lg:text-center text-secondary font-semibold mb-2'>
                  {title}
                </h2>

                <hr className='text-darkBorder mb-2' />

                <p className='max-sm:text-center max-md:text-center max-lg:text-center max-w-96'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications