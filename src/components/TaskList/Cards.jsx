import React from 'react'

const Cards = () => {
     const timeline = [
  {
    date: "2025-01-01",
    title: "New Year's Day",
    description: "Celebrated the start of the year with family and friends.",
    img: "http://www.serebii.net/pokemongo/pokemon/016.png",

  },
  {
    date: "2025-01-15",
    title: "Project Planning",
    description: "Created roadmap and assigned initial tasks to team members.",
    img: "http://www.serebii.net/pokemongo/pokemon/015.png",

  },
  {
    date: "2025-02-01",
    title: "Design Phase",
    description: "Finalized wireframes and visual prototypes for the platform.",
    img: "http://www.serebii.net/pokemongo/pokemon/014.png",

  },
  {
    date: "2025-02-20",
    title: "Backend Development",
    description: "Started setting up the server, database, and RESTful APIs.",
    img: "http://www.serebii.net/pokemongo/pokemon/013.png",

  },
  {
    date: "2025-03-01",
    title: "Frontend Setup",
    description: "React frontend project initialized with Tailwind CSS.",
    img: "http://www.serebii.net/pokemongo/pokemon/012.png",

  },
  {
    date: "2025-03-10",
    title: "Team Review",
    description: "First sprint review and feedback session with the stakeholders.",
    img: "http://www.serebii.net/pokemongo/pokemon/011.png",

  },
  {
    date: "2025-03-20",
    title: "Authentication System",
    description: "User login, registration, and JWT-based auth implemented.",
    img: "http://www.serebii.net/pokemongo/pokemon/010.png",
    
    
    
},
{
    date: "2025-04-01",
    title: "API Integration",
    description: "Connected frontend to backend APIs using Axios.",
    img: "http://www.serebii.net/pokemongo/pokemon/009.png",
},
{
    date: "2025-04-10",
    title: "Testing Phase",
    description: "Unit and integration tests conducted across all components.",
    img:"http://www.serebii.net/pokemongo/pokemon/004.png",
},
{
    date: "2025-04-20",
    title: "Bug Fixes",
    description: "Resolved reported issues and optimized performance.",
    img: "http://www.serebii.net/pokemongo/pokemon/005.png",
},
{
    date: "2025-05-01",
    title: "Deployment",
    description: "Deployed backend on Render and frontend on GitHub Pages.",
    img: "http://www.serebii.net/pokemongo/pokemon/020.png",
},
{
    date: "2025-05-10",
    title: "User Feedback",
    description: "Collected feedback from early users and made improvements.",
    img: "http://www.serebii.net/pokemongo/pokemon/028.png",
},
{
    date: "2025-05-20",
    title: "Feature Update",
    description: "Added new dashboard features and analytics tools.",
    img: "http://www.serebii.net/pokemongo/pokemon/064.png",
},
{
    date: "2025-06-01",
    title: "Marketing Launch",
    description: "Launched the official marketing campaign on social media.",
    img: "http://www.serebii.net/pokemongo/pokemon/034.png",
},
{
    date: "2025-06-15",
    title: "Project Completion",
    description: "Final version released and handed over to stakeholders.",
    img: "http://www.serebii.net/pokemongo/pokemon/054.png",
}]
return (
    <>
     <div className="flex flex-row gap-4">
    {timeline.map((item, index) => (
      <div
      key={index}
      className="flex-shrink-0 h-full w-[350px] bg-[#1c1c1c] rounded-xl"
      >
        
        <div className="flex justify-between">
          <h3 className="bg-red-600 mt-3 ml-3 text-sm px-3 py-1 rounded w-15">
            High
          </h3>
          <h4 className="text-sm pt-4 pr-3">{item.date}</h4>
        </div>
        <h2 className="mt-7 ml-8 text-2xl font-semibold">{item.title}</h2>
        <p className="mt-5 pl-7 pr-2">{item.description}</p>
        <img
          className="rounded-2xl mt-5 ml-15 w-[40%]"
          src={item.img}
          alt=""
        />
      </div>
    ))}
  </div>
    </>
  )
}

export default Cards



// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'

// const Cards = () => {
//   const cardRef = useRef([]);

