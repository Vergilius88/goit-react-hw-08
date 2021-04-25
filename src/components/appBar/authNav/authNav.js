import { NavLink } from "react-router-dom";
import AppStyles from "../../appStyles";
const { Ul, Li, Nav } = AppStyles;

const AuthNav = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <NavLink
              exact
              to={`/register`}
              className="link"
              activeClassName="active-link"
            >
              Register
            </NavLink>
          </Li>

          <Li>
            {" "}
            <NavLink
              exact
              to={`/login`}
              className="link"
              activeClassName="active-link"
            >
              Login
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default AuthNav;
