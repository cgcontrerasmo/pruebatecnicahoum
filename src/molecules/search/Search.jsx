import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { BsFilterRight } from "react-icons/bs";

const Search = ({ setSearchWord }) => {
  const [auxSearchWord, setAuxSearchWord] = useState("");
  return (
    <Form className="d-flex d-lg-none">
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
      <Button variant="outline-success" className="mx-2">
        <BsFilterRight />
      </Button>
    </Form>
  );
};

export default Search;
