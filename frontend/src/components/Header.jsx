import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {}
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                userInfo ? (
                  <>
                    <NavDropdown
                      title={`Hello, ${userInfo.name}`}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="/profile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.2"
                        onClick={logoutHandler}
                      >
                        <FaSignOutAlt /> Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <FaSignInAlt /> Sign In
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                      <Nav.Link>
                        <FaSignOutAlt /> Sign Up
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )

                // <Nav.Link href="#home">Home</Nav.Link>
                // <Nav.Link href="#about">About</Nav.Link>
                // <Nav.Link href="#contact">Contact</Nav.Link>

                // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                //   <NavDropdown.Item href="#action/3.2">Another
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
