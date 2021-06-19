import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path='/user'>
          <UserPage/>
      </Route>
    </Switch>
  );
};

export default Routes;
