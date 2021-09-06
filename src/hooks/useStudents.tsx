import axios from "axios";
import { useCallback } from "react";
import { IUser } from "types/types";

const useStudents = () => {
  const getStudents = useCallback(async (groupID = ""): Promise<IUser[] | undefined> => {
    try {
      const { data } = await axios.get(`/students/${groupID}`);
      return data.students;
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getGroups = useCallback(async (): Promise<string[] | undefined> => {
    try {
      const { data } = await axios.get(`/groups`);
      return data.groups;
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { getStudents, getGroups };
};

export default useStudents;
