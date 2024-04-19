import React from 'react';
import ForgotPasswordForm from '../app/components/ForgotPasswordForm';
import ResetPasswordForm from '../app/components/ResetPasswordForm';
import prisma from '../app/lib/prisma';

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

            return <ChangePasswordForm resetPasswordToken={resetPasswordToken} />;
        });
    } else {
        return <ResetPasswordForm />;
    }
};

export default ResetPasswordPage;
