import styles from './AuthLayout.module.css';
import backgroundImage from '../../assets/background.jpg';
import logo from '../../assets/logo.png';
import studentIcon from '../../assets/student-icon.svg';
import adminIcon from '../../assets/admin-icon.svg'; // Add this icon to your assets

// Accept a prop, defaulting to 'student'
const AuthLayout = ({ children, portalType = 'student' }) => {
  const isStudent = portalType === 'student';
  const portalText = isStudent ? 'Student Portal' : 'Admin Portal';
  const portalIcon = isStudent ? studentIcon : adminIcon;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }} />
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Hostel Logo" />
          <h1>Hostel Leave Management</h1>
        </div>
        <div className={styles.portalTitle}>
          <img src={portalIcon} alt={`${portalText} Icon`} />
          <h2>{portalText}</h2>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;