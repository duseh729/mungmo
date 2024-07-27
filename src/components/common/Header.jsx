
const Header = ({ children, onClick, hamburgerClick, zIndexTop }) => {
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
          padding: 10,
          position: "fixed",
          width: 375,
          top: 0,
        }}
      >
        <button onClick={onClick} style={{ position: "absolute", left: 12, top: 6, cursor: "pointer" }}>
          <img src="/img/icons/left-arrow.png" alt="" />
        </button>

        <span style={{ margin: "auto" }} className="bold-text">
          {children}
        </span>

        {hamburgerClick && (
          <button onClick={hamburgerClick} style={{ position: "absolute", right: 12, top: 6, cursor: "pointer" }}>
            <img src="/img/icons/hamburger.png" alt="" />
          </button>
        )}
      </div>

      <div style={{ height: 40 }}></div>
    </div>
  );
};

export default Header;
