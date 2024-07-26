import { color } from "../../constant/style";

const Question = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "right", padding: '16px 0' }}>
      <div style={{ backgroundColor: color.gray800, maxWidth: 227, borderRadius: "16px 0 16px 16px", padding: "12px 16px" }}>
        <span style={{ color: "white" }}>{children}</span>
      </div>
    </div>
  );
};

export default Question;
