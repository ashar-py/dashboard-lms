"use client";
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
    to: email, // Use the user's email provided as a parameter
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

