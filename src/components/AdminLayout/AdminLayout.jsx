import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './AdminLayout.module.css';
import logo from '../../assets/logo.png';
import adminAvatar from '../../assets/avatar.png'; // Use a different avatar if you have one

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { to: '/admin/dashboard', text: 'Dashboard' },
    { to: '/admin/requests', text: 'Review Requests' },
    { to: '/admin/analytics', text: 'Analytics' },
    { to: '/admin/notifications', text: 'Notifications' },
    { to: '/admin/profile', text: 'Profile' },
    { to: '/admin/settings', text: 'Settings' },
  ];

  return (
    <div className={styles.layout}>
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <img src={logo} alt="Hostel Logo" />
          <h3>Hostel Leave Mgmt</h3>
        </div>
        <nav className={styles.sidebarNav}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <button className={styles.logoutButton}>Log out</button>
      </aside>

      <div className={styles.mainContainer}>
        <header className={styles.topbar}>
          <button className={styles.hamburger} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            ☰
          </button>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.topbarIcons}>
            {/* Add notification icon here */}
            <img src={adminAvatar} alt="Admin Avatar" className={styles.avatar} />
          </div>
        </header>
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;