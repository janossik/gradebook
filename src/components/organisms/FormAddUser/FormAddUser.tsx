import { useContext, useState } from "react";
import useForm from "hooks/useForm";
import { UsersContext } from "providers/UsersProvider";
import FiledInput from "components/molecules/FiledInput/FiledInput";
import { initialValuesFormAddUser, getID, formFields, UserProps } from "utils/utils";
import { Wrapper, Button } from "./FormAddUser.styles";
import CheckBox from "components/atoms/CheckBox/CheckBox";

const FormAddUser = () => {
  const [users, setUsers] = useContext(UsersContext);
  const { state, handleClearForm, handleInputChange, handleToggleConsent } = useForm(initialValuesFormAddUser);
  const [error, setError] = useState(false);

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (state.consents) {
      const newUser = {
        id: getID(),
        name: `${state[UserProps.FIRSTNAME]} ${state[UserProps.LASTNAME]}`,
        ...state,
      };
      setUsers([...users, newUser]);
      handleClearForm();
    } else {
      setError(true);
    }
  };

  return (
    <Wrapper onSubmit={submit}>
      {formFields.map((props) => (
        <FiledInput
          key={props.name}
          value={state[props.name]}
          onChange={({ target: { name, value } }) => {
            handleInputChange(name, value);
          }}
          {...props}
        />
      ))}
      <p>Consents</p>
      <CheckBox
        name={UserProps.CONSENTS}
        value={state[UserProps.CONSENTS]}
        onClick={() => {
          handleToggleConsent(UserProps.CONSENTS);
          setError(false);
        }}
      />
      {error && <p>You must checking consents!</p>}
      <Button data-testid="submit">submit</Button>
    </Wrapper>
  );
};

export default FormAddUser;
