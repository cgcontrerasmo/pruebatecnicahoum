import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Chip from "../../atoms/chip/Chip";
import { changeFilters } from "../../store/filters/actions";
import { getCountries, getLanguages } from "../../utilities/moviesServices";

const ShowFiltersApply = () => {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getLanguages(setLanguages);
    getCountries(setCountries);
  }, []);

  const handleDeleteFilter = (filter) => {
    const auxFilters = { ...filters };
    auxFilters[filter] = "";
    dispatch(changeFilters({ filters: auxFilters }));
  };

  return (
    <Container fluid>
      <Row>
        <h4>Filtros aplicados:</h4>
      </Row>
      <Row>
        <Col key="searchWord" xs={12} md={6} lg={3}>
          <p>Palabra clave</p>
          <Chip
            label={filters.searchWord.toString()}
            type="filter"
            action={() => {
              handleDeleteFilter("searchWord");
            }}
          />
        </Col>
        <Col key="region" xs={12} md={6} lg={3}>
          <p>Region</p>
          <Chip
            label={
              countries.find((country) => country.iso_3166_1 === filters.region)
                ?.english_name
            }
            type="filter"
            action={() => {
              handleDeleteFilter("region");
            }}
          />
        </Col>
        <Col key="language" xs={12} md={6} lg={3}>
          <p>Lenguaje</p>
          <Chip
            label={
              languages.find(
                (language) => language.iso_639_1 === filters.language
              )?.english_name
            }
            type="filter"
            action={() => {
              handleDeleteFilter("language");
            }}
          />
        </Col>
        <Col key="include_adult" xs={12} md={6} lg={3}>
          <p>Contenido para adultos</p>
          <Chip label={filters.include_adult === true ? "Sí" : "No"} />
        </Col>
      </Row>
    </Container>
  );
};

export default ShowFiltersApply;
