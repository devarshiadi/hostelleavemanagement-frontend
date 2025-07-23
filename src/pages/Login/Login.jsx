import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import styles from './Login.module.css';
import googleIcon from '../../assets/google-icon.svg';
import emailIcon from '../../assets/email-icon.svg';
import lockIcon from '../../assets/lock-icon.svg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <AuthLayout>
      <div className={styles.loginCard}>
        <h2>Welcome Back, Student</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.inputWrapper}>
              <img src={emailIcon} alt="email icon" className={styles.icon}/>
              <input
                type="email"
                id="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <img src={lockIcon} alt="lock icon" className={styles.icon}/>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.options}>
            <div className={styles.rememberMe}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/forgot-password" className={styles.forgotPassword}>Forgot your password?</Link>
          </div>

          <button type="submit" className={styles.signInButton}>Sign in</button>
        </form>

        <div className={styles.separator}>
          <span>OR</span>
        </div>

        <button className={styles.googleButton}>
          <img src={googleIcon} alt="Google icon" />
          Login with Google
        </button>
        
        <p className={styles.signupPrompt}>
          New to DormDash? <Link to="/signup" className={styles.signupLink}>Create an account</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;