import axios from "axios";
import { useState } from "react";
import { IUser } from "types/types";

const useSearchStudents = () => {
  const [students, setStudents] = useState<IUser[]>([]);
  const [valueInput, setValueInput] = useState<string>("");

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setValueInput(e.target.value);

  const searchHandler = () => {
    (async () => {
      try {
        const { data } = await axios.post(`/search`, { name: valueInput });
        setStudents(data.students);
      } catch (e) {
        console.error(e);
      }
    })();
  };

  return { students, valueInput, inputHandler, searchHandler };
};

export default useSearchStudents;
