// 1번
import Header from "../../components/common/Header";
import UpdateTitle from "../../components/UpdateDog/UpdateTitle";
import Input from "../../components/UpdateDog/Input";
import Button from "../../components/common/Button";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dogInputState } from "../../recoil/dog";

const UpdateName = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [dogInput, setDogInput] = useRecoilState(dogInputState);

  return (
    <>
      <Header closeClick={() => {}}>1/5</Header>

      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "93vh" }}>
        <div>
          <UpdateTitle />
          <Input label={"이름"} type={"text"} setIsDisabled={setIsDisabled} value={value} setValue={setValue}></Input>
        </div>

        <Button
          onClick={() => {
            navigate("/breed");
            setDogInput({name: value})
          }}
          isDisabled={isDisabled}
        >
          다음
        </Button>
      </div>
    </>
  );
};

export default UpdateName;
