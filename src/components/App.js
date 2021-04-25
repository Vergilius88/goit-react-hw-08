import { Switch, Route } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";

import Section from "./sectionWrapper/sectionWrapper";
import AppBar from "./appBar/appBar";
import routes from "./routes";
import authOperations from "./redux/auth/userOperations";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const PhoneBook = lazy(() => import("./phoneBook/phoneBook"));
const LoginView = lazy(() => import("./forms/LoginView/LoginView"));
const RegisterView = lazy(() => import("./forms/Register/RegisterView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Section title="Phone Book">
          <Suspense fallback={<h1>Download...</h1>}>
            <Switch>
              <PrivateRoute
                exact
                path={routes.phoneBook}
                component={PhoneBook}
                redirectTo={routes.login}
              />
              <PublicRoute
                exact
                path={routes.login}
                restricted
                redirectTo={routes.phoneBook}
                component={LoginView}
              />
              <PublicRoute
                exact
                path={routes.register}
                restricted
                redirectTo={routes.phoneBook}
                component={RegisterView}
              />
            </Switch>
          </Suspense>
        </Section>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.currentUser,
};

export default connect(null, mapDispatchToProps)(App);
