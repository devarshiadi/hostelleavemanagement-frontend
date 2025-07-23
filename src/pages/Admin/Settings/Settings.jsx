import { useState } from 'react';
import styles from './Settings.module.css';
import adminAvatar from '../../../assets/avatar.png';

// In a larger app, this would be in its own file: /components/ToggleSwitch
const ToggleSwitch = ({ id, checked, onChange }) => {
  return (
    <label htmlFor={id} className={styles.toggleSwitch}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

const Settings = () => {
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
    { name: 'Mr. Shashank Patil', role: 'Super Admin', avatar: adminAvatar },
    { name: 'Mrs. Archana Bhakti', role: 'Admin', avatar: adminAvatar },
    { name: 'Mr. Ramesh Patil', role: 'Admin', avatar: adminAvatar },
  ];

  return (
    <div className={styles.settingsPage}>
      <header className={styles.pageHeader}>
        <h1>Settings</h1>
        <p>Your account settings at a glance...</p>
      </header>

      <div className={styles.settingsContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>System Settings</h2>
          <div className={styles.settingItem}>
            <div>
              <h3>Auto-approve Weekends</h3>
              <p>Automatically approve leave requests for weekends.</p>
            </div>
            <ToggleSwitch id="autoApproveWeekends" checked={settings.autoApproveWeekends} onChange={handleToggle} />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Notification Settings</h2>
          <div className={styles.settingItem}>
            <div>
              <h3>Email Notifications</h3>
              <p>Receive email notifications for leave requests.</p>
            </div>
            <ToggleSwitch id="emailNotifications" checked={settings.emailNotifications} onChange={handleToggle} />
          </div>
          <hr className={styles.divider} />
          <div className={styles.settingItem}>
            <div>
              <h3>SMS Notifications</h3>
              <p>Receive sms notifications for leave requests.</p>
            </div>
            <ToggleSwitch id="smsNotifications" checked={settings.smsNotifications} onChange={handleToggle} />
          </div>
          <hr className={styles.divider} />
          <div className={styles.settingItem}>
            <div>
              <h3>App Alerts</h3>
              <p>Receive in-app notifications for leave requests.</p>
            </div>
            <ToggleSwitch id="appAlerts" checked={settings.appAlerts} onChange={handleToggle} />
          </div>
        </div>

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
                  <button className={styles.menuButton}>⋮</button>
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

export default Settings;