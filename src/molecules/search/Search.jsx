import { useEffect, useState } from "react";
import { Form, FormControl, Button, Col, Row } from "react-bootstrap";
import { BsFilterRight, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../store/filters/actions";

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
        <Col xs={8}>
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
        <Col xs={1}>
          <Button variant="outline-success" onClick={handleChangeFilters}>
            <BsSearch />
            <div className="d-none d-lg-flex">Buscar</div>
          </Button>
        </Col>
        {auxSearchWord.length > 0 && (
          <Col xs={1}>
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
