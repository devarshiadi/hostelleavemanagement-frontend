import { Link } from 'react-router-dom';
import styles from './Analytics.module.css';
import adminAvatar from '../../../assets/avatar.png';
// In a real app, you would use a library like Chart.js or Recharts for the charts.
// For now, we'll use placeholder images or simple divs.

const TopStudentItem = ({ id, name, leaveType, leaveCount }) => (
  <div className={styles.studentItem}>
    <div className={styles.studentInfo}>
      <img src={adminAvatar} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{leaveType}</p>
      </div>
    </div>
    <div className={styles.leaveCount}>{leaveCount}</div>
    <Link to={`/admin/analytics/student/${id}`} className={styles.viewLink}>View</Link>
  </div>
);

const Analytics = () => {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Analytics</h1>
        <p>Your student’s leave history at a glance...</p>
      </header>
      
      <div className={styles.grid}>
        <div className={styles.chartCard}>
          <h3>Monthly Requests</h3>
          <div className={styles.chartPlaceholder}>Chart Placeholder</div>
        </div>
        <div className={styles.chartCard}>
          <h3>Leave Reasons</h3>
          <div className={styles.chartPlaceholder}>Pie Chart Placeholder</div>
        </div>
      </div>

      <div className={styles.topStudentsCard}>
        <div className={styles.cardHeader}>
          <h3>Top Students (by leave count)</h3>
        </div>
        <div className={styles.studentList}>
          <TopStudentItem id={1} name="Shreyas Patil" leaveType="Personal Leave" leaveCount={5} />
          <TopStudentItem id={2} name="Nilesh Kumar" leaveType="Sick Leave" leaveCount={4} />
          <TopStudentItem id={3} name="Smita Wagh" leaveType="Casual Leave" leaveCount={3} />
          <TopStudentItem id={4} name="Aryan Patil" leaveType="Emergency Leave" leaveCount={2} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;