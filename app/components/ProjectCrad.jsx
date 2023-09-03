"use client"
import Image from 'next/image'
import { motion } from "framer-motion"

import { projectData } from './Data'
import { useState } from 'react'

const projectCardVariant = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }
    }
}


const ProjectCrad = () => {

    const [clickCategory,setClickCategory] = useState('frontend')
    const newData = projectData.filter(item=> item.type === clickCategory)

  return (
    <div>
        <div className='w-full h-[3rem]'>
        {/* tabs  */}
        <div className='flex justify-center items-center h-full w-full text-lg font-bold tracking-widest text-slate-950'>
          <button className={`w-[50%] h-full border-r-2 border-slate-500 ${clickCategory === 'frontend' ? 'bg-slate-300' : 'bg-slate-50'}`} onClick={()=> setClickCategory('frontend')}>Frontend</button>
          <button className={`w-[50%] h-full ${clickCategory === 'fullstack' ? 'bg-slate-300' : 'bg-slate-50'}`} onClick={()=> setClickCategory('fullstack')}>Fullstack</button>
        </div>
      </div>
        <div className='px-8 flex flex-col items-center text-slate-950'>
            <h2 className='text-4xl mt-8 font-bold tracking-wide'>Projects</h2>
            {newData.map(data=> (
                <motion.div
                variants={projectCardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                key={data.id} className='md:flex w-full md:w-[70%] justify-around items-center gap-8 mb-12 mt-8 border-b-2 pb-8'>
                    {/* description */}
                    <div className='w-full md:w-[50%]'>
                        <h3 className='text-xl capitalize font-semibold text-left mb-2'>{data.name}</h3>
                        <p>{data.description}</p>
                        <div className='flex gap-4 flex-wrap mt-2 mb-4'>
                            {data.stack.map((stk,index)=> <p key={index} className='text-slate-500'>{stk}</p>)}
                        </div>
                        <div className='flex justify-center mt-4'>
                            <a target='_blank' href={data.link} className='bg-slate-950 text-slate-200 w-[5rem] px-2 py-1 text-center cursor-pointer'>View</a>
                        </div>
                    </div>

                    {/* image  */}
                    <Image className='w-full md:w-[50%] h-[18rem] bg-cover' src={data.image} alt={data.name} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default ProjectCrad