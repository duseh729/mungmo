import styles from "../../css/MainPage/Profile.module.scss";

import { color } from "../../constant/style";

const LoginProfile = ({ userName, dogType, profileContents }) => {
  const dogs = ["골든 리트리버", "기본", "말티즈", "밥그릇", "비숑프리제", "시바 이누", "시츄", "웰시코기", "치와와", "포메라니안", "푸들", "프렌치 불독"];
  const contents = [
    ["나이", "birth"],
    ["몸무게", "weight"],
    ["산책 목표", "walkGoal"],
  ];

  return (
    <>
      <div style={{ marginTop: "16px" }}>
        <h1 style={{ color: color.primaryColor }} className="bold-text text24 letter-spacing8">
          {userName}
        </h1>
        <h1 className="text24 letter-spacing8">보호자님, 오늘은 어떤 하루인가요?</h1>
      </div>

      <div
        style={{
          background: `linear-gradient(to bottom right, ${color.lightPrimaryColor} 10%, ${color.primaryColor}) 90%`,
        }}
        className={styles.profileContainer}
      >
        {dogs.find(dog => dog === dogType) ? <img src={`/img/dogProfile/${dogType}.png`} alt="" /> : <img src="/img/dogProfile/기본.png" alt="" />}

        <div style={{ textAlign: "center" }}>
          <span style={{ color: color.primaryColor, backgroundColor: "white" }} className={`semi-bold-text text14 letter-spacing2 ${styles.profileState}`}>
            {dogType}
          </span>

          <h1 style={{ color: "white", margin: "6px 0 6px 0" }} className="bold-text text28 letter-spacing2">
            {userName}
          </h1>

          <p style={{ color: "white" }} className="text14 letter-spacing2">
            {profileContents.info}
          </p>
        </div>

        <div
          style={{
            background: `linear-gradient(to right, ${color.lightPrimaryColor}, ${color.primaryColor})`,
          }}
          className={styles.profileContentsWrapper}
        >
          {contents.map(key => (
            <div key={key}>
              <p style={{ opacity: 0.5, fontSize: 14 }}>{key[0]}</p>
              <p className="text18 bold-text">{profileContents[key[1]] == null ? "-" : profileContents[key[1]]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginProfile;
