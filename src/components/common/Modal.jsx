import styles from "../../css/common/Modal.module.scss"

import Button from "./Button";

const Modal = ({ children, leftBtn, rightBtn }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContents}>
        <div>
          <img src="/img/icons/check.png" alt="" />
        </div>
        <p className="bold-text text18 letter-spacing8">{children}</p>
        <div style={{ width: "100%", display: "flex", gap: 8 }}>
          <Button onClick={leftBtn.onClick} color={"white"}>{leftBtn.text}</Button>
          <Button onClick={rightBtn.onClick}>{rightBtn.text}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
