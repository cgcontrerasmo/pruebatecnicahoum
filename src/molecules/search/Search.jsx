import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { BsFilterRight } from "react-icons/bs";

const Search = ({ setShowFilters, filters, setFilters }) => {
  const [auxSearchWord, setAuxSearchWord] = useState("");

  const handleChangeFilters = () => {
    const auxFilters = { ...filters };
    auxFilters.searchWord = auxSearchWord;
    setFilters(auxFilters);
  };

  return (
    <Form>
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
          onClick={() => {
            handleChangeFilters();
            setShowFilters(true);
          }}
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
  );
};

export default Search;
