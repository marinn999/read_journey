const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "teal",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>Auth</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>Home</div>
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
};

export default Header;