//   const timeline = [
//     {
//       date: "2025-01-01",
//       title: "New Year's Day",
//       description: "Celebrated the start of the year with family and friends.",
//       img: "http://www.serebii.net/pokemongo/pokemon/016.png",
//     },
//     {
//       date: "2025-01-15",
//       title: "Project Planning",
//       description: "Created roadmap and assigned initial tasks to team members.",
//       img: "http://www.serebii.net/pokemongo/pokemon/015.png",
//     },
//     {
//       date: "2025-02-01",
//       title: "Design Phase",
//       description: "Finalized wireframes and visual prototypes for the platform.",
//       img: "http://www.serebii.net/pokemongo/pokemon/014.png",
//     },
//       {
//     date: "2025-02-20",
//     title: "Backend Development",
//     description: "Started setting up the server, database, and RESTful APIs.",
//     img: "http://www.serebii.net/pokemongo/pokemon/013.png",

//   },
//   {
//     date: "2025-03-01",
//     title: "Frontend Setup",
//     description: "React frontend project initialized with Tailwind CSS.",
//     img: "http://www.serebii.net/pokemongo/pokemon/012.png",

//   },
//   {
//     date: "2025-03-10",
//     title: "Team Review",
//     description: "First sprint review and feedback session with the stakeholders.",
//     img: "http://www.serebii.net/pokemongo/pokemon/011.png",

//   },
//   {
//     date: "2025-03-20",
//     title: "Authentication System",
//     description: "User login, registration, and JWT-based auth implemented.",
//     img: "http://www.serebii.net/pokemongo/pokemon/010.png",
    
    
    
// },
// {
//     date: "2025-04-01",
//     title: "API Integration",
//     description: "Connected frontend to backend APIs using Axios.",
//     img: "http://www.serebii.net/pokemongo/pokemon/009.png",
// },
// {
//     date: "2025-04-10",
//     title: "Testing Phase",
//     description: "Unit and integration tests conducted across all components.",
//     img:"http://www.serebii.net/pokemongo/pokemon/004.png",
// },
// {
//     date: "2025-04-20",
//     title: "Bug Fixes",
//     description: "Resolved reported issues and optimized performance.",
//     img: "http://www.serebii.net/pokemongo/pokemon/005.png",
// },
// {
//     date: "2025-05-01",
//     title: "Deployment",
//     description: "Deployed backend on Render and frontend on GitHub Pages.",
//     img: "http://www.serebii.net/pokemongo/pokemon/020.png",
// },
// {
//     date: "2025-05-10",
//     title: "User Feedback",
//     description: "Collected feedback from early users and made improvements.",
//     img: "http://www.serebii.net/pokemongo/pokemon/028.png",
// },
// {
//     date: "2025-05-20",
//     title: "Feature Update",
//     description: "Added new dashboard features and analytics tools.",
//     img: "http://www.serebii.net/pokemongo/pokemon/064.png",
// },
// {
//     date: "2025-06-01",
//     title: "Marketing Launch",
//     description: "Launched the official marketing campaign on social media.",
//     img: "http://www.serebii.net/pokemongo/pokemon/034.png",
// },
// {
//     date: "2025-06-15",
//     title: "Project Completion",
//     description: "Final version released and handed over to stakeholders.",
//     img: "http://www.serebii.net/pokemongo/pokemon/054.png",
// }]

//   // GSAP animation on mount
//   useEffect(() => {
//     gsap.from(cardRef.current, {
//       x: -100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out"
//     });
//   }, []);

//   return (
//     <>
//       <div className="flex flex-row gap-4 overflow-x-auto p-5">
//         {timeline.map((item, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardRef.current[index] = el)}
//             className="flex-shrink-0 h-full w-[350px] bg-[#1c1c1c] rounded-xl p-4"
//           >
//             <div className="flex justify-between">
//               <h3 className="bg-red-600 text-white mt-3 ml-3 text-sm px-3 py-1 rounded">
//                 High
//               </h3>
//               <h4 className="text-sm pt-4 pr-3 text-white">{item.date}</h4>
//             </div>
//             <h2 className="mt-7 ml-3 text-2xl font-semibold text-white">{item.title}</h2>
//             <p className="mt-5 pl-3 pr-2 text-gray-300">{item.description}</p>
//             <img className="rounded-2xl mt-5 ml-3 w-full" src={item.img} alt="card" />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Cards

