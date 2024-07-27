import { useState } from "react";

import styles from "../../css/UpdateDog/Input.module.scss";

const Input = ({ label, type }) => {
  const [value, setValue] = useState("");
  const placeholderText = {
    "이름": "이름을 입력해 주세요.",
    "무게": "무게를 입력해 주세요.",
    "출생연도": "출생연도를 입력해 주세요.",
    "질환 / 수술": "예시) 댕댕이는 2년 전에 슬개골 탈구 수술을 했어요.",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <span>{label}</span>

      <input
        type={type}
        name="temp"
        onChange={e => {
          setValue(e.target.value);
        }}
        className={styles.input}
        placeholder={placeholderText[label]}
      />

      <div style={{ position: "absolute", right: 0, bottom: -24 }}>
        {type == "text" ? label == "이름" ? <span>{`${value.length}/15`}</span> : <span>{`${value.length}/100`}</span> : null}
      </div>
    </div>
  );
};

export default Input;
