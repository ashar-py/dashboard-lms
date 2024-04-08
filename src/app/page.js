"use client";
import React from 'react';
import Link from 'next/link';
//import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
//import ForgotPasswordForm from '../components/ForgotPasswordForm';
import axios from 'axios';
import styles from "../ui/login/login.module.css";
import Footer from "@/ui/footer/footer";

const API_URL = '/api'; 

const HomePage = () => {
  const handleSignup = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Signup Error:', error.response.data); 
    }
  };

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Login Error:', error.response.data); 
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      const response = await axios.post(`${API_URL}/forgotpassword`, { email });
      console.log(response.data); 
    } catch (error) {
      console.error('Forgot Password Error:', error.response.data); 
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login to ANZA</h1>
        <div className={styles.box}>
          <h2>Signin</h2>
          <LoginForm onSubmit={handleLogin} />
          <div className={styles.linkContainer}>
        <Link className={styles.links} href="/forgotpassword">
          Forgot Password?
        </Link>
        
        <span>&nbsp;|&nbsp;</span>
        <Link className={styles.links} href="/signup">
          Signup
        </Link>
        
      </div>
        </div>
      <div>
        <Footer/>
      </div>
        
    </div>
  );
};

export default HomePage;
