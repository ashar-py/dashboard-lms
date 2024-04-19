// "use client";
import prisma from '@/app/lib/prisma';

// const prisma = require("@/app/lib/prisma");
const bcrypt = require('bcryptjs');

const changePassword = async (resetPasswordToken, password) => {
    const user = await prisma.user.findUnique({
        where: {
            resetPasswordToken
        }
    });

    if (!user) {
        throw new Error('User not found');
    }

    const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;
    if (!resetPasswordTokenExpiry) {
        throw new Error('Token expired');
    }

    const today = new Date();

    if (today > resetPasswordTokenExpiry) {
        throw new Error('Token expired');
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            passwordHash,
            resetPasswordToken: null,
            resetPasswordTokenExpiry: null,
        }
    });

    return "Password changed successfully";
};

module.exports = { changePassword };
