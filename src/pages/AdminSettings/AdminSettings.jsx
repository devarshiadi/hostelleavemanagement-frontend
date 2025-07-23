import { useState } from 'react';
import styles from './AdminSettings.module.css';

// In a larger app, this would be in its own file: /components/ToggleSwitch
const ToggleSwitch = ({ id, checked, onChange }) => {
  return (
    <label htmlFor={id} className={styles.toggleSwitch}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    autoApproveWeekends: false,
    emailNotifications: true,
    smsNotifications: false,
    appAlerts: true,
  });

  const handleToggle = (e) => {
    setSettings({ ...settings, [e.target.id]: e.target.checked });
  };

  const admins = [
    { name: 'Mr. Shashank Patil', role: 'Super Admin', avatar: 'path/to/avatar1.png' },
    { name: 'Mrs. Archana Bhakti', role: 'Admin', avatar: 'path/to/avatar2.png' },
    { name: 'Mr. Ramesh Patil', role: 'Admin', avatar: 'path/to/avatar3.png' },
  ];

  // This would be inside an AdminLayout in a full app, which includes the sidebar.
  // For this task, we'll just render the main content.
  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Your account settings at a glance...</p>
      </div>

      <div className={styles.settingsContainer}>
        {/* System Settings Card */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>System Settings</h2>
          <div className={styles.settingItem}>
            <div>
              <h3>Auto-approve Weekends</h3>
              <p>Automatically approve leave requests for weekends.</p>
            </div>
            <ToggleSwitch
              id="autoApproveWeekends"
              checked={settings.autoApproveWeekends}
              onChange={handleToggle}
            />
          </div>
        </div>

        {/* Notification Settings Card */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Notification Settings</h2>
          <div className={styles.settingItem}>
            <div>
              <h3>Email Notifications</h3>
              <p>Receive email notifications for leave requests.</p>
            </div>
            <ToggleSwitch
              id="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleToggle}
            />
          </div>
          <hr className={styles.divider} />
          <div className={styles.settingItem}>
            <div>
              <h3>SMS Notifications</h3>
              <p>Receive sms notifications for leave requests.</p>
            </div>
            <ToggleSwitch
              id="smsNotifications"
              checked={settings.smsNotifications}
              onChange={handleToggle}
            />
          </div>
          <hr className={styles.divider} />
          <div className={styles.settingItem}>
            <div>
              <h3>App Alerts</h3>
              <p>Receive in-app notifications for leave requests.</p>
            </div>
            <ToggleSwitch
              id="appAlerts"
              checked={settings.appAlerts}
              onChange={handleToggle}
            />
          </div>
        </div>

        {/* Admin Management Card */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Admin Management</h2>
          <div className={styles.adminList}>
            {admins.map((admin, index) => (
              <div key={index}>
                <div className={styles.adminItem}>
                  <div className={styles.adminInfo}>
                    <img src={admin.avatar} alt="admin avatar" className={styles.avatar} />
                    <div>
                      <h3 className={styles.adminName}>{admin.name}</h3>
                      <p className={styles.adminRole}>{admin.role}</p>
                    </div>
                  </div>
                  <button className={styles.menuButton}>⋮</button> {/* Three dots icon */}
                </div>
                {index < admins.length - 1 && <hr className={styles.divider} />}
              </div>
            ))}
          </div>
          <button className={styles.addAdminButton}>+ Add Admin</button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;