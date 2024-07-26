import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";

import { color } from "../constant/style";

import { useRecoilState } from "recoil";
import { isLoginState } from "../recoil/user";
import ToLoginComponent from "../components/common/ToLoginComponent";

const MyPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const menu = [
    { title: "profile", contents: "프로필 수정", arrow: false },
    { title: "mail", contents: "문의 메일", arrow: false },
    { title: "logout", contents: "로그아웃", arrow: true },
    { title: "version", contents: "버전 0.0.1", arrow: false },
    { title: "quit", contents: "탈퇴하기", arrow: true },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        onClick={() => {
          navigate(-1);
        }}
        zIndexTop={true}
      >
        MY
      </Header>

      {isLogin ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 16 }}>
          {menu.map((data, index) => (
            <MyPageNavigationItem menuData={data} onClick={() => {}} key={index} />
          ))}
        </div>
      ) : (
        <ToLoginComponent>
          <span className="bold-text">간편 로그인</span>하고
          <br />
          <span className="bold-text">Mungmo</span>를 이용해 보세요!
        </ToLoginComponent>
      )}
    </div>
  );
};

const MyPageNavigationItem = ({ onClick, menuData }) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 16,
        padding: 16,
        backgroundColor: color.gray100,
        cursor: "pointer",
        // right arrow css
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <img src={`/img/myPageIcons/${menuData.title}.png`} alt="" />
        <span className="bold-text" style={{ color: color.gray900 }}>
          {menuData.contents}
        </span>
      </div>

      {menuData.arrow && (
        <div>
          <img src="/img/icons/right-arrow-gray.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default MyPage;
