import styles from './AdminProfile.module.css';
import adminAvatar from '../../../assets/avatar.png';

const InfoRow = ({ label, value }) => (
  <div className={styles.infoRow}>
    <span className={styles.infoLabel}>{label}</span>
    <span className={styles.infoValue}>{value}</span>
  </div>
);

const AdminProfile = () => {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Profile</h1>
        <p>Your profile dashboard at a glance...</p>
      </header>

      <div className={styles.profileHeaderCard}>
        <div className={styles.avatarSection}>
          <img src={adminAvatar} alt="Admin Avatar" />
        </div>
        <div className={styles.detailsSection}>
          <h2>Mrs. Archana Bhakti</h2>
          <p>+91 7828379929</p>
          <p>Warden, Block A & C</p>
        </div>
        <button className={styles.editButton}>Edit</button>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <h3>Contact Information</h3>
          <InfoRow label="Email" value="archana.bhakti@gmail.com" />
          <InfoRow label="Phone" value="+91 7828379929" />
          <InfoRow label="Office Hours" value="8:00 AM - 4:00 PM" />
          <InfoRow label="Staff ID" value="STAFF001" />
        </div>
        <div className={styles.infoCard}>
          <h3>System Information</h3>
          <InfoRow label="Emergency Contact Name" value="Mr. Amrish" />
          <InfoRow label="Emergency Contact" value="+91 8767324578" />
          <InfoRow label="Last Login" value="5 Jul 2025, 12:48 PM" />
          <InfoRow label="Password" value="••••••••" />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;