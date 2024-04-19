// pages/api/change-password.js
"use client";
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
    }

    const { resetPasswordToken, newPassword } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                resetPasswordToken,
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found', message: 'User with reset password token not found' });
        }

        const today = new Date();
        const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;

        if (!resetPasswordTokenExpiry || today > resetPasswordTokenExpiry) {
            return res.status(400).json({ error: 'Token expired', message: 'Reset password token has expired' });
        }

        const passwordHash = bcrypt.hashSync(newPassword, 10);

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                passwordHash,
                resetPasswordToken: null,
                resetPasswordTokenExpiry: null,
            },
        });

        return res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error', message: 'Failed to change password' });
    }
}
