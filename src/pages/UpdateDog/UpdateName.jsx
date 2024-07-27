// 1번
import Header from "../../components/common/Header";
import UpdateTitle from "../../components/UpdateDog/UpdateTitle";
import Input from "../../components/UpdateDog/Input";
import Button from "../../components/common/Button";

const UpdateName = () => {
  return (
    <>
      <Header closeClick={() => {}}>1/5</Header>

      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: '93vh' }}>
        <div>
          <UpdateTitle />
          <Input label={"이름"} type={"text"}></Input>
        </div>

        <Button>다음</Button>
      </div>
    </>
  );
};

export default UpdateName;
