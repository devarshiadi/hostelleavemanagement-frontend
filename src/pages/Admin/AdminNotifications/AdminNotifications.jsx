import { useState } from 'react';
import styles from './AdminNotifications.module.css';
import studentNotificationsStyles from '../../Notifications/Notifications.module.css'; // Reuse student notification styles

const AdminNotificationItem = ({ icon, title, description, time, isUnread }) => {
  return (
    <div className={`${studentNotificationsStyles.item} ${isUnread ? studentNotificationsStyles.unread : ''}`}>
      <div className={studentNotificationsStyles.iconWrapper} style={{ backgroundColor: icon.bg }}>
        {icon.char}
      </div>
      <div className={studentNotificationsStyles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <span className={studentNotificationsStyles.time}>{time}</span>
      </div>
      <a href="#" className={studentNotificationsStyles.detailsLink}>View Details</a>
    </div>
  );
};

const AdminNotifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Approved', 'Pending', 'Rejected', 'System'];

  const notifications = [
    { type: 'Approved', icon: { char: '✓', bg: '#10B981' }, title: 'Leave Approved', description: 'You approved a leave application of Sumit Mahajan for 15th July to 20th July.', time: '07-10-2024 10:00 AM', isUnread: true },
    { type: 'Pending', icon: { char: '…', bg: '#6E6E6E' }, title: 'Leave Pending', description: 'A leave application of Ganesh Acharya for 20th Aug to 22th Aug is pending.', time: '20-12-2024 12:00 PM', isUnread: true },
    { type: 'Rejected', icon: { char: '✕', bg: '#EF4444' }, title: 'Leave Rejected', description: 'You rejected a leave application of Alex Fox for 19th Sept to 20th Sept.', time: '16-9-2024 09:00 AM', isUnread: false },
    { type: 'System', icon: { char: '🔔', bg: '#3B82F6' }, title: 'System Maintenance', description: 'The system will be under maintenance on 3rd July from 11:00 PM to 12:00 AM', time: '2-07-2024 12:00 PM', isUnread: false },
  ];

  const filteredNotifications = notifications.filter(n => 
    activeFilter === 'All' || n.type === activeFilter
  );

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div>
          <h1>Notifications</h1>
          <p>Your notifications at a glance...</p>
        </div>
        <button className={styles.markAllRead}>Mark all as read</button>
      </header>
      
      <div className={styles.filters}>
        {filters.map(filter => (
          <button
            key={filter}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.activeFilter : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={studentNotificationsStyles.notificationList}>
        {filteredNotifications.map((item, index) => (
          <AdminNotificationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AdminNotifications;