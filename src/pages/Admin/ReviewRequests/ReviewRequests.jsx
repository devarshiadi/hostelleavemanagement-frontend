import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ReviewRequests.module.css';
import adminAvatar from '../../../assets/avatar.png'; // Using a placeholder avatar

const requestsData = [
  { id: 1, student: 'Shreyas Patil', type: 'Personal Leave', startDate: '27th Apr 2025', endDate: '28th Apr 2025', status: 'Pending' },
  { id: 2, student: 'Nilesh Kumar', type: 'Sick Leave', startDate: '12th May 2025', endDate: '17th May 2025', status: 'Pending' },
  { id: 3, student: 'Smita Wagh', type: 'Casual Leave', startDate: '12th May 2025', endDate: '17th May 2025', status: 'Approved' },
  { id: 4, student: 'Aryan Patil', type: 'Emergency Leave', startDate: '12th May 2025', endDate: '17th May 2025', status: 'Rejected' },
];

const ReviewRequests = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Approved', 'Pending', 'Rejected'];

  const filteredRequests = requestsData.filter(req => 
    activeFilter === 'All' || req.status === activeFilter
  );

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Leave Requests</h1>
        <p>Your student’s leave requests at a glance...</p>
      </header>
      
      <div className={styles.controls}>
        <div className={styles.filters}>
          {filters.map(filter => (
            <button
              key={filter}
              className={activeFilter === filter ? styles.activeFilter : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className={styles.bulkActions}>
            <button className={styles.approveAll}>Approve All</button>
            <button className={styles.rejectAll}>Reject All</button>
        </div>
      </div>

      <div className={styles.requestsTable}>
        <div className={styles.tableHeader}>
          <span>Student</span>
          <span>Date Range</span>
          <span>Action</span>
        </div>
        {filteredRequests.map(request => (
          <div key={request.id} className={styles.tableRow}>
            <div className={styles.studentCell}>
              <img src={adminAvatar} alt={request.student} />
              <div>
                <Link to={`/admin/requests/${request.id}`} className={styles.studentNameLink}>
                  {request.student}
                </Link>
                <p>{request.type}</p>
              </div>
            </div>
            <div className={styles.dateCell}>{request.startDate} - {request.endDate}</div>
            <div className={styles.actionCell}>
              <button className={styles.approveButton}>Approve</button>
              <button className={styles.rejectButton}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewRequests;