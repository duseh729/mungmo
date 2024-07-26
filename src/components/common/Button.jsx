import { color as colorConstant } from "../../constant/style";

const Button = ({ children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color !== "white" ? "black" : "white",
        color: color !== "white" ? "white" : "black",
        borderRadius: "10px",
        width: "100%",
        padding: "14px",
        fontWeight: 700,
        border: color === "white" ? `1px solid ${colorConstant.gray200}` : null,
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};

export default Button;
