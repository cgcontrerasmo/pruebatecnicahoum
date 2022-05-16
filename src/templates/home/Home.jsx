import { Container, Row } from "react-bootstrap";
import Header from "../../atoms/header/Header";
import Search from "../../molecules/search/Search";
import TopScore from "../../organisms/topScore/TopScore";
import { useState } from "react";
import Filters from "../../molecules/filters/Filters";

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState("top_score");

  return (
    <Container>
      <Filters showModal={showFilters} setShowModal={setShowFilters} />
      <Row>
        <Header
          type="home"
          setShowFilters={setShowFilters}
          setSelectedMovies={setSelectedMovies}
          selectedMovies={selectedMovies}
        />
      </Row>
      <Row className="d-flex d-lg-none">
        <Search setShowFilters={setShowFilters} />
      </Row>
      <Row>
        <TopScore selectedMovies={selectedMovies} />
      </Row>
    </Container>
  );
};

export default Home;
