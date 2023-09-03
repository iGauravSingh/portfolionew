"use client"

import { useState } from "react"
import ProjectCrad from "../components/ProjectCrad"
import { projectData } from '../components/Data'

const page = () => {

  const [clickCategory,setClickCategory] = useState('frontend')

  return (
    
    <div>
      <div className='w-full h-[3rem]'>
        {/* tabs  */}
        <div className='flex justify-center items-center h-full w-full text-lg font-bold tracking-widest text-slate-950'>
          <button className={`w-[50%] h-full border-r-2 border-slate-500 ${clickCategory === 'frontend' ? 'bg-slate-300' : 'bg-slate-50'}`} onClick={()=> setClickCategory('frontend')}>Frontend</button>
          <button className={`w-[50%] h-full ${clickCategory === 'fullstack' ? 'bg-slate-300' : 'bg-slate-50'}`} onClick={()=> setClickCategory('fullstack')}>Fullstack</button>
        </div>
      </div>
              {/* projects based on tab */}
              <ProjectCrad clickCategory={clickCategory} projectData={projectData} />
    </div>
    
  )
}

export default page