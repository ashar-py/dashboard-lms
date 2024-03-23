import { poolPromise } from '../../db';

export default async function handler(req, res) {
  const { username, email, password } = req.body;

  // Check if the email is already registered
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('email', email)
      .query('SELECT * FROM Users WHERE email = @email');

    if (result.recordset.length > 0) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
  } catch (error) {
    console.error('Error checking email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

  // If email is not registered, proceed with signup
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('username', username)
      .input('email', email)
      .input('password', password)
      .query('INSERT INTO Users (username, email, password) VALUES (@username, @email, @password)');
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
