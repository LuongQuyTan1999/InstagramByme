import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Route } from "react-router-dom";
import PageAccount from "../PageAccount";
function AccountLayoutRoute({ name, path, exact, route }) {
  const { component: YourComponent } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={routeProps => {
        return (
          <PageAccount name={name}>
            <YourComponent {...routeProps} />
          </PageAccount>
        );
      }}
    />
  );
}

export default withStyles(styles)(AccountLayoutRoute);
