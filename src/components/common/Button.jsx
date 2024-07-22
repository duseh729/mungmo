const Button = ({ children }) => {
  return (
    <button style={{ backgroundColor: "black", color: "white", borderRadius: "10px", width: "100%", padding: "14px", fontWeight: 700 }}>{children}</button>
  );
};

export default Button;
