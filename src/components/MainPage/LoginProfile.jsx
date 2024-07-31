import styles from "../../css/MainPage/Profile.module.scss";

import { color } from "../../constant/style";

const LoginProfile = ({ userName, dogType, profileContents }) => {
  const dogs = [
    { breed: "골든 리트리버", introduce: "충직하고 온순한 애교쟁이" },
    { breed: "기본", introduce: "에너지 넘치는 사랑스런 귀염둥이" },
    { breed: "말티즈", introduce: "애교 넘치는 천방지축 귀염둥이" },
    { breed: "밥그릇", introduce: "?" },
    { breed: "비숑프리제", introduce: "동글동글 심장폭격기 솜사탕" },
    { breed: "시바 이누", introduce: "개성 넘치는 매력적인 엄살쟁이" },
    { breed: "시츄", introduce: "활발하고 온순한 귀염둥이" },
    { breed: "웰시코기", introduce: "호기심 많은 뒤태 매력 소유자" },
    { breed: "치와와", introduce: "작은 체구의 용감한 파이터" },
    { breed: "포메라니안", introduce: "작고 귀여운 에너지 왕" },
    { breed: "푸들", introduce: "밝고 똑똑한 인기쟁이" },
    { breed: "프렌치 불독", introduce: "영리하고 다정한 장난꾸러기" },
  ];

  const contents = [
    ["나이", `${profileContents["birth"] - new Date().getFullYear() + 1}살`],
    ["몸무게", `${profileContents["weight"]}kg`],
    ["산책 목표", profileContents["walkingGoal"]],
  ];

  return (
    <>
      <div style={{ marginTop: "16px" }}>
        <h1 style={{ color: color.primaryColor }} className="bold-text text24 letter-spacing8">
          {userName}
        </h1>
        <h1 className="text24 letter-spacing8" style={{ fontFamily: "SUIT-Light", fontWeight: 300 }}>
          보호자님, 오늘은 어떤 하루인가요?
        </h1>
      </div>

      <div
        style={{
          background: `linear-gradient(to bottom right, ${color.lightPrimaryColor} 10%, ${color.primaryColor}) 90%`,
        }}
        className={styles.profileContainer}
      >
        {dogs.find(dog => dog.breed === dogType) ? <img src={`/img/dogProfile/${dogType}.png`} alt="" /> : <img src="/img/dogProfile/기본.png" alt="" />}

        <div style={{ textAlign: "center" }}>
          <span style={{ color: color.primaryColor, backgroundColor: "white" }} className={`semi-bold-text text14 letter-spacing2 ${styles.profileState}`}>
            {dogType}
          </span>

          <h1 style={{ color: "white", margin: "6px 0 6px 0" }} className="bold-text text28 letter-spacing2">
            {userName}
          </h1>

          <p style={{ color: "white" }} className="text14 letter-spacing2">
            {dogs.find(dog => dog.breed === dogType)?.introduce || "에너지 넘치는 사랑스런 귀염둥이"} 
          </p>
        </div>

        <div
          style={{
            background: `linear-gradient(to right, ${color.lightPrimaryColor}, ${color.primaryColor})`,
          }}
          className={styles.profileContentsWrapper}
        >
          {contents.map((data, index) => (
            <div key={index}>
              <p style={{ opacity: 0.5, fontSize: 14 }}>{data[0]}</p>
              <p className="text18 bold-text">{data[1] <= 0 ? "-" : index == 2 ? `${data[1]}분` : data[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginProfile;
