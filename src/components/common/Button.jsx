import { color as colorConstant } from "../../constant/style";

const Button = ({ children, color=colorConstant.gray900, bgColor=null,  onClick, isDisabled=false }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isDisabled ? colorConstant.gray400 : color !== "white" ? bgColor!=null ? bgColor : color : "white",
        color: isDisabled ? colorConstant.gray600 : color === "white" ?  colorConstant.gray800 : "white",
        borderRadius: "10px",
        width: "100%",
        padding: "19px",
        border: color === "white" ? `1px solid ${colorConstant.gray200}` : null,
        cursor: isDisabled ? 'auto' : 'pointer',
        fontFamily: "SUIT-Bold",
        // lineHeight:'140%'
      }}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
