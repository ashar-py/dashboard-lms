// ForgotPasswordPage.js
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from "@/ui/forgotpassword/forgot.module.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgotpassword', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Forgot Password Error:', error.response.data);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}> {/* Apply container style */}
      <h1 className={styles.title}>Forgot Password</h1> {/* Apply title style */}
      <form className={styles.form} onSubmit={handleSubmit}> {/* Apply form style */}
        <label className={styles.label}>
          Email:
          <input className={styles.input} type="email" value={email} onChange={handleChange} /> {/* Apply input style */}
        </label>
        <button className={styles.button} type="submit">Submit</button> {/* Apply button style */}
      </form>
      {message && <p className={styles.message}>{message}</p>} {/* Apply message style */}
    </div>
  );
};

export default ForgotPasswordPage;
