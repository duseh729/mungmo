import React, { useState, useEffect } from "react";
import styles from "../../css/UpdateDog/Input.module.scss";
import { color } from "../../constant/style";

const DisabledInput = ({ label, value }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative", marginBottom: 12 }}>
      <div>
        <span style={{ color: color.gray700, padding: "0 12px" }} className="text14">{`${label}`}</span>
      </div>

      <input
        readOnly
        className={styles.disabledInput}
        value={value}
        onClick={e => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default DisabledInput;
