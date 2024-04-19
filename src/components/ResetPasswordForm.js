import React, { useState } from 'react';
import { resetPassword } from '../app/actions/users/resetPassword';

const ResetPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const responseMessage = await resetPassword(email);
        setMessage(responseMessage);
    };

    return (
        <div className="flex flex-col gap-4">
            <h1>Reset Password</h1>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Reset Password
            </button>
            <p>{message}</p>
        </div>
    );
};

export default ResetPasswordForm;
