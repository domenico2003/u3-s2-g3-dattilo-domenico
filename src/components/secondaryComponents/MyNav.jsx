import {
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = (props) => {
  const location = useLocation();

  return (
    <Navbar bg="prova" expand="lg" className="px-5">
      <Container
        fluid
        className="px-0 justify-content-center justify-content-sm-between"
      >
        <Navbar.Brand href="#home">
          <img src={props.netflixLogo} alt="netflix-logo" width="100" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/home"
              className={` nav-link ${
                location.pathname === "/home"
                  ? "text-white fw-bold"
                  : "text-white-50"
              }`}
            >
              Home
            </Link>

            <Link
              to="/"
              className={` nav-link ${
                location.pathname === "/"
                  ? "text-white fw-bold"
                  : "text-white-50"
              }`}
            >
              TV shows
            </Link>

            <Link
              to="/movies"
              className={` nav-link ${
                location.pathname === "/movies"
                  ? "text-white fw-bold"
                  : "text-white-50"
              }`}
            >
              Movies
            </Link>

            <Link
              to="/recentlyAdded"
              className={` nav-link ${
                location.pathname === "/recentlyAdded"
                  ? "text-white fw-bold"
                  : "text-white-50"
              }`}
            >
              Recently Added
            </Link>

            <Link
              to="/myList"
              className={` nav-link ${
                location.pathname === "/myList"
                  ? "text-white fw-bold"
                  : "text-white-50"
              }`}
            >
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center text-white-50 gap-4 ">
          <p className="align-items-center text-white mb-0 fw-bold">KIDS</p>
          <i className="bi bi-bell-fill text-white fs-5 "></i>
          <Dropdown as={ButtonGroup} className="bg-prova mydrop">
            <div
              className=" profilo"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></div>
            <DropdownButton align="end" title="" id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1" className="p-0">
                <Link
                  to="/accountPage"
                  className={`border-0 rounded-0 w-100 btn ${
                    location.pathname === "/accountPage"
                      ? "btn-light"
                      : " btn-outline-light"
                  }`}
                >
                  Account
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" className="p-0">
                <Link
                  to="/settingsPage"
                  className={`border-0 rounded-0 w-100 btn ${
                    location.pathname === "/settingsPage"
                      ? "btn-light"
                      : " btn-outline-light"
                  }`}
                >
                  Settings
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
          <Navbar.Toggle
            className="bg-secondary"
            aria-controls="basic-navbar-nav"
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNav;
