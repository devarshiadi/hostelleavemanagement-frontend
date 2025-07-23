import styles from './Profile.module.css';
import userAvatar from '../../assets/avatar.png'; // Use a good quality avatar image

const InfoField = ({ label, value }) => (
  <div className={styles.field}>
    <label>{label}</label>
    <p>{value}</p>
  </div>
);

const Profile = () => {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div>
          <h1>Profile Settings</h1>
          <p>Manage your personal information, emergency contacts and password</p>
        </div>
        <button className={styles.logoutButton}>Log out</button>
      </header>

      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.avatarContainer}>
            <img src={userAvatar} alt="User Avatar" />
            <button className={styles.changeAvatarButton}>+</button>
          </div>
          <div className={styles.profileInfo}>
            <h3>Alex Xander</h3>
            <p>Student ID : 2025-B-617</p>
            <a href="#">Change Profile Photo</a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <section className={styles.infoSection}>
          <h2>Personal Information</h2>
          <div className={styles.grid}>
            <InfoField label="Full Name" value="Alex Xander" />
            <InfoField label="Email" value="Alexander@gmail.com" />
            <InfoField label="Mobile Number" value="+91 8767096352" />
            <InfoField label="Alternate Mobile Number" value="NA" />
            <InfoField label="Date of Birth" value="14-04-2004" />
            <InfoField label="State" value="Maharashtra" />
            <InfoField label="City" value="Pune" />
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.infoSection}>
          <h2>Emergency Contact</h2>
          <div className={styles.grid}>
            <InfoField label="Emergency Contact Name" value="Habibi" />
            <InfoField label="Emergency Contact Number" value="+91 9767353749" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;