"use client";
import React from 'react';
import Link from 'next/link';
//import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
//import ForgotPasswordForm from '../components/ForgotPasswordForm';
import axios from 'axios';

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
    <div className="container">
      <h1>Welcome</h1>
      <div className="form-container">
       
        <div className="form">
          <h2>Login</h2>
          <LoginForm onSubmit={handleLogin} />
        </div>
       
      </div>
      
      <div className="link-container">
        <Link href="/forgotpassword">
          Forgot Password?
        </Link>
        <span>|</span>
        <Link href="/signup">
          Signup
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;
