import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsFilterRight, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../store/filters/actions";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = ({ setShowFilters }) => {
  const [auxSearchWord, setAuxSearchWord] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);

  const handleChangeFilters = () => {
    const auxFilters = { ...filters };
    auxFilters.searchWord = auxSearchWord;
    dispatch(changeFilters({ filters: auxFilters }));
  };

  useEffect(() => {
    setAuxSearchWord(filters.searchWord);
  }, [filters]);

  return (
    <Form>
      <Row>
        <Col xs={7}>
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
        </Col>
        <Col xs={2}>
          <Button variant="outline-success" onClick={handleChangeFilters}>
            <BsSearch />
            <div className="d-none d-lg-flex">Buscar</div>
          </Button>
        </Col>
        {auxSearchWord.length > 0 && (
          <Col xs={2}>
            <Button
              variant="outline-success"
              className="mx-2"
              onClick={() => {
                handleChangeFilters();
                setShowFilters(true);
              }}
            >
              <div className="d-flex align-items-center">
                <BsFilterRight />
                <div className="d-none d-lg-flex">
                  <p className="mx-2 my-0">filtrar</p>
                </div>
              </div>
            </Button>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default Search;
