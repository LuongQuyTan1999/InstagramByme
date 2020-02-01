import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Route } from "react-router-dom";
import PersonalPage from "../PersonalPage";
function UserPersonalLayoutRoute({ name, path, exact, route }) {
  const { component: YourComponent } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={routeProps => {
        return (
          <PersonalPage name={name}>
            <YourComponent {...routeProps} />
          </PersonalPage>
        );
      }}
    />
  );
}

export default withStyles(styles)(UserPersonalLayoutRoute);
