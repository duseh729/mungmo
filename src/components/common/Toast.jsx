const Toast = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 12,
        width: "100%",
        padding: "10px 24px 11px 24px",
        borderRadius: 20,
        boxShadow: "0px 1px 6px 0px #0000001A",
        display: "flex",
        gap: 10,
        alignItems: "center",
        overflow: "hidden",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -80,
          width: 212,
          height: 212,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(12, 134, 247, 0.12) 0%, rgba(12, 134, 247, 0) 100%)",
        }}
      ></div>
      <img style={{ display: "block" }} src="/img/icons/check.png" alt="" />
      <div>
        <span>
          로그인이 필요해요
          <br />
          간편 로그인 후 이용해 보세요!
        </span>
      </div>
    </div>
  );
};

export default Toast;
