import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../store/filters/actions";

const Header = ({ type, setShowFilters }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const [auxSearchWord, setAuxSearchWord] = useState(
    filters.filters?.searchWord
  );

  const handleChangeFilters = () => {
    const auxFilters = { ...filters.filters };
    auxFilters.searchWord = auxSearchWord;
    console.log("AuxFiltersHeader", auxFilters);
    dispatch(changeFilters({ filters: auxFilters }));
  };

  const handleShowFilters = () => {
    handleChangeFilters();
    setShowFilters(true);
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid={true} className="px-0 px-md-2">
        <Navbar.Brand href="/">
          <h1>Tecnical Movie</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link>Top puntuación</Nav.Link>
            <Nav.Link>Proximamente</Nav.Link>
            <Nav.Link>Populares</Nav.Link>
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
              <Button variant="outline-success" onClick={handleChangeFilters}>
                Buscar
              </Button>
              {auxSearchWord.length > 0 && (
                <Button
                  variant="outline-success"
                  className="mx-2"
                  onClick={handleShowFilters}
                >
                  <div className="d-flex align-items-center">
                    <BsFilterRight className="d-none d-lg-flex" />
                    <div>
                      <p className="mx-2 my-0">filtrar</p>
                    </div>
                  </div>
                </Button>
              )}
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
