import { Link } from 'react-router-dom';
import styles from './StudentDashboard.module.css';

const StatCard = ({ icon, value, label, subtitle, link }) => (
  <Link to={link || '#'} className={styles.statCard}>
    {icon && <img src={icon} alt={`${label} icon`} className={styles.statIcon} />}
    <div>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
    <p className={styles.statSubtitle}>{subtitle}</p>
  </Link>
);

const ActivityItem = ({ type, date, status }) => {
  const statusClass = {
    Approved: styles.approved,
    Pending: styles.pending,
    Rejected: styles.rejected,
  }[status];

  return (
    <div className={styles.activityItem}>
      <div>
        <h4>{type}</h4>
        <p>{date}</p>
      </div>
      <div className={styles.activityStatus}>
        <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
        <span>→</span>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.pageHeader}>
        <h1>Student Dashboard</h1>
        <p>Your leave summary at a glance</p>
      </header>

      <div className={styles.gridContainer}>
        <section className={styles.mainContent}>
          <h2>Dashboard</h2>
          <div className={styles.statsGrid}>
            <StatCard value="04" label="Days" subtitle="Leaves Taken" link="/history" />
            <StatCard value="01" label="Request" subtitle="Pending Requests" link="/history" />
          </div>
          <Link to="/apply-leave" className={styles.applyButton}>
            Apply for Leave
          </Link>

          <div className={styles.divider}></div>

          <h2>Quick Insights</h2>
          <div className={styles.statsGrid}>
            <div className={`${styles.insightCard} ${styles.approvedBg}`}>
                <h4>Approved Leaves</h4>
                <span>03</span>
            </div>
            <div className={`${styles.insightCard} ${styles.pendingBg}`}>
                <h4>Pending Leaves</h4>
                <span>01</span>
            </div>
          </div>
        </section>

        <aside className={styles.sidebar}>
          <h2>Recent Leave Activity</h2>
          <div className={styles.activityList}>
            <ActivityItem type="Sick Leave" date="June 15 - June 15" status="Approved" />
            <ActivityItem type="Sick Leave" date="May 09 - May 10" status="Pending" />
            <ActivityItem type="Casual Leave" date="April 21 - April 21" status="Rejected" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;