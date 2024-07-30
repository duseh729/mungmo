import { useNavigate } from "react-router-dom";

const Header = ({ children, onClick, hamburgerClick, closeClick, zIndexTop }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          zIndex: zIndexTop ? 999 : 9,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center", 
          alignItems: "center",
          backgroundColor: "white",
          padding: "14px 10px",
          position: "fixed",
          width: 375,
          height: 48,
          top: 0,
        }}
      >
        <button onClick={()=>{navigate(-1)}} style={{ position: "absolute", left: 12, top: 12, cursor: "pointer" }}>
          <img  style={{display: 'block'}} src="/img/icons/left-arrow.png" alt="" />
        </button>

        <span style={{ margin: "auto" }} className="bold-text">
          {children}
        </span>

        {hamburgerClick && (
          <button onClick={hamburgerClick} style={{ position: "absolute", right: 12, top: 12, cursor: "pointer" }}>
            <img style={{display: 'block'}} src="/img/icons/hamburger.png" alt="" />
          </button>
        )}

        {closeClick && 
          <button onClick={closeClick} style={{ position: "absolute", right: 12, top: 12, cursor: "pointer" }}>
            <img src="/img/icons/close.png" alt="" />
          </button>}
      </div>
    </div>
  );
};

export default Header;
