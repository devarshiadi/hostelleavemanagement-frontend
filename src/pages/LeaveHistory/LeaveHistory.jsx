import { useState } from 'react';
import styles from './LeaveHistory.module.css';

const TimelineItem = ({ type, date, reason, status, adminComment }) => {
  const statusClass = {
    Approved: styles.approved,
    Pending: styles.pending,
    Rejected: styles.rejected,
  }[status];

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}></div>
      <div className={styles.timelineContent}>
        <div className={styles.contentHeader}>
          <div>
            <h3>{type}</h3>
            <p className={styles.date}>{date}</p>
          </div>
          <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
        </div>
        <p className={styles.reason}>Reason: {reason}</p>
        {adminComment && <p className={styles.adminComment}>Admin Comment: {adminComment}</p>}
      </div>
    </div>
  );
};


const LeaveHistory = () => {
    const [view, setView] = useState('timeline');

    return (
        <div>
            <header className={styles.pageHeader}>
                <div>
                    <h1>Leave History</h1>
                    <p>View your past and current requests</p>
                </div>
                <div className={styles.toggleView}>
                    <button 
                        className={view === 'timeline' ? styles.active : ''}
                        onClick={() => setView('timeline')}
                    >
                        Timeline
                    </button>
                    <button 
                        className={view === 'table' ? styles.active : ''}
                        onClick={() => setView('table')}
                    >
                        Table
                    </button>
                </div>
            </header>

            {view === 'timeline' && (
                <div className={styles.timelineContainer}>
                    <TimelineItem 
                        type="Sick Leave" 
                        date="05 Dec 2024 - 06 Dec 2024"
                        reason="Recovering from a minor surgery"
                        status="Approved"
                    />
                    <TimelineItem 
                        type="Emergency Leave" 
                        date="20 Nov 2024 - 20 Nov 2024"
                        reason="Personal emergency"
                        status="Rejected"
                        adminComment="Insufficient Details Provided"
                    />
                    <TimelineItem 
                        type="Casual Leave" 
                        date="01 Nov 2024 - 03 Nov 2024"
                        reason="Attending a family wedding"
                        status="Pending"
                    />
                    <TimelineItem 
                        type="Sick Leave" 
                        date="15 Oct 2024 - 17 Oct 2024"
                        reason="Flu and Fever"
                        status="Approved"
                    />
                </div>
            )}

            {view === 'table' && (
                <div className={styles.tablePlaceholder}>
                    <h2>Table View Coming Soon!</h2>
                </div>
            )}

        </div>
    )
}

export default LeaveHistory;