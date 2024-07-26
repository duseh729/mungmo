import Button from "./Button";

const ToLoginComponent = ({children})=>{
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: 'center', gap:52 }}>
      <p className="text24">
        {children}
      </p>
      <Button>로그인하러 가기</Button>
    </div>
  )
}

export default ToLoginComponent;