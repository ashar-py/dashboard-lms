import { poolPromise } from '../../db';

export default async function handler(req, res) {
  const { email } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('email', email)
      .query('SELECT * FROM Users WHERE email = @email');
      
    const user = result.recordset[0];
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Implement logic for sending reset password email here

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
