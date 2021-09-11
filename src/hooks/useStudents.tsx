import axios from "axios";
import { useCallback } from "react";
import { IUser } from "types/types";
import { useError } from "./useError";

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

const useStudents = () => {
  const [, dispatchError] = useError();
  const getStudentsByGroup = useCallback(
    async (groupID = ""): Promise<IUser[] | undefined> => {
      try {
        const { data } = await studentsAPI.get(`/groups/${groupID}`);
        return data.students;
      } catch (e) {
        dispatchError({ message: `You cant get students from the group ${groupID}` });
      }
    },
    [dispatchError]
  );
  const getStudentById = useCallback(
    async (studentId = ""): Promise<IUser | undefined> => {
      try {
        const { data } = await studentsAPI.get(`/students/${studentId}`);
        return data.student;
      } catch (e) {
        dispatchError({ message: `We can't find the student with this id ${studentId}` });
      }
    },
    [dispatchError]
  );

  const getGroups = useCallback(async (): Promise<string[] | undefined> => {
    try {
      const { data } = await studentsAPI.get(`/groups`);
      return data.groups;
    } catch (e) {
      dispatchError({ message: `You can't get groups :c` });
    }
  }, [dispatchError]);

  return { getStudentsByGroup, getStudentById, getGroups };
};

export default useStudents;
