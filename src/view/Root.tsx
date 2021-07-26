import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import viewStorage from "utils/viewStorage";

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          {viewStorage.map(({ path, view }) => (
            <Route key={path} path={path} component={view} />
          ))}
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
