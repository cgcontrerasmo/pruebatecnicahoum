import { Container, Row } from "react-bootstrap";
import Header from "../../atoms/header/Header";
import Search from "../../molecules/search/Search";
import TopScore from "../../organisms/topScore/TopScore";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [searchWord, setSearhWord] = useState("");

  useEffect(() => {
    console.log(searchWord);
  }, [searchWord]);

  return (
    <Container>
      <Row>
        <Header
          type="home"
          searchWord={searchWord}
          setSearhWord={setSearhWord}
        />
      </Row>
      <Row>
        <Search />
      </Row>
      <Row>
        <TopScore />
      </Row>
    </Container>
  );
};

export default Home;
