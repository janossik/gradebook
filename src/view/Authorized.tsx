import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Switch, Route, Redirect } from "react-router-dom";
import pages from "utils/pages";

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

export default Authorized;
