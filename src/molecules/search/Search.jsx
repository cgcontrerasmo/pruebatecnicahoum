import { Form, FormControl, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Form className="d-flex d-lg-none">
      <FormControl
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  );
};

export default Search;
