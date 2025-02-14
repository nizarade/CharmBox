import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react";
import Button from './Button';
import SecondButton from './SecondButton';
import { assets } from '../assets/assets';

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.header_image})`}} id='Header'>
        <Navbar/>
        <motion.div 
        initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] font-semibold inline-block max-w-3xl pt-20'>Explore Hampers that fit your Dreams.</h2>
            <div className='space-x-6 mt-6'>
                <SecondButton href="#Project">Projects</SecondButton>
                <Button href="#Contact">Contact Us</Button>
            </div>
        </motion.div>
    </div>
  )
}

export default Header