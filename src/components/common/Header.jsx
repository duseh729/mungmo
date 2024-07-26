const Header = ({ children, onClick, hamburgerClick }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          position: "fixed",
          width: 375,
          top: 0,
          zIndex:9
        }}
      >
        <button onClick={onClick} style={{ position: "absolute", left: 12, top: 6, cursor: "pointer" }}>
          <img src="/img/icons/left-arrow.png" alt="" />
        </button>

        <span style={{ margin: "auto" }}>{children}</span>

        {hamburgerClick && (
          <button onClick={hamburgerClick} style={{ position: "absolute", right: 12, top: 6, cursor: "pointer" }}>
            <img src="/img/icons/hamburger.png" alt="" />
          </button>
        )}
      </div>

      <div style={{height: 40}}></div>
    </div>
  );
};

export default Header;
