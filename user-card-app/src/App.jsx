import { useState } from "react";
import Card from "./Card";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    setUsers([...users, formData]);

    setFormData({
      name: "",
      phone: "",
      email: ""
    });
  };

  return (
    <div style={styles.container}>
      <h2>User Card Generator</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Create Card
        </button>
      </form>

      <div style={styles.cardContainer}>
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            phone={user.phone}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    background: "#f4f6f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px"
  },
  form: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer"
  },
  cardContainer: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  }
};

export default App;