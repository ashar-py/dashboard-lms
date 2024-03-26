// SignupForm.js
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from "@/ui/signup/signup.module.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Signup Error:', error.response.data);
    }
  };

  return (
    <div className={styles.container}> {/* Apply container style */}
      <form className={styles.form} onSubmit={handleSubmit}> {/* Apply form style */}
        <label className={styles.label}>
          Username:
          <input className={styles.input} type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Email:
          <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Password:
          <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button className={styles.button} type="submit">Sign Up</button> {/* Apply button style */}
      </form>
    </div>
  );
};

export default SignupForm;
