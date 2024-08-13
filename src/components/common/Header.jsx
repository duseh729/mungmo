import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ children, onClick, hamburgerClick, closeClick, zIndexTop }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div>
      <div
        style={{
          zIndex: zIndexTop ? 999 : 9,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-beetween",
          alignItems: "center",
          backgroundColor: "white",
          padding: "14px 10px",
          position: "fixed",
          width: width > 375 ? 375 : width,
          height: 48,
          top: 0,
        }}
      >
        <button onClick={onClick}>
          <img style={{ display: "block" }} src="/img/icons/left-arrow.png" alt="" />
        </button>

        <span style={{ margin: "auto" }} className="bold-text">
          {children}
        </span>

        {hamburgerClick ? (
          <button onClick={hamburgerClick}>
            <img style={{ display: "block" }} src="/img/icons/hamburger.png" alt="" />
          </button>
        ) : !closeClick && <ButtonWrapper />}
        
        {closeClick ? (
          <button onClick={closeClick}>
            <img src="/img/icons/close.png" alt="" />
          </button>
        ) : null }
      </div>
    </div>
  );
};

export default Header;

const ButtonWrapper = styled.button`
  width: 24px;
  height: 24px;
`;
