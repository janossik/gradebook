import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pages from "utils/pages";

const Authorized = () => (
  <Router>
    <MainTemplate>
      <Switch>
        {pages.map(({ path, View }) => {
          return path !== "/" && <Route key={path} path={path} component={View} />;
        })}
      </Switch>
    </MainTemplate>
  </Router>
);

const Unauthorized = ({ setAuthorized }: { setAuthorized: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <Router>
    <div>
      <div>
        <div>
          <p>email</p>
          <input type="text" />
        </div>
        <div>
          <p>password</p>
          <input type="password" />
        </div>
        <div>
          <p></p>
          <button
            onClick={() => {
              setAuthorized(true);
            }}
          >
            login
          </button>
        </div>
      </div>
    </div>
  </Router>
);

const Root = () => {
  const [authorized, setAuthorized] = useState(true);
  return authorized ? <Authorized /> : <Unauthorized setAuthorized={setAuthorized} />;
};

export default Root;
