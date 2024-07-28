import React, { useState, useEffect } from "react";
import styles from "../../css/UpdateDog/Input.module.scss";
import { color } from "../../constant/style";

const options = ["직접 입력", "말티즈", "프렌치 불독", "푸들", "포메라니안", "치와와", "시츄", "비숑프리제", "리트리버", "웰시코기", "시바 이누"];

const Input = ({ label, type, setIsDisabled, value, setValue }) => {
  const [maxTrigger, setMaxTrigger] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (value.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [value]);

  const placeholderText = {
    이름: "이름을 입력해 주세요.",
    "무게 / kg": "무게를 입력해 주세요.",
    출생연도: "출생연도를 입력해 주세요.",
    "질환 / 수술": "예시) 댕댕이는 2년 전에 슬개골 탈구 수술을 했어요.",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <div>
        <span>{`${label}`}</span>
        {maxTrigger ? (
          label === "이름" ? (
            <span style={{ color: "#ff4242" }}>15글자 이내로 입력해 주세요.</span>
          ) : label === "무게 / kg" ? (
            <span style={{ color: "#ff4242" }}>100이하의 숫자만 입력해 주세요.</span>
          ) : label === "출생연도" ? (
            <span style={{ color: "#ff4242" }}>출생연도 형식이 잘못되었어요. ex) 2024</span>
          ) : label === "질환 / 수술" ? (
            <span style={{ color: "#ff4242" }}>100글자 이내로 입력해 주세요.</span>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>

      {type === "dropdown" ? (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="temp"
            className={styles.input}
            placeholder={"직접 입력"}
            value={value}
            onClick={() => setModalOpen(true)}
            readOnly
            style={{ cursor: "pointer" }}
          />
          <img
            style={{ position: "absolute", right: 16, top: "30%", cursor: "pointer" }}
            src="/img/icons/down-arrow.png"
            alt="arrow"
            onClick={() => setModalOpen(true)}
          />
        </div>
      ) : label === "질환 / 수술" ? (
        <textarea
          onChange={e => {
            const inputValue = e.target.value;
            let isValid = true;

            // 기타 검증
            if (label == "질환 / 수술" && inputValue.length >= 101) {
              setMaxTrigger(true);
              isValid = false;
            }

            // 유효한 값인 경우에만 value 업데이트
            if (isValid) {
              setMaxTrigger(false);
              setValue(inputValue);
            }
          }}
          className={`${styles.input} ${maxTrigger ? styles.inputOverMax : ""} semi-bold-text`}
          placeholder={placeholderText[label]}
          value={value}
          onBlur={() => {
            setMaxTrigger(false);
            setIsDisabled(false);
          }}
          style={{ height: 181, fontSize: 16 }}
        />
      ) : (
        <input
          type={type}
          onChange={e => {
            const inputValue = e.target.value;
            let isValid = true;

            // 길이 검증 (이름)
            if (label === "이름" && inputValue.length >= 16) {
              setMaxTrigger(true);
              isValid = false;
            }

            // 무게 검증
            if (label === "무게 / kg" && inputValue > 100) {
              setMaxTrigger(true);
              isValid = false;
            }

            // 출생연도 검증
            if (label === "출생연도" && (inputValue === "0" || inputValue.length > 4 || inputValue > 2024)) {
              setMaxTrigger(true);
              isValid = false;
            }

            // 유효한 값인 경우에만 value 업데이트
            if (isValid) {
              setMaxTrigger(false);
              setValue(inputValue);
            }
          }}
          className={`${styles.input} ${maxTrigger ? styles.inputOverMax : ""}`}
          placeholder={placeholderText[label]}
          value={value}
          onBlur={() => {
            setMaxTrigger(false);
            setIsDisabled(false);
          }}
        />
      )}

      <div style={{ position: "absolute", right: 0, bottom: -24 }}>
        {type === "text" && <span>{label === "이름" ? `${value.length}/15` : `${value.length}/100`}</span>}
      </div>

      {modalOpen && (
        <>
          <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}></div>
          <div
            className={styles.modal}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "space-between",
            }}
          >
            {options.map((item, index) => (
              <ModalItem key={index} title={item} setValue={setValue} setModalOpen={setModalOpen} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ModalItem = ({ title, setValue, setModalOpen }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        style={{
          width: title === "직접 입력" ? "66%" : "31%",
          border: `1px solid ${color.gray100}`,
          borderRadius: 16,
          padding: 20,
          display: "flex",
          gap: 12,
          flexDirection: "column",
          cursor: "pointer",
        }}
        onClick={() => {
          if (title === "직접 입력") {
            setClicked(!clicked);
          } else {
            setValue(title);
            setModalOpen(false);
          }
        }}
      >
        <img style={{ width: 28, height: 28 }} src={`/img/dogProfileSmall/${title}.png`} alt="" />
        <span className="bold-text text16">{title}</span>
      {clicked && title === "직접 입력" && (
        <div >
          <input
            type="text"
            placeholder="직접 입력"
            onChange={e => setValue(e.target.value)}
            style={{
              marginTop: 10,
              padding: 8,
              borderRadius: 8,
              border: `1px solid ${color.gray100}`,
              position: 'absolute',
              width:"80%"
            }}
            onClick={e => e.stopPropagation()}
            className={`${styles.input} semi-bold-text`}
          />
        </div>
      )}
      </div>
    </>
  );
};

export default Input;
