import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import viewStorage from "utils/viewStorage";

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          {viewStorage.map(({ path, page }) => (
            <Route key={path} path={path}>
              {page}
            </Route>
          ))}
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default Root;
