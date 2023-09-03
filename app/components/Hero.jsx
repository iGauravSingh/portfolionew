"use client"

import { motion } from "framer-motion"

import Image from 'next/image'
import React from 'react'

import profile from './profile.jpg'
import photo from './photo.jpg' 
import Link from 'next/link'


const heroImageVariant = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}

const heroHeadingVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}

const heroDescVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}

const heroCircleVariant = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
            delay: 1.25,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}



const Hero = () => {
  return (
    <div>
        <div className='bg-slate-50 px-8 pb-[5rem]'>
            <div className='flex flex-wrap h-full items-center justify-center gap-8 min-h-screen '>
                {/* image  */}
                <motion.div
                variants={heroImageVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='order-2 md:order-1'>
                    <Image className='w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] rounded-full hue-rotate-0 sepia' src={photo} alt='profile' />
                </motion.div>
                {/* about me  */}
                <div className='w-[30rem] order-1 md:order-2'>
                    <motion.h1
                    variants={heroHeadingVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='text-6xl md:text-8xl font-bold mt-4 md:mt-0'>Hello</motion.h1>

                    <motion.h3
                    variants={heroHeadingVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='text-2xl font-bold capitalize mt-4'>A bit about me</motion.h3>

                    <motion.p
                    variants={heroDescVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ratione maxime voluptatem repudiandae enim molestiae perferendis quibusdam quia non praesentium.</motion.p>
                    <motion.div
                    variants={heroCircleVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='flex gap-4 mt-12 text-lg text-slate-100'>
                        {/* resume  */}
                        <div className='w-[6rem] md:w-[8rem] h-[6rem] md:h-[8rem] bg-yellow-600 rounded-full flex items-center justify-center'><Link href='/resume'>Resume</Link></div>
                        <div className='w-[6rem] md:w-[8rem] h-[6rem] md:h-[8rem] bg-yellow-600 rounded-full flex items-center justify-center'><Link href='/projects'>Projects</Link></div>
                        <div className='w-[6rem] md:w-[8rem] h-[6rem] md:h-[8rem] bg-yellow-600 rounded-full flex items-center justify-center'><Link href='/contacts'>Contact</Link></div>
                    </motion.div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero