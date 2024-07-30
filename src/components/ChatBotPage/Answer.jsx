import { color } from "../../constant/style";

const Answer = ({ children }) => {
  return (
    <div style={{ maxWidth: 227, padding: "16px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img style={{ width: 32, height: 32 }} src="/img/doctor-small.svg" alt="" />{" "}
        <span className="text16 bold-text" style={{ color: color.gray800 }}>
          댕댕닥터
        </span>
      </div>

      <div style={{ backgroundColor: color.primaryBg, position: "relative", left: 40, padding: "12px 16px", borderRadius: "0 16px 16px 16px" }}>
        <span style={{ whiteSpace: "pre-wrap", fontFamily: "SUIT-Regular", color: color.gray800 }}>{children}</span>
      </div>
    </div>
  );
};

export default Answer;
