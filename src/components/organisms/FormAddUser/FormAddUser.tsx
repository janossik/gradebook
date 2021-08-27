import { useContext } from "react";
import useForm from "hooks/useForm";
import { UsersContext } from "providers/UsersProvider";
import FiledInput from "components/molecules/FiledInput/FiledInput";
import { initialValuesFormAddUser, getID, formFields, UserProps } from "utils/utils";
import { Wrapper, Button } from "./FormAddUser.styles";

const FormAddUser = () => {
  const [users, setUsers] = useContext(UsersContext);
  const { state, handleClearForm, handleInputChange, handleToggleConsent } = useForm(initialValuesFormAddUser);

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

      <FiledInput
        type="checkbox"
        name={UserProps.CONSENTS}
        value={state[UserProps.CONSENTS]}
        onChange={({ target: { name } }) => {
          handleToggleConsent(name);
        }}
      >
        Consents
      </FiledInput>
      <Button data-testid="submit">submit</Button>
    </Wrapper>
  );
};

export default FormAddUser;
