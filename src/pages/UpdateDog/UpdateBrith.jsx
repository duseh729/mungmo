// 2번
import Header from "../../components/common/Header";
import UpdateTitle from "../../components/UpdateDog/UpdateTitle";
import Input from "../../components/UpdateDog/Input";
import Button from "../../components/common/Button";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dogInputState } from "../../recoil/dog";
import { useRecoilState } from "recoil";

const UpdateBirth = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState("");

  const [dogInput, setDogInput] = useRecoilState(dogInputState);

  return (
    <>
      <Header closeClick={() => {}}>4/5</Header>

      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "93vh" }}>
        <div>
          <UpdateTitle />
          <Input label={"출생연도"} type={"number"} setIsDisabled={setIsDisabled} value={value} setValue={setValue}></Input>
        </div>

        <Button
          onClick={() => {
            navigate("/etc");
            setDogInput({ ...dogInput, birth: value });
          }}
          isDisabled={isDisabled}
        >
          다음
        </Button>
      </div>
    </>
  );
};

export default UpdateBirth;
