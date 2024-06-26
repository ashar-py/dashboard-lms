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




"use client"
import React, { useState } from 'react';
import { resetPassword } from '../app/actions/users/resetPassword';

const ForgotPasswordForm = () => {
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

export default ForgotPasswordForm;
