import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import pages from "utils/pages";
import { ITeacher } from "types/types";
import axios from "axios";
import { AuthContext, AuthProvider, useAuth } from "hooks/useAuth";

const Authorized = () => (
  <MainTemplate>
    <Switch>
      {pages.map(({ path, View }) => (
        <Route key={path} path={path} component={View} />
      ))}
      <Redirect to="/dashboard/" path="/" />
    </Switch>
  </MainTemplate>
);

type Inputs = {
  login: string;
  password: string;
};

const Unauthorized = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(signIn)}>
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

const Root = () => {
  const { authUser } = useAuth();

  return authUser ? <Authorized /> : <Unauthorized />;
};

export default Root;
