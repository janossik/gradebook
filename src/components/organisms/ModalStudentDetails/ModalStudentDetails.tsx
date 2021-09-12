import { useState } from "react";
import Button from "components/atoms/Button/Button";
import Modal from "components/molecules/Modal/Modal";
import StudentDetails from "../StudentDetails/StudentDetails";
import { PropsUserListItem } from "types/types";

const ModalStudentDetails = (props: PropsUserListItem) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {props.id && (
        <>
          <Modal active={active} closeAction={() => setActive(false)}>
            <StudentDetails {...props} />
          </Modal>
          <Button onClick={() => setActive(true)}>show</Button>
        </>
      )}
    </>
  );
};

export default ModalStudentDetails;
