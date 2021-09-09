import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import pages from "utils/pages";
import { ITeacher } from "types/types";
import axios from "axios";

const Authorized = () => (
  <Router>
    <MainTemplate>
      <Switch>
        {pages.map(({ path, View }) => (
          <Route key={path} path={path} component={View} />
        ))}
        <Redirect to="/dashboard/" path="/" />
      </Switch>
    </MainTemplate>
  </Router>
);

type Inputs = {
  login: string;
  password: string;
};

const Unauthorized = ({ handleSignIn }: { handleSignIn: (data: { login: string; password: string }) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <div>
        <input {...register("login", { required: true })} placeholder="email" name="login" />
        {errors.login && <span> {" < "} This field is required</span>}
      </div>
      <div>
        <input {...register("password", { required: true })} placeholder="password" name="password" type="password" />
        {errors.password && <span> {" < "} This field is required</span>}
      </div>

      <button type="submit">Log in</button>
    </form>
  );
};

const useAuth = <T extends {}>(urlCheckToken: string = "/me") => {
  const [authUser, setAuthUser] = useState<T | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const configQuery = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(urlCheckToken, configQuery);
        setAuthUser(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [urlCheckToken]);

  const handleSignIn = async ({ login, password }: { login: string; password: string }) => {
    const { data } = await axios.post("/login", {
      login,
      password,
    });
    setAuthUser(data);
    localStorage.setItem("token", data.token);
  };

  return { user: [authUser, setAuthUser], handleSignIn };
};

const Root = () => {
  const [authorizedUser, setAuthorizedUser] = useState<ITeacher | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("/me", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setAuthorizedUser(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const handleSignIn = ({ login, password }: { login: string; password: string }) => {
    axios
      .post("/login", {
        login,
        password,
      })
      .then((response) => {
        setAuthorizedUser(response.data);
        localStorage.setItem("token", response.data.token);
      });
  };

  return authorizedUser ? <Authorized /> : <Unauthorized handleSignIn={handleSignIn} />;
};

export default Root;
