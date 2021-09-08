import Modal from "components/molecules/Modal/Modal";
import { useState } from "react";

const GradesPage: React.FC = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  return (
    <div>
      <Modal active={active1} setActive={setActive1}>
        <>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas pariatur a quidem nostrum, minima
          soluta totam nemo nesciunt dolorem obcaecati porro fugit non rerum dolor dignissimos ut placeat libero.
        </>
      </Modal>
      <button
        onClick={() => {
          setActive1(true);
        }}
      >
        show modal 1
      </button>
      <Modal active={active2} setActive={setActive2}>
        <>2</>
      </Modal>
      <button
        onClick={() => {
          setActive2(true);
        }}
      >
        show modal 2
      </button>
      <Modal active={active3} setActive={setActive3}>
        <>3</>
      </Modal>
      <button
        onClick={() => {
          setActive3(true);
        }}
      >
        show modal 3
      </button>
    </div>
  );
};

export default GradesPage;
