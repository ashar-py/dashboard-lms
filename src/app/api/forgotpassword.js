// import { poolPromise } from '../../db';

// export default async function handler(req, res) {
//   const { email } = req.body;

//   try {
//     const pool = await poolPromise;
//     const result = await pool.request()
//       .input('email', email)
//       .query('SELECT * FROM Users WHERE email = @email');
      
//     const user = result.recordset[0];
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Implement logic for sending reset password email here

//     res.status(200).json({ message: 'Password reset email sent' });
//   } catch (error) {
//     console.error('Error resetting password:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


"use client";
// pages/api/forgotpassword.js
import { users } from '../../db';
import { generateOTP, sendOTPByEmail } from '../../utils/utils';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const otp = generateOTP();
  user.otp = otp;
  user.otpTimestamp = Date.now();

  try {
    // Send OTP
    sendOTPByEmail(email, otp);

    return res.status(200).json({ message: 'OTP sent to registered email' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
