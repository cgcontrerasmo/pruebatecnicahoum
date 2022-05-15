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
import { useNavigate } from "react-router-dom";

const Header = ({ type, setShowFilters }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [auxSearchWord, setAuxSearchWord] = useState("");

  const handleChangeFilters = () => {
    const auxFilters = { ...filters.filters };
    auxFilters.searchWord = auxSearchWord;
    dispatch(changeFilters({ filters: auxFilters }));
  };

  const handleShowFilters = () => {
    handleChangeFilters();
    setShowFilters(true);
  };

  useEffect(() => {
    setAuxSearchWord(filters.filters.searchWord);
  }, [filters]);

  return (
    <Navbar collapseOnSelect expand="lg" className="Header">
      <Container fluid={true} className="px-0 px-md-2">
        <Navbar
          className="Header__ApplicationName"
          onClick={() => {
            navigate("../");
          }}
        >
          <h1>Tecnical Movie</h1>
        </Navbar>
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
