import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import ToLoginComponent from "../components/common/ToLoginComponent";
import Modal from "../components/common/Modal";

import { color } from "../constant/style";

import { useRecoilState } from "recoil";
import { isLoginState } from "../recoil/user";
import { logoutModalState, quitModalState } from "../recoil/myPage";

const MyPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [logoutModal, setLogoutModal] = useRecoilState(logoutModalState);
  const [quitModal, setQuitModal] = useRecoilState(quitModalState);

  const menu = [
    { title: "profile", contents: "프로필 수정", arrow: false, onClick: () => {navigate('/profile-update')} },
    { title: "mail", contents: "문의 메일", arrow: false, onClick: () => {} },
    { title: "logout", contents: "로그아웃", arrow: true, onClick: () => {setLogoutModal(true)} },
    { title: "version", contents: "버전 0.0.1", arrow: false, onClick: () => {} },
    { title: "quit", contents: "탈퇴하기", arrow: true, onClick: () => {setQuitModal(true)} },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* 로그아웃 모달 */}
      {logoutModal && (
        <Modal leftBtn={{ onClick: () => {setLogoutModal(false)}, text: "취소" }} rightBtn={{ onClick: () => {}, text: "로그아웃" }}>
          로그아웃 하시겠어요?
        </Modal>
      )}

      {/* 회원탈퇴 모달  */}
      {quitModal && (
        <Modal leftBtn={{ onClick: () => {setQuitModal(false)}, text: "취소" }} rightBtn={{ onClick: () => {}, text: "로그아웃" }} red={true}>
          탈퇴 시 모든 데이터가 삭제되어
          <br />
          복구가 어려워요.
          <br />
          정말 탈퇴하시겠어요?
        </Modal>
      )}

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

const MyPageNavigationItem = ({ menuData }) => {
  return (
    <div
      onClick={menuData.onClick}
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
