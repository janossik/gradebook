import { useState } from "react";
import Button from "components/atoms/Button/Button";
import Modal from "components/molecules/Modal/Modal";
import StudentDetails from "../StudentDetails/StudentDetails";

const ModalStudentDetails = ({ id, showAll }: { id: string; showAll?: boolean }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {id && (
        <>
          <Modal active={active} closeAction={() => setActive(false)}>
            <StudentDetails id={id} showAll={showAll} />
          </Modal>
          <Button onClick={() => setActive(true)}>show</Button>
        </>
      )}
    </>
  );
};

export default ModalStudentDetails;
