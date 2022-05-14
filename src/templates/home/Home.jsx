import { Container, Row } from "react-bootstrap";
import Header from "../../atoms/header/Header";
import Search from "../../molecules/search/Search";
import TopScore from "../../organisms/topScore/TopScore";
import { useState } from "react";
import "./Home.scss";
import Filters from "../../molecules/filters/Filters";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilers] = useState({
    region: "",
    language: "",
    include_adult: false,
  });

  return (
    <Container>
      <Filters
        showModal={showFilters}
        setShowModal={setShowFilters}
        setFilers={setFilers}
        filters={filters}
      />
      <Row>
        <Header
          type="home"
          setSearchWord={setSearchWord}
          setShowFilters={setShowFilters}
        />
      </Row>
      <Row>
        <Search setSearchWord={setSearchWord} setShowFilters={setShowFilters} />
      </Row>
      <Row>
        <TopScore searchWord={searchWord} filters={filters} />
      </Row>
    </Container>
  );
};

export default Home;
