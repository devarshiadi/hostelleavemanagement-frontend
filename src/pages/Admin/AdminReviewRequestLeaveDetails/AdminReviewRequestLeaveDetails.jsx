import { useParams, Link } from 'react-router-dom';
import styles from './AdminReviewRequestLeaveDetails.module.css';
import adminAvatar from '../../../assets/avatar.png'; // Using a placeholder avatar

// Mock data - in a real app, you would fetch this data
const requestsData = [
    { id: 1, student: 'Shreyas Patil', studentId: 'RBTL23CB067', type: 'Personal Leave', startDate: '27th Apr 2025', endDate: '28th Apr 2025', submitted: '26th April 2025', reason: 'Attending a family function out of town.' },
    { id: 2, student: 'Nilesh Kumar', studentId: 'RBTL23CB088', type: 'Sick Leave', startDate: '12th May 2025', endDate: '17th May 2025', submitted: '11th May 2025', reason: 'Diagnosed with viral fever and advised rest.' },
];


const AdminReviewRequestLeaveDetails = () => {
    const { requestId } = useParams();
    const request = requestsData.find(r => r.id.toString() === requestId);

    if (!request) {
        return <div>
            <h2>Request not found</h2>
            <Link to="/admin/requests">Back to all requests</Link>
        </div>
    }

    return (
        <div className={styles.container}>
            <header className={styles.pageHeader}>
                <Link to="/admin/requests" className={styles.backLink}>← Back to Requests</Link>
                <h1>Leave Details</h1>
                <p>Your student’s leave details at a glance...</p>
            </header>

            <div className={styles.studentInfoCard}>
                <div>
                    <h2>{request.student}</h2>
                    <p>ID: {request.studentId}</p>
                    <p>Dates: {request.startDate} - {request.endDate}</p>
                </div>
                <img src={adminAvatar} alt={request.student} />
            </div>

            <div className={styles.detailsCard}>
                <h2>Description</h2>
                <div className={styles.detailItem}>
                    <span>Type :</span>
                    <strong>{request.type}</strong>
                </div>
                <div className={styles.detailItem}>
                    <span>Reason :</span>
                    <strong>{request.reason}</strong>
                </div>
                <div className={styles.detailItem}>
                    <span>Submitted on :</span>
                    <strong>{request.submitted}</strong>
                </div>
            </div>

            <div className={styles.actionCard}>
                <textarea placeholder='Reason of rejection (optional)...'></textarea>
                <div className={styles.actionButtons}>
                    <button className={styles.approveButton}>Approve</button>
                    <button className={styles.rejectButton}>Reject</button>
                </div>
            </div>
        </div>
    );
};

export default AdminReviewRequestLeaveDetails;