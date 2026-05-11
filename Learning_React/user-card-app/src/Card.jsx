function Card({ name, phone, email }) {
    return (
      <div style={styles.card}>
        <h3>{name}</h3>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      background: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "250px"
    }
  };
  
  export default Card;