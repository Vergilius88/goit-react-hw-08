import { Route, Redirect } from "react-router-dom";
import authSelectors from "./redux/auth/userSelector";
import { connect } from "react-redux";

const PublicRoute = ({
  component: Component,
  redirectTo,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
