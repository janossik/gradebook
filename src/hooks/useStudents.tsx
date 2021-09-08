import axios from "axios";
import { useCallback } from "react";
import { IUser } from "types/types";

const useStudents = () => {
  const getStudentsByGroup = useCallback(async (groupID = ""): Promise<IUser[] | undefined> => {
    try {
      const { data } = await axios.get(`/groups/${groupID}`);
      return data.students;
    } catch (e) {
      console.error(e);
    }
  }, []);
  const getStudentById = useCallback(async (studentId = ""): Promise<IUser | undefined> => {
    try {
      const { data } = await axios.get(`/students/${studentId}`);
      return data.student;
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

  return { getStudentsByGroup, getStudentById, getGroups };
};

export default useStudents;
