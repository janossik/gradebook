import { useReducer } from "react";

enum actionTypes {
  RESET = "RESET",
  INPUT_CHANGE = "INPUT_CHANGE",
  CONSENT_TOGGLE = "CONSENT_TOGGLE",
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "RESET":
      return action.initialValues;
    case "INPUT_CHANGE":
      return { ...state, [action.field]: action.value };
    case "CONSENT_TOGGLE":
      return { ...state, [action.field]: !state[action.field] };
    default:
      return state;
  }
};

const useForm = (initialValues: any) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const handleClearForm = () => {
    dispatch({ type: actionTypes.RESET, initialValues });
  };
  const handleInputChange = (field: string, value: any) => {
    dispatch({ type: actionTypes.INPUT_CHANGE, field, value });
  };
  const handleToggleConsent = (field: string) => {
    dispatch({ type: actionTypes.CONSENT_TOGGLE, field });
  };

  return { state, dispatch, handleClearForm, handleInputChange, handleToggleConsent };
};

export default useForm;
