import { Link } from 'react-router-dom';
import AuthLayout from '../../../components/AuthLayout/AuthLayout';
import loginStyles from '../../Login/Login.module.css'; // Reusing student login styles!

const AdminSignin = () => {
  return (
    // Pass the portalType prop here
    <AuthLayout portalType="admin">
      <div className={loginStyles.loginCard}>
        <h2>Welcome Back, Admin</h2>
        <form className={loginStyles.form}>
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
          <div className={loginStyles.options}>
            <div className={loginStyles.rememberMe}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className={loginStyles.forgotPassword}>Forgot your password?</a>
          </div>
          <button type="submit" className={loginStyles.signInButton}>Sign in</button>
        </form>
        <div className={loginStyles.separator}><span>OR</span></div>
        <button className={loginStyles.googleButton}>Login with Google</button>
        <p className={loginStyles.signupPrompt}>
          Don't have an admin account? <Link to="/admin/signup" className={loginStyles.signupLink}>Create one</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default AdminSignin;