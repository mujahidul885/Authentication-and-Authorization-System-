import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleOnsubmit = async () => {
  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // ✅ FIXED
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Login successful!");
      navigate("/employeedashboard");
    } else {
      alert(data.message || "Login failed. Try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Error logging in.");
  }
};

    
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-2xl border-emerald-600 p-20  '>
            <form onSubmit={(e)=>{
                e.preventDefault()
                handleOnsubmit()
                }} className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                required 
                className=' outline-none bg-transparent border-2 border-emerald-600 text-white text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent border-2 border-emerald-600 text-white text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-7' type="password" placeholder='Enter your password' 
                />
                <button className='mt-7 text-white outline-none  border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
                <p className='text-white mt-5'>
               New user? <a href="/signup">Sign up here</a>
                </p>
            </form>
      </div>
    </div>
  )
}

export default Login










