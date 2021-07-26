/* 
  {
    id: "3",
    score: 4.5,
    name: "Cristina Moravia",
    attendance: 0.78,
  },
*/
import { UsersContext } from "providers/UsersProvider";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserList from "../UsersList/UsersList";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

type PropsFiledInput = {
  name: string;
  children: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
};

type TypeFiledInput<Props = {}> = (props: Props & PropsFiledInput) => JSX.Element;

const FiledInput: TypeFiledInput = ({ name, placeholder, children, value, onChange, min, max, step }) => {
  if (typeof value === "number") {
    return (
      <>
        <label htmlFor={name}>{children}</label>
        <input type="number" min={min} max={max} step={step} value={value} onChange={onChange} name={name} required />
      </>
    );
  }
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        minLength={3}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

enum UserProps {
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  SCORE = "score",
  ATTENDANCE = "attendance",
}

const initUser = (firstName?: string, lastName?: string, score?: number, attendance?: number) => ({
  [UserProps.FIRSTNAME]: firstName || "",
  [UserProps.LASTNAME]: lastName || "",
  [UserProps.SCORE]: score || 0,
  [UserProps.ATTENDANCE]: attendance || 0,
});

const FormAddUser = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [user, setUser] = useState(initUser());
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        const currentUsers = users;
        const newUser = {
          id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
          score: user[UserProps.SCORE],
          name: `${user[UserProps.FIRSTNAME]} ${user[UserProps.LASTNAME]}`,
          attendance: user[UserProps.ATTENDANCE],
        };
        currentUsers.push(newUser);
        setUsers(currentUsers);
        setUser(initUser());
      }}
    >
      <FiledInput
        name="firstName"
        placeholder="Write your first name"
        value={user[UserProps.FIRSTNAME]}
        onChange={({ target: { value } }) => {
          setUser(initUser(value, user[UserProps.LASTNAME], user[UserProps.SCORE], user[UserProps.ATTENDANCE]));
        }}
      >
        First name
      </FiledInput>
      <FiledInput
        name="firstName"
        placeholder="Write your first name"
        value={user[UserProps.LASTNAME]}
        onChange={({ target: { value } }) => {
          setUser(initUser(user[UserProps.FIRSTNAME], value, user[UserProps.SCORE], user[UserProps.ATTENDANCE]));
        }}
      >
        First name
      </FiledInput>
      <FiledInput
        min={0}
        max={6}
        step={0.5}
        name="score"
        value={user[UserProps.SCORE]}
        onChange={({ target: { value } }) => {
          if (Number(value) >= 0 && Number(value) <= 6) {
            setUser(
              initUser(user[UserProps.FIRSTNAME], user[UserProps.LASTNAME], Number(value), user[UserProps.ATTENDANCE])
            );
          }
        }}
      >
        Score
      </FiledInput>
      <FiledInput
        min={0}
        max={1}
        step={0.01}
        name="attendance"
        value={user[UserProps.ATTENDANCE]}
        onChange={({ target: { value } }) => {
          const convertValue = Number(value);
          if (convertValue >= 0 && convertValue <= 6) {
            setUser(
              initUser(
                user[UserProps.FIRSTNAME],
                user[UserProps.LASTNAME],
                user[UserProps.SCORE],
                Number(convertValue.toFixed(2))
              )
            );
          }
        }}
      >
        Score
      </FiledInput>
      <button>submit</button>
    </Wrapper>
  );
};

export default FormAddUser;
