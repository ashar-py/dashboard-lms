"use client";
// ForgotPasswordPage.js
import React, { useState } from 'react';
import { changePassword } from '../app/actions/users/changePassword';
import styles from "@/ui/forgotpassword/forgot.module.css";

const ResetPasswordForm = ({resetPasswordToken}) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        const responseMessage = await changePassword(resetPasswordToken, password);

        setMessage(responseMessage);
    }

    

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Change Password</h1>
            <form className={styles.form}>
            <input className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input className={styles.input}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className={styles.button}
             onClick={handleSubmit}>
                Change Password
            </button>
            </form>
            <p className={styles.message}>{message}</p>
        </div>
    );
};

export default ResetPasswordForm;
