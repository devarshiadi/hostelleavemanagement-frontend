# Hostel Leave Management System - Frontend

This is the complete frontend implementation for a Hostel Leave Management System, built with React.js and Vite. The application provides a clean, responsive, and intuitive user interface for both students and administrators to manage leave requests efficiently.

## Features

The application is divided into two main portals, each with its own set of features:

###  STUDENT PORTAL

-   **Authentication:** Secure Sign Up and Sign In pages for students.
-   **Dashboard:** An overview of personal leave statistics, including total leaves taken and pending requests.
-   **Apply for Leave:** A comprehensive form to apply for various types of leave (Sick, Casual, Emergency, etc.).
-   **Leave History:** A timeline view of all past and current leave requests with their statuses (Approved, Pending, Rejected).
-   **Profile Management:** View and manage personal information.
-   **Notifications:** A dedicated page to view all notifications related to leave request status updates.

### ADMIN PORTAL

-   **Separate Authentication:** Secure Sign In and Sign Up for administrators.
-   **Admin Dashboard:** A high-level dashboard with key metrics like total monthly leaves, approvals, rejections, and pending requests.
-   **Review Requests:** A central page to view, approve, or reject incoming leave requests from students.
-   **Leave Details View:** A detailed view for each leave request to help in the decision-making process.
-   **Analytics:** Visual analytics on leave trends, including monthly request volumes and a breakdown by leave type. It also features a list of students with the most leaves, linking to their individual history.
-   **Admin Management:** A settings page to manage system settings, notification preferences, and other administrators.

## Technologies Used

-   **React.js:** A JavaScript library for building user interfaces.
-   **Vite:** A fast and modern frontend build tool.
-   **React Router DOM:** For handling client-side routing and navigation.
-   **CSS Modules:** For locally scoped, component-level styling to avoid class name conflicts.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later)
-   npm (or yarn)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/devarshiadi/hostelleavemanagement-frontend.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd hostelleavemanagement-frontend
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Start the development server:**
    ```sh
    npm run dev
    ```
5.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Available Routes & URL Paths

The application is structured with the following routes:

### Authentication Routes

-   Student Login: `/login`
-   Student Signup: `/signup`
-   Admin Login: `/admin/login`
-   Admin Signup: `/admin/signup`

### Student Routes

-   Dashboard (Home): `/dashboard`
-   Apply for Leave: `/apply-leave`
-   Leave History: `/history`
-   Notifications: `/notifications`
-   Profile: `/profile`

### Admin Routes

-   Admin Dashboard: `/admin/dashboard`
-   Review Requests List: `/admin/requests`
-   Review Request Details: `/admin/requests/:requestId`
-   Analytics: `/admin/analytics`
-   Student-specific History: `/admin/analytics/student/:studentId`
-   Admin Notifications: `/admin/notifications`
-   Admin Profile: `/admin/profile`
-   Admin Settings: `/admin/settings`

### Default Route

-   The root path `/` redirects to the student login page.

---

> **Important Note:** This project is a **frontend-only implementation**. It is designed to showcase the user interface, user experience, and application flow. It does not include a backend server, database, or API integration. All data displayed in the application is currently mocked within the components for demonstration purposes.
