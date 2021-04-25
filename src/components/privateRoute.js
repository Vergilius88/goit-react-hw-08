import { Route, Redirect } from "react-router-dom";
import authSelectors from "./redux/auth/userSelector";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
