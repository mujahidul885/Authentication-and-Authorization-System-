import React from 'react'
import Cards from './Cards'

const Tasklist = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10 w-full'>
      <Cards/>
      </div>
  )
}

export default Tasklist
