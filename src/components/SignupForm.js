// SignupForm.js
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from "@/ui/signup/signup.module.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    salutation: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Salutation:
          <select className={styles.input} name="salutation" value={formData.salutation} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Ms.">Ms.</option>
          </select>
        </label>
        <label className={styles.label}>
          Your Name:
          <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Email:
          <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Password:
          <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Confirm Password:
          <input className={styles.input} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </label>
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
