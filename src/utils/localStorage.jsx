// const employees = [
//   {
//     id: "emp001",
//     email: "john.doe@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Fix login bug",
//         taskDescription: "Resolve issue with user login redirect",
//         taskDate: "2025-06-18",
//         category: "Bug",
//         active: true,
//         newTask: false,
//         completedTask: false,
//         failedTask: false
//       },
//       {
//         taskTitle: "Update dashboard UI",
//         taskDescription: "Redesign dashboard with new theme colors",
//         taskDate: "2025-06-15",
//         category: "UI",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failedTask: false
//       },
//       {
//         taskTitle: "Write unit tests",
//         taskDescription: "Add Jest tests for auth middleware",
//         taskDate: "2025-06-20",
//         category: "Testing",
//         active: false,
//         newTask: true,
//         completedTask: false,
//         failedTask: false
//       }
//     ]
//   },
//   {
//     id: "emp002",
//     email: "jane.smith@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Client call follow-up",
//         taskDescription: "Email summary of client meeting notes",
//         taskDate: "2025-06-16",
//         category: "Communication",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failedTask: false
//       },
//       {
//         taskTitle: "Setup CI/CD",
//         taskDescription: "Integrate GitHub Actions for auto-deploy",
//         taskDate: "2025-06-21",
//         category: "DevOps",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failedTask: false
//       },
//       {
//         taskTitle: "Prepare demo",
//         taskDescription: "Create demo slides for product showcase",
//         taskDate: "2025-06-22",
//         category: "Presentation",
//         active: false,
//         newTask: true,
//         completedTask: false,
//         failedTask: false
//       }
//     ]
//   },
//   {
//     id: "emp003",
//     email: "alice.williams@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Onboard new intern",
//         taskDescription: "Guide the new intern through codebase",
//         taskDate: "2025-06-14",
//         category: "HR",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failedTask: false
//       },
//       {
//         taskTitle: "Write blog post",
//         taskDescription: "Publish article on project best practices",
//         taskDate: "2025-06-19",
//         category: "Content",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failedTask: false
//       },
//       {
//         taskTitle: "Fix mobile navbar",
//         taskDescription: "Resolve overlap issue on small screens",
//         taskDate: "2025-06-17",
//         category: "Bug",
//         active: false,
//         newTask: false,
//         completedTask: false,
//         failedTask: true
//       }
//     ]
//   },
//   {
//     id: "emp004",
//     email: "bob.johnson@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Optimize DB queries",
//         taskDescription: "Reduce response time for employee search",
//         taskDate: "2025-06-18",
//         category: "Database",
//         active: true,
//         newTask: false,
//         completedTask: false,
//         failedTask: false
//       },
//       {
//         taskTitle: "Fix export feature",
//         taskDescription: "Enable CSV export on analytics page",
//         taskDate: "2025-06-16",
//         category: "Feature",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failedTask: false
//       },
//       {
//         taskTitle: "Update environment docs",
//         taskDescription: "Add local setup guide to README",
//         taskDate: "2025-06-15",
//         category: "Documentation",
//         active: false,
//         newTask: true,
//         completedTask: false,
//         failedTask: false
//       }
//     ]
//   },
//   {
//     id: "emp005",
//     email: "emma.brown@example.com",
//     password: "123",
//     tasks: [
//       {
//         taskTitle: "Fix date picker bug",
//         taskDescription: "Date field not selecting properly in Chrome",
//         taskDate: "2025-06-16",
//         category: "Bug",
//         active: false,
//         newTask: false,
//         completedTask: false,
//         failedTask: true
//       },
//       {
//         taskTitle: "Research AI tools",
//         taskDescription: "Prepare a list of ML tools for integration",
//         taskDate: "2025-06-20",
//         category: "Research",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failedTask: false
//       },
//       {
//         taskTitle: "Improve accessibility",
//         taskDescription: "Add ARIA roles to dashboard components",
//         taskDate: "2025-06-19",
//         category: "UI/UX",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failedTask: false
//       }
//     ]
//   }
// ];

//  const admin = [
//   {
//     "id": "admin001",
//     "email": "admin@example.com",
//     "password": "123"
//   }
// ]

// export const setLocalStorage =()=>{
//     localStorage.setItem('employees',JSON.stringify(employees))
//     localStorage.setItem('admin',JSON.stringify(admin))
// }

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem('employees'));
//   const admin = JSON.parse(localStorage.getItem('admin'));
//   return { employees, admin }; // ✅ return the data as an object
// };
