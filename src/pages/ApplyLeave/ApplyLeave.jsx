import styles from './ApplyLeave.module.css';

const ApplyLeave = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    alert('Leave Application Submitted!');
  };

  return (
    <div>
      <header className={styles.pageHeader}>
        <h1>Apply for a Leave</h1>
        <p>Your leave application in one step</p>
      </header>

      <form onSubmit={handleSubmit} className={styles.leaveFormContainer}>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <input type="text" id="studentId" placeholder="Student ID" disabled value="STU12345" />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" id="name" placeholder="Name" disabled value="Alex Xander" />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" id="roomNumber" placeholder="Room Number" />
          </div>
          <div className={styles.inputGroup}>
            <select id="leaveType" required>
              <option value="">Select Leave Type...</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="emergency">Emergency Leave</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" id="destination" placeholder="Destination (If not Sick Leave)" />
          </div>
          <div className={styles.inputGroup}>
            <input type="tel" id="contact" placeholder="Contact Number during leave" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" required />
          </div>
          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <textarea id="reason" placeholder="Reason for Leave..." rows="6" required></textarea>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyLeave;