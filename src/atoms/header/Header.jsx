import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import BasicLayout from "../../templates/basicLayout/BacisLayout";
import { Link } from "react-scroll";

const Header = ({ type, searchWord, setSearhWord }) => {
  return (
    <BasicLayout>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid={true} className="px-0 px-md-3">
          <Navbar.Brand href="/">
            <h1>Tecnical Movie</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="sectionHeader">
                Top puntuación
              </Nav.Link>
              <Nav.Link as={Link} to="sectionBasicInformation">
                Proximamente
              </Nav.Link>
              <Nav.Link as={Link} to="sectionBenefits">
                Populares
              </Nav.Link>
            </Nav>
            {type === "home" && (
              <Form className="d-none d-lg-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  value={searchWord}
                  aria-label="Search"
                  onChange={(e) => {
                    setSearhWord(e.target.value);
                  }}
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BasicLayout>
  );
};

export default Header;
