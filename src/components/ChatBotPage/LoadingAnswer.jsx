import { useState, useEffect } from "react";
import { color } from "../../constant/style";

const LoadingAnswer = ({ children }) => {
  const [index, setIndex] = useState(0);
  const temp = [0, 0, 0];

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(index);
      if (index < 2) {
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setIndex(0);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index]);


  return (
    <div style={{ display: "inline-block", maxWidth: 227, padding: "16px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img style={{ width: 32, height: 32 }} src="/img/AIDoctor.png" alt="" /> <span className="text16 bold-text">댕댕닥터</span>
      </div>

      <div
        style={{
          backgroundColor: color.primaryBg,
          position: "relative",
          left: 40,
          padding: "12px 16px",
          borderRadius: "0 16px 16px 16px",
          display: "flex",
          gap: 8,
          width: 74,
        }}
      >
        {temp.map((item, i) => {
          return <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: index!==i ? color.gray500 : color.gray800}}></div>;
        })}
      </div>
    </div>
  );
};

export default LoadingAnswer;
