// src/SignUpForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.css'

const SignUpForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 201) {
        alert("Signup successful!");
        navigate("/"); 
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>First Name</label>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Last Name</label>
          <input
            className={styles.input}
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone</label>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Create Password</label>
          <input
            className={`${styles.input} text-black`} 
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Sign Up
        </button>
        <label ><p className={`${styles.label} mt-5`}>
               Already have account? <a className={styles.label} href="/">Log In</a> </p></label>
      </form>
    </div>
  );
};

export default SignUpForm;
