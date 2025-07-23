import styles from './AdminDashboard.module.css';
import adminAvatar from '../../../assets/avatar.png';

const StatCard = ({ title, value, bgColor, link }) => (
    <a href={link} className={styles.statCard} style={{ backgroundColor: bgColor }}>
        <div className={styles.cardContent}>
            <p>{title}</p>
            <span>{value}</span>
        </div>
    </a>
);

const ActivityItem = ({ user, type, time, status }) => {
    const statusClass = {
        Pending: styles.pending,
        Approved: styles.approved,
        Rejected: styles.rejected
    }[status];

    return (
        <div className={styles.activityItem}>
            <div className={styles.activityUser}>
                <img src={adminAvatar} alt="User Avatar" />
                <div>
                    <h4>{user}</h4>
                    <p>{type}</p>
                </div>
            </div>
            <div className={styles.activityStatus}>
                <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
                <span className={styles.time}>{time}</span>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className={styles.dashboard}>
            <header className={styles.pageHeader}>
                <h1>Admin Dashboard</h1>
                <p>Your student’s leave summary at a glance...</p>
            </header>

            <div className={styles.statsGrid}>
                <StatCard title="Total Leaves (month)" value="120" bgColor="#FFFFFF" link="#" />
                <StatCard title="Leaves Approved" value="95" bgColor="#10B981" link="#" />
                <StatCard title="Pending Leaves" value="15" bgColor="#F59E0B" link="#" />
                <StatCard title="Rejected Leaves" value="10" bgColor="#EF4444" link="#" />
            </div>

            <section className={styles.activitySection}>
                <div className={styles.sectionHeader}>
                    <h2>Recent Activity</h2>
                    <div>
                        <button className={styles.actionButton} style={{backgroundColor: '#10B981'}}>Approve All</button>
                        <button className={styles.actionButton} style={{backgroundColor: '#EF4444'}}>Reject All</button>
                    </div>
                </div>
                <div className={styles.activityList}>
                   <ActivityItem user="Ethan Carter" type="Vacation Request" time="2h ago" status="Pending" />
                   <ActivityItem user="Olivia Chen" type="Sick Leave" time="4d ago" status="Approved" />
                   <ActivityItem user="Liam Rodriguez" type="Personal Day" time="7d ago" status="Rejected" />
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;