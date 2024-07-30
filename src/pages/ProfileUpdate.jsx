import { useEffect, useState } from "react";

import Header from "../components/common/Header";
import Input from "../components/UpdateDog/Input";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";

import DisabledInput from "../components/ProfileUpdate/DisabledInput";

import { useRecoilState } from "recoil";
import { dogInfoState } from "../recoil/dog";
import { useNavigate } from "react-router-dom";
import { updatePet } from "../apis/api/user";

const ProfileUpdate = () => {
  const navigate = useNavigate();

  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);
  const [userInfo, setUserInfo] = useState({ 이름: "admin", 이메일: "admin@admin.com", "휴대폰 번호": "010-1234-5678" });

  const [nameValue, setNameValue] = useState(dogInfo.name);
  const [breedValue, setBreedValue] = useState(dogInfo.breed);
  const [weightValue, setWeightValue] = useState(dogInfo.weight);
  const [birthValue, setBirthValue] = useState(dogInfo.birth);
  const [walkingGoalValue, setWalkingGoalValue] = useState(dogInfo.walkingGoal);
  const [etcValue, setEtcValue] = useState(dogInfo.etc);

  const [isDisabled, setIsDisabled] = useState(true);
  const [backTrigger, setBackTrigger] = useState(false);
  const [modal, setModal] = useState(false);

  const label = [
    { label: "이름", type: "text", value: nameValue, setValue: setNameValue },
    { label: "견종", type: "dropdown", value: breedValue, setValue: setBreedValue },
    { label: "무게 / kg", type: "number", value: weightValue, setValue: setWeightValue },
    { label: "출생연도", type: "number", value: birthValue, setValue: setBirthValue },
    { label: "목표 산책 시간 / 분", type: "number", value: walkingGoalValue == null ? 0 : walkingGoalValue, setValue: setWalkingGoalValue },
    { label: "질환 / 수술", type: "text", value: etcValue, setValue: setEtcValue },
  ];

  useEffect(() => {
    if (nameValue !== dogInfo.name) {
      setDisableBack(true);
    } else if (breedValue !== dogInfo.breed) {
      setDisableBack(true);
    } else if (weightValue !== dogInfo.weight) {
      setDisableBack(true);
    } else if (birthValue !== dogInfo.birth) {
      setDisableBack(true);
    } else if (walkingGoalValue !== dogInfo.walkingGoal) {
      setDisableBack(true);
    } else if (etcValue !== dogInfo.etc) {
      setDisableBack(true);
    } else {
      setDisableBack(false);
    }
  }, [nameValue, breedValue, weightValue, birthValue, walkingGoalValue, etcValue]);

  function setDisableBack(boolean) {
    setIsDisabled(!boolean);
    setBackTrigger(boolean);
  }

  return (
    <>
      <Header
        onClick={() => {
          if (backTrigger) {
            setModal(true);
          } else {
            navigate(-1);
          }
        }}
      >
        프로필 수정
      </Header>
      {modal && (
        <Modal
          leftBtn={{
            text: "취소",
            onClick: () => {
              setModal(false);
            },
          }}
          rightBtn={{
            text: "나가기",
            onClick: () => {
              navigate(-1);
            },
          }}
        >
          지금 나가시면
          <br />
          변경한 내용이 저장되지 않아요
        </Modal>
      )}
      <div className="container" style={{ overflow: "auto" }}>
        {Object.keys(userInfo).map((item, index) => {
          return (
            <div key={index}>
              <DisabledInput label={item} value={userInfo[item]} />
            </div>
          );
        })}
        {label.map((item, index) => {
          // console.log(item);
          return (
            <div key={index}>
              <Input label={item.label} type={item.type} value={item.value} setValue={item.setValue} />
            </div>
          );
        })}

        <div style={{ height: 92, width: "100%" }}></div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: 375,
          backgroundColor: "white",
          padding: "12px 16px",
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Button
          onClick={async () => {
            console.log(nameValue, breedValue, weightValue, birthValue, etcValue, walkingGoalValue);
            const res = await updatePet(nameValue, breedValue, weightValue, birthValue, etcValue, walkingGoalValue);
            if (res.httpStatusCode == 200) {
              navigate("/");
            }
          }}
          isDisabled={isDisabled}
        >
          수정 완료
        </Button>
      </div>
    </>
  );
};

export default ProfileUpdate;
