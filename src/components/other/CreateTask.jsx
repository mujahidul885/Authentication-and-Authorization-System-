import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c]  h-[50%] rounded">
        <form action="" className="flex flex-wrap w-full  items-start justify-between">
          <div className="w-1/2 mt-1 flex flex-col justify-between gap-y-10 ">
            <div>
              {" "}
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="text-sm h-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Make a UI design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-sm h-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="date" />
            </div>
            <div>
              {" "}
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input className="text-sm h-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input className="text-sm h-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="design,dev,etc" />
            </div>
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Description</h3>
            <textarea className="w-200 h-80 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]" name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-0 w-[50%] ml-250 ">Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask
