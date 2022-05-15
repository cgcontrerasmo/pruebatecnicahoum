import { Container, Row } from "react-bootstrap";
import Header from "../../atoms/header/Header";
import Search from "../../molecules/search/Search";
import TopScore from "../../organisms/topScore/TopScore";
import { useState } from "react";
import "./Home.scss";
import Filters from "../../molecules/filters/Filters";

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Container>
      <Filters showModal={showFilters} setShowModal={setShowFilters} />
      <Row>
        <Header type="home" setShowFilters={setShowFilters} />
      </Row>
      <Row className="d-flex d-lg-none">
        <Search setShowFilters={setShowFilters} />
      </Row>
      <Row>
        <TopScore />
      </Row>
    </Container>
  );
};

export default Home;
