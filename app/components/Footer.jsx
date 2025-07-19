import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2' />

                <a href='maito:dev.ahmadalii@gmail.com' className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail icon' className='w-6' />
                    dev.ahmadalii@gmail.com
                </a>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy; 2025 Ahmad Ali. All rights reserved.</p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                    <li><a href="https://github.com/AhmadAli-68" target='_blank'>Github</a></li>
                    <li><a href="https://www.linkedin.com/in/ahmad-ali-dev/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/dev.ahmad_/" target='_blank'>Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer