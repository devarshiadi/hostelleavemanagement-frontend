import { Link } from 'react-router-dom';
import AuthLayout from '../../../components/AuthLayout/AuthLayout';
import loginStyles from '../../Login/Login.module.css'; // Reusing styles again
import signupStyles from '../../Signup/Signup.module.css'; // For the prompt style

const AdminSignup = () => {
  return (
    <AuthLayout portalType="admin">
      <div className={loginStyles.loginCard}>
        <h2>Welcome, Admin</h2>
        <form className={loginStyles.form}>
          <div className={loginStyles.inputGroup}>
            <label htmlFor="fullName">Full Name</label>
            <div className={loginStyles.inputWrapper}>
              <input type="text" id="fullName" placeholder="Admin Name" required />
            </div>
          </div>
          <div className={loginStyles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={loginStyles.inputWrapper}>
              <input type="email" id="email" placeholder="admin@gmail.com" required />
            </div>
          </div>
          <div className={loginStyles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={loginStyles.inputWrapper}>
              <input type="password" id="password" placeholder="********" required />
            </div>
          </div>
          <button type="submit" className={loginStyles.signInButton}>Sign up</button>
        </form>
        <p className={signupStyles.loginPrompt}>
          Already have an account? <Link to="/admin/login" className={loginStyles.signupLink}>Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default AdminSignup;