export default function Login() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login account</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>Your email</label>
        <input
          type="email"
          placeholder="name@company.com"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginTop: "6px",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Password</label>
        <input
          type="password"
          placeholder="............"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginTop: "6px",
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          padding: "10px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Login an account
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "12px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        Already have an account?
        <a href="http://localhost:5173/register">Register here</a>
      </p>
    </div>
  );
}
