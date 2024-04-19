// pages/api/verify-email.js

import prisma from '@/app/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  const user = await prisma.user.findUnique({
    where: {
      emailVerificationToken: token,
    },
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  await prisma.user.update({
    where: {
      emailVerificationToken: token,
    },
    data: {
      emailVerified: true,
      emailVerificationToken: null,
    },
  });

  return res.status(200).json({ message: 'Email verified successfully' });
}
