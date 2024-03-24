"use client";
import React from 'react';
import Link from 'next/link';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import axios from 'axios';

const API_URL = '/api'; // assuming your backend API endpoints are served under '/api'

const HomePage = () => {
  const handleSignup = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Signup Error:', error.response.data); // Handle error response
    }
  };

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Login Error:', error.response.data); // Handle error response
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      const response = await axios.post(`${API_URL}/forgotpassword`, { email });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Forgot Password Error:', error.response.data); // Handle error response
    }
  };

  return (
    <div className="container">
      <h1>Welcome</h1>
      <div className="form-container">
        {/* <div className="form">
          <h2>Signup</h2>
          <SignupForm onSubmit={handleSignup} />
        </div> */}
        <div className="form">
          <h2>Login</h2>
          <LoginForm onSubmit={handleLogin} />
        </div>
        {/* <div className="form">
          <h2>Forgot Password</h2>
          <ForgotPasswordForm onSubmit={handleForgotPassword} />
        </div> */}
      </div>
      {/* Links to Forgot Password and Signup pages */}
      <div className="link-container">
        <Link href="/forgotpassword">
          Forgot Password?
        </Link>
        <span>|</span>
        <Link href="/signup">
          Signup
        </Link>
        <Link href="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
