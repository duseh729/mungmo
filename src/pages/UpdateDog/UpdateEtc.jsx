// 2번
import Header from "../../components/common/Header";
import UpdateTitle from "../../components/UpdateDog/UpdateTitle";
import Input from "../../components/UpdateDog/Input";
import Button from "../../components/common/Button";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dogInputState } from "../../recoil/dog";
import { useRecoilState } from "recoil";
import { color } from "../../constant/style";
import { signup } from "../../apis/api/socialLogin";

const UpdateEtc = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState("");

  const [dogInput, setDogInput] = useRecoilState(dogInputState);

  // console.log(dogInput);

  return (
    <>
      <Header closeClick={() => {}}>5/5</Header>

      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "93vh" }}>
        <div>
          <UpdateTitle />
          <Input label={"질환 / 수술"} type={"text"} setIsDisabled={setIsDisabled} value={value} setValue={setValue}></Input>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Button
            color={"white"}
            bgColor={color.gray100}
            onClick={async () => {
              // console.log(dogInput);
              setDogInput({ ...dogInput, etc: value });
              const token = sessionStorage.getItem("kat");
              
              const result = await signup(token, 1, dogInput);

              if(result.httpStatusCode===201){
                sessionStorage.removeItem("kat");
                navigate('/');
              }
            }}
          >
            스킵하기
          </Button>
          <Button
            onClick={async () => {
              setDogInput({ ...dogInput, etc: value });
              const token = sessionStorage.getItem("kat");
              
              const result = await signup(token, 1, dogInput);
              
              if(result.httpStatusCode===201){
                sessionStorage.removeItem("kat");
                navigate('/');
              }
            }}
          >
            완료
          </Button>
        </div>
      </div>
    </>
  );
};

export default UpdateEtc;
