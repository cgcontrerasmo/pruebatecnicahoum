import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Chip from "../../atoms/chip/Chip";
import { getCountries, getLanguages } from "../../utilities/moviesServices";
import "./ShowFiltersApply.scss";

const ShowFiltersApply = () => {
  const filters = useSelector((state) => state.filters.filters);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getLanguages(setLanguages);
    getCountries(setCountries);
  }, []);

  return (
    <Container>
      <Row>
        <h4>Filtros aplicados:</h4>
      </Row>
      <Row>
        <Col key="searchWord">
          <p>Palabra clave</p>
          <Chip label={filters.searchWord.toString()} />
        </Col>
        <Col key="region">
          <p>Region</p>
          <Chip
            label={
              countries.find((country) => country.iso_3166_1 === filters.region)
                ?.english_name
            }
          />
        </Col>
        <Col key="language">
          <p>Lenguaje</p>
          <Chip
            label={
              languages.find(
                (language) => language.iso_639_1 === filters.language
              )?.english_name
            }
          />
        </Col>
        <Col key="include_adult">
          <p>Contenido para adultos</p>
          <Chip label={filters.include_adult === true ? "Sí" : "No"} />
        </Col>
      </Row>
    </Container>
  );
};

export default ShowFiltersApply;
