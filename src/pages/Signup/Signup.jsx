import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import styles from './Signup.module.css'; // We'll create this, but it will reuse many login styles
import loginStyles from '../Login/Login.module.css'; // Reusing styles!
import googleIcon from '../../assets/google-icon.svg';
import userIcon from '../../assets/user-icon.svg';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import lockIcon from '../../assets/lock-icon.svg';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AuthLayout>
      <div className={loginStyles.loginCard}> {/* Reusing the card style */}
        <h2>Welcome, Student</h2>
        <form onSubmit={handleSubmit} className={loginStyles.form}>
          {/* Input for Full Name */}
          <div className={loginStyles.inputGroup}>
            <label htmlFor="fullName">Full Name</label>
            <div className={loginStyles.inputWrapper}>
              <img src={userIcon} alt="user icon" className={loginStyles.icon}/>
              <input type="text" id="fullName" placeholder="Alex Xander" onChange={handleChange} required />
            </div>
          </div>

          {/* Input for Email */}
          <div className={loginStyles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={loginStyles.inputWrapper}>
              <img src={emailIcon} alt="email icon" className={loginStyles.icon}/>
              <input type="email" id="email" placeholder="you@gmail.com" onChange={handleChange} required />
            </div>
          </div>

          {/* Input for Mobile Number */}
          <div className={loginStyles.inputGroup}>
            <label htmlFor="mobile">Mobile number</label>
            <div className={loginStyles.inputWrapper}>
              <img src={phoneIcon} alt="phone icon" className={loginStyles.icon}/>
              <input type="tel" id="mobile" placeholder="+91 0000000000" onChange={handleChange} required />
            </div>
          </div>

          {/* Input for Password */}
          <div className={loginStyles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={loginStyles.inputWrapper}>
              <img src={lockIcon} alt="lock icon" className={loginStyles.icon}/>
              <input type="password" id="password" placeholder="********" onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className={loginStyles.signInButton}>Sign up</button>
        </form>

        <p className={styles.loginPrompt}>
          Already have an account? <Link to="/login" className={loginStyles.signupLink}>Login</Link>
        </p>

        <div className={loginStyles.separator}>
          <span>OR</span>
        </div>

        <button className={loginStyles.googleButton}>
          <img src={googleIcon} alt="Google icon" />
          Login with Google
        </button>
      </div>
    </AuthLayout>
  );
};

export default Signup;