import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
