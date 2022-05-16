import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../store/filters/actions";
import { useNavigate } from "react-router-dom";

const Header = ({
  type,
  setShowFilters,
  setSelectedMovies,
  selectedMovies,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [auxSearchWord, setAuxSearchWord] = useState("");

  const handleChangeFilters = () => {
    const auxFilters = { ...filters.filters };
    auxFilters.searchWord = auxSearchWord;
    dispatch(changeFilters({ filters: auxFilters }));
  };

  const handleShowFilters = (e) => {
    handleChangeFilters();
    setShowFilters(true);
  };

  useEffect(() => {
    setAuxSearchWord(filters.filters.searchWord);
  }, [filters]);

  const handleChangeCategory = (category) => {
    if (type === "home") setSelectedMovies(category);
  };

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
          {type === "home" && (
            <>
              <Nav>
                <Nav.Link onClick={() => handleChangeCategory("top_score")}>
                  <p
                    className={`Header__p${
                      selectedMovies === "top_score" ? "active" : "disable"
                    }`}
                  >
                    Top puntuación
                  </p>
                </Nav.Link>
                <Nav.Link onClick={() => handleChangeCategory("upcoming")}>
                  <p
                    className={`Header__p${
                      selectedMovies === "upcoming" ? "active" : "disable"
                    }`}
                  >
                    Proximamente
                  </p>
                </Nav.Link>
                <Nav.Link onClick={() => handleChangeCategory("popular")}>
                  <p
                    className={`Header__p${
                      selectedMovies === "popular" ? "active" : "disable"
                    }`}
                  >
                    Populares
                  </p>
                </Nav.Link>
              </Nav>
              <Form
                className="d-none d-lg-flex"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleChangeFilters();
                  }
                }}
              >
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
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
