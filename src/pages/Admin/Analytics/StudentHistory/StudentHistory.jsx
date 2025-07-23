import { useParams, Link } from 'react-router-dom';
import styles from './StudentHistory.module.css';
import analyticsStyles from '../Analytics.module.css'; // Reuse some styles
import adminAvatar from '../../../../assets/avatar.png';

// Mock data
const studentsData = [
  { id: 1, name: 'Shreyas Patil', room: 'B-617', studentId: 'RBTL23CB067', leaveCount: 5 },
  { id: 2, name: 'Nilesh Kumar', room: 'C-204', studentId: 'RBTL23CB088', leaveCount: 4 },
];

const StudentHistory = () => {
  const { studentId } = useParams();
  const student = studentsData.find(s => s.id.toString() === studentId);

  if (!student) {
    return (
      <div>
        <h2>Student not found</h2>
        <Link to="/admin/analytics">Back to Analytics</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <Link to="/admin/analytics" className={styles.backLink}>← Back to Analytics</Link>
        <h1>Student Leave History</h1>
        <p>Detailed leave history for {student.name}</p>
      </header>

      <div className={styles.studentInfoCard}>
        <div>
          <h2>{student.name}</h2>
          <p>Room: {student.room}</p>
          <p>ID: {student.studentId}</p>
        </div>
        <img src={adminAvatar} alt={student.name} />
      </div>

      <div className={analyticsStyles.grid}> {/* Reuse grid styles */}
        <div className={analyticsStyles.chartCard}>
          <h3>Leaves History</h3>
          <div className={analyticsStyles.chartPlaceholder}>Bar Chart of Monthly Leaves</div>
        </div>
        <div className={analyticsStyles.chartCard}>
          <h3>Leave Reasons</h3>
          <div className={analyticsStyles.chartPlaceholder}>Pie Chart of Leave Types</div>
        </div>
      </div>
    </div>
  );
};

export default StudentHistory;