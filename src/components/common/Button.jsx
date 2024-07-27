import { color as colorConstant } from "../../constant/style";

const Button = ({ children, color='black', bgColor=null,  onClick, isDisabled=false }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isDisabled ? colorConstant.gray400 : color !== "white" ? bgColor!=null ? bgColor : color : "white",
        color: isDisabled ? colorConstant.gray600 : color !== "white" ? "white" : color,
        borderRadius: "10px",
        width: "100%",
        padding: "14px",
        fontWeight: 700,
        border: color === "white" ? `1px solid ${colorConstant.gray200}` : null,
        cursor: 'pointer'
      }}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
