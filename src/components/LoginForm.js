"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter(); // Initialize useRouter hook

  const [formData, setFormData] = useState({
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
      const response = await axios.post('/api/login', formData);
      console.log(response.data);

      // Redirect to dashboard page upon successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Login Error:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <Link href="/dashboard" >
      <button type="submit">Login</button>
      </Link>
      
    </form>
  );
};

export default LoginForm;
