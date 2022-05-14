import { Container, Row } from "react-bootstrap";
import Header from "../../atoms/header/Header";
import Search from "../../molecules/search/Search";
import TopScore from "../../organisms/topScore/TopScore";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    console.log(searchWord);
  }, [searchWord]);

  return (
    <Container>
      <Row>
        <Header type="home" setSearchWord={setSearchWord} />
      </Row>
      <Row>
        <Search setSearchWord={setSearchWord} />
      </Row>
      <Row>
        <TopScore searchWord={searchWord} />
      </Row>
    </Container>
  );
};

export default Home;
