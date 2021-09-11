import Alert from "components/molecules/Alert/Alert";
import { useAuth } from "hooks/useAuth";
import { useError } from "hooks/useError";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";

const Root = () => {
  const { authUser } = useAuth();
  const [error] = useError();

  return (
    <>
      {error ? <Alert {...error} /> : null}
      {authUser ? <Authorized /> : <Unauthorized />}
    </>
  );
};
export default Root;
