const Header = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <img src="/img/icons/left-arrow.png" alt="" />
      <span>산책하기</span>
      <img src="/img/icons/hamburger.png" alt="" />
    </div>
  );
};

export default Header;
