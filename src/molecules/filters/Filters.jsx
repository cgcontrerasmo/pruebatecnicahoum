import Modal from "react-bootstrap/Modal";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../store/filters/actions";
import { getCountries, getLanguages } from "../../utilities/moviesServices";
import "./Filters.scss";

const Filters = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [auxFiltersState, setAuxFiltersState] = useState({});
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getLanguages(setLanguages);
    getCountries(setCountries);
  }, []);

  useEffect(() => {
    setAuxFiltersState(filters.filters);
  }, [filters]);

  const handleChangeFilters = (filter, value) => {
    const auxFilter = { ...auxFiltersState };
    auxFilter[filter] = value;
    setAuxFiltersState(auxFilter);
  };

  const handleApplyFilters = () => {
    dispatch(changeFilters({ filters: auxFiltersState }));
    setShowModal(false);
  };

  return (
    <Modal show={showModal} className="Filters">
      <Modal.Header closeButton onHide={() => setShowModal(false)}>
        <Modal.Title>
          Aplica filtros para encontrar las películas que estás buscando
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <p>¿Película con clasificación para mayores de edad?</p>
          <Form.Select
            onChange={(e) => {
              handleChangeFilters("include_adult", e.target.value === "true");
            }}
            value={auxFiltersState.include_adult}
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </Form.Select>
        </Row>
        <Row>
          <p>¿De qué región quierese que sea la película?</p>
          <Form.Select
            onChange={(e) => {
              handleChangeFilters("region", e.target.value);
            }}
            value={auxFiltersState.region}
          >
            {countries.map((country) => {
              return (
                <option key={country.iso_3166_1} value={country.iso_3166_1}>
                  {country.english_name}
                </option>
              );
            })}
          </Form.Select>
        </Row>
        <Row>
          <p>¿En qué lenguaje te gustaría que estuviese la película?</p>
          <Form.Select
            onChange={(e) => {
              handleChangeFilters("language", e.target.value);
            }}
            value={auxFiltersState.language}
          >
            {languages.map((language) => {
              return (
                <option key={language.iso_639_1} value={language.iso_639_1}>
                  {language.english_name}
                </option>
              );
            })}
          </Form.Select>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          variant="secondary"
          onClick={() => {
            setAuxFiltersState({
              searchWord: "",
              region: "",
              language: "",
              include_adult: false,
            });
          }}
        >
          Borrar
        </Button>
        <Button variant="primary" onClick={handleApplyFilters}>
          Aplicar filtros
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Filters;
