import { connect } from "react-redux";

import AppBarStyles from "./appBarStyles";
import Navigation from "./navigation/navigation";
import UserMenu from "./userMenu/userMenu";
import AuthNav from "./authNav/authNav";
import authSelectors from "../redux/auth/userSelector";
const { Header } = AppBarStyles;

const AppBar = ({ isAuthenticated }) => {
  return (
    <Header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(AppBar);
