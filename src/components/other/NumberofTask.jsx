import React from 'react'

const NumberofTask = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-green-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>

      
    </div>
  )
}

export default NumberofTask
