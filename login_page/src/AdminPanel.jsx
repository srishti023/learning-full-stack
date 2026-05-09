// AdminPanel.jsx
import React from "react";

const AdminPanel = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Editor" },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Admin Panel</h2>

        <ul style={styles.menu}>
          <li style={styles.menuItem}>Dashboard</li>
          <li style={styles.menuItem}>Users</li>
          <li style={styles.menuItem}>Settings</li>
          <li style={styles.menuItem}>Reports</li>
          <li style={styles.menuItem}>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <h1>Dashboard</h1>

        {/* Cards */}
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Total Users</h3>
            <p>150</p>
          </div>

          <div style={styles.card}>
            <h3>Total Sales</h3>
            <p>$12,500</p>
          </div>

          <div style={styles.card}>
            <h3>Active Orders</h3>
            <p>45</p>
          </div>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <h2>User List</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={styles.td}>{user.id}</td>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: "20px",
  },

  logo: {
    marginBottom: "30px",
    textAlign: "center",
  },

  menu: {
    listStyle: "none",
    padding: 0,
  },

  menuItem: {
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#334155",
    borderRadius: "5px",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "30px",
    backgroundColor: "#f1f5f9",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    marginBottom: "30px",
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  tableContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },

  th: {
    backgroundColor: "#e2e8f0",
    padding: "12px",
    textAlign: "left",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
};

export default AdminPanel;