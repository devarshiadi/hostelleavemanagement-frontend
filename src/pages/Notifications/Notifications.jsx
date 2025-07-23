import { useState } from 'react';
import styles from './Notifications.module.css';
// Import icons from your assets folder
// For example: import approvedIcon from '../../assets/tick-icon.svg';
// I will use text as placeholders for icons for now.

const NotificationItem = ({ icon, title, description, time, isUnread }) => {
  return (
    <div className={`${styles.item} ${isUnread ? styles.unread : ''}`}>
      <div className={styles.iconWrapper} style={{ backgroundColor: icon.bg }}>
        {icon.char}
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <span className={styles.time}>{time}</span>
      </div>
      <a href="#" className={styles.detailsLink}>View Details</a>
    </div>
  );
};

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Approved', 'Pending', 'Rejected', 'Reminders'];

  // This data would come from an API in a real app
  const notifications = [
    { type: 'Approved', icon: { char: '✓', bg: '#10B981' }, title: 'Leave Approved', description: 'Your leave application for 15th July to 20th July has been approved.', time: '07-10-2024 10:00 AM', isUnread: true },
    { type: 'Pending', icon: { char: '…', bg: '#F59E0B' }, title: 'Leave Pending', description: 'Your leave application for 20th Aug to 22th Aug is pending.', time: '20-12-2024 12:00 PM', isUnread: true },
    { type: 'Rejected', icon: { char: '✕', bg: '#EF4444' }, title: 'Leave Rejected', description: 'Your leave application for 19th Sept to 20th Sept is rejected.', time: '16-9-2024 09:00 AM', isUnread: false },
    { type: 'Reminders', icon: { char: '🔔', bg: '#3B82F6' }, title: 'Leave Remainder', description: 'Your leave for 15th July to 20th July is approaching.', time: '14-07-2024 12:00 PM', isUnread: false },
  ];

  const filteredNotifications = notifications.filter(n => 
    activeFilter === 'All' || n.type === activeFilter
  );

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div>
            <h1>Notifications</h1>
            <p>View your past and current notifications</p>
        </div>
        <button className={styles.markAllRead}>Mark all as read</button>
      </header>

      <div className={styles.controls}>
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
      </div>

      <div className={styles.notificationList}>
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((item, index) => (
            <NotificationItem key={index} {...item} />
          ))
        ) : (
          <p className={styles.noNotifications}>No notifications in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;