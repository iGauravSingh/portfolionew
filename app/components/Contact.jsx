import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='h-[6rem] bg-slate-50 flex justify-between items-center border-t-2 px-8 px-4'>
                {/* phone  */}
                <div>
                    <h4 className='text-lg font-bold'>Phone</h4>
                    <p>+91 8112512177</p>
                </div>
                {/* email  */}
                <div className='hidden md:block'>
                    <h4 className='text-lg font-bold'>Email</h4>
                    <p>poetonroad@gmail.com</p>
                </div>
                {/* by */}
                <div>
                    <p>by Gaurav Singh</p>
                </div>
            </div>
    </div>
  )
}

export default Contact