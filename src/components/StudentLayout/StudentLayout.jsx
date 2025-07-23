import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './StudentLayout.module.css';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png'; 
const StudentLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/dashboard', text: 'Dashboard' },
    { to: '/apply-leave', text: 'Apply Leave' },
    { to: '/history', text: 'History' },
    { to: '/notifications', text: 'Notification' },
    { to: '/profile', text: 'Profile' },
  ];

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Hostel Logo" />
          <h1>Hostel Leave Management</h1>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
          <div className={styles.mobileProfile}>
            <img src={avatar} alt="User Avatar" />
          </div>
        </nav>

        <div className={styles.profileContainer}>
          <img src={avatar} alt="User Avatar" />
        </div>

        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰ {/* Hamburger Icon */}
        </button>
      </header>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;