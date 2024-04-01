"use client";
import { ReportGmailerrorred } from '@mui/icons-material';
// utils/emailUtils.js
import nodemailer from 'nodemailer';

export const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const sendOTPByEmail = (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pawarprasadvijay@gmail.com', 
      pass: 'Vvsp@6499',
    },
  });

  const mailOptions = {
    from: 'pawarprasadvijay@gmail.com',
    to: 'prasadvijaypawar6499@gmail.com',
    subject: 'OTP Verification',
    text: `Your OTP for registration is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
