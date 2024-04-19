// // ForgotPasswordPage.js
// "use client";
// // ForgotPasswordPage.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from "@/ui/forgotpassword/forgot.module.css";

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/forgotpassword', { email });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Forgot Password Error:', error.response.data);
//       setMessage('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Forgot Password</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label className={styles.label}>
//           Email:
//           <input className={styles.input} type="email" value={email} onChange={handleChange} placeholder="Enter your email" />
//         </label>
//         <button className={styles.button} type="submit">Submit</button>
//       </form>
//       {message && <p className={styles.message}>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPasswordPage;




// "use client";

// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '@/ui/forgotpassword/forgot.module.css';

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/forgotpassword', { email });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Forgot Password Error:', error.response.data);
//       setMessage('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Forgot Password</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label className={styles.label}>
//           Email:
//           <input
//             className={styles.input}
//             type="email"
//             value={email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </label>
//         <button className={styles.button} type="submit">
//           Submit
//         </button>
//       </form>
//       {message && <p className={styles.message}>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPasswordPage;




"use client";
// ForgotPasswordPage.js
import React, { useState } from 'react';
import { changePassword } from '../app/actions/users/changePassword';
import styles from "@/ui/forgotpassword/forgot.module.css";

const ForgotPasswordForm = ({resetPasswordToken}) => {
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

export default ForgotPasswordForm;
