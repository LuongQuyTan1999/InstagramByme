import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./common/Theme";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { HOME_ROUTES } from "./constants/index";
import { USER_PERSONAL_ROUTES } from "./constants";
import { ACCOUNT_ROUTES } from "./constants";
import UserPersonalLayoutRoute from "./page/UserPersonalLayoutRoute";
import AccountLayoutRoute from "./page/AccountLayoutRoute";
const store = configureStore();

const showUserRoute = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((rou, index) => {
      return (
        <Route
          key={index}
          path={rou.path}
          name={rou.name}
          exact={rou.exact}
          component={rou.component}
        />
      );
    });
  }
  return result;
};

const showUserPersonalRoute = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((rou, index) => {
      return (
        <UserPersonalLayoutRoute
          key={index}
          path={rou.path}
          name={rou.name}
          exact={rou.exact}
          component={rou.component}
          route={rou}
        />
      );
    });
  }
  return result;
};

const showAccountsRoute = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((rou, index) => {
      return (
        <AccountLayoutRoute
          key={index}
          path={rou.path}
          name={rou.name}
          exact={rou.exact}
          component={rou.component}
          route={rou}
        />
      );
    });
  }
  return result;
};

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <Header />
            <Switch>
              {showUserRoute(HOME_ROUTES)}
              {showUserPersonalRoute(USER_PERSONAL_ROUTES)}
              {showAccountsRoute(ACCOUNT_ROUTES)}
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
