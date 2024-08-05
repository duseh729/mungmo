import { color } from "../../constant/style";

const UpdateTitle = () => {
  return (
    <div style={{padding: '32px 0 28px 0'}}>
      <h1 className="text24" style={{color: color.gray900, fontWeight: 300}}>
        <span className="bold-text">강아지 정보</span>를 입력해 주세요!
      </h1>
      <p className="text14" style={{color: color.gray600, marginTop: 8}}>입력된 정보는 더 정확한 AI답변을 위해서만 사용돼요.</p>
    </div>
  );
};

export default UpdateTitle;
