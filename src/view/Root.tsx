import { useAuth } from "hooks/useAuth";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";

const Root = () => (useAuth().authUser ? <Authorized /> : <Unauthorized />);

export default Root;
