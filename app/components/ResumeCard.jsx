import React from 'react'
import { resumeData } from './Data'

const ResumeCard = () => {
    const newData = resumeData
  return (
    <div className='min-h-screen'>
        <div className='px-8 flex flex-col items-center text-slate-950'>
            <h2 className='text-4xl mt-8 font-bold tracking-wide'>Projects</h2>
            
                <div className='w-full md:w-[70%] justify-around items-center gap-8 mb-12 mt-8 border-b-2 pb-8'>
                    {/* work */}
                    <div className='w-full md:w-[50%] mb-8'>
                        <h3 className='text-2xl capitalize font-semibold text-left mb-2'>Work</h3>
                        <p>{newData[0].work}</p>  
                    </div>

                    {/* education  */}
                    <div className='w-full md:w-[50%] mb-8'>
                        <h3 className='text-2xl capitalize font-semibold text-left mb-2'>Education</h3>
                        <p>{newData[1].education}</p>  
                    </div>

                    {/* skills  */}
                    <div className='w-full md:w-[50%] mb-8'>
                        <h3 className='text-2xl capitalize font-semibold text-left mb-2'>Skills</h3>
                        <div className='flex flex-wrap gap-2'>{newData[2].skills.map((skl,index)=>(
                            <p key={index} className='text-lg capitalize bg-slate-200 px-2 py-1 rounded-xl'>{skl}</p>
                        ))}</div>  
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default ResumeCard