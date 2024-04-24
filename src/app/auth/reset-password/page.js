import React from 'react';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import ResetPasswordForm from '@/components/ResetPasswordForm';
import prisma from '@/app/lib/prisma';

const ResetPasswordPage = ({ searchParams }) => {
    const resetPasswordToken = searchParams.token;

    if (resetPasswordToken) {
        prisma.user.findUnique({
            where: {
                resetPasswordToken: resetPasswordToken,
            },
        }).then(user => {
            if (!user) {
                return <div>Invalid token</div>;
            }
            return ;
            // return <ChangePasswordForm resetPasswordToken={resetPasswordToken} />;
        });
    } else {
        return <ResetPasswordForm />;
    }
};

export default ResetPasswordPage;
