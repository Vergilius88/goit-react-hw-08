import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import authSelectors from "../../redux/auth/userSelector";
import AppStyles from "../../appStyles";

const { Ul, Li, Nav } = AppStyles;
const Navigation = ({ isAuthenticated }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink
            exact
            to={`/`}
            className="link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
        </Li>
        {isAuthenticated && (
          <Li>
            <NavLink
              exact
              to={`/contacts`}
              className="link"
              activeClassName="active-link"
            >
              Phone
            </NavLink>
          </Li>
        )}
      </Ul>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(Navigation);
