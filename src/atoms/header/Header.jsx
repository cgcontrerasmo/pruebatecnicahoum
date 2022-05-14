import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";

const Header = ({ type, setSearchWord, setShowFilters }) => {
  const [auxSearchWord, setAuxSearchWord] = useState("");
  return (
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
                value={auxSearchWord}
                aria-label="Search"
                onChange={(e) => {
                  setAuxSearchWord(e.target.value);
                }}
              />
              <Button
                variant="outline-success"
                onClick={() => {
                  setSearchWord(auxSearchWord);
                }}
              >
                Buscar
              </Button>
              <Button
                variant="outline-success"
                className="mx-2"
                onClick={() => {
                  setShowFilters(true);
                }}
              >
                <div className="d-flex align-items-center">
                  <BsFilterRight />
                  <div>
                    <p className="mx-2 my-0">filtrar</p>
                  </div>
                </div>
              </Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
