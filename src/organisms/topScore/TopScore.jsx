import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import MyPagination from "../../atoms/pagination/MyPagination";
import BasicLayout from "../../templates/basicLayout/BacisLayout";
import { getTopScore, getMoviesSearch } from "../../utilities/moviesServices";
import "./TopScore.scss";

const TopScore = ({ searchWord, filters }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(10);

  useEffect(() => {
    if (searchWord !== "") {
      getMoviesSearch(
        setMovies,
        page,
        setLoading,
        setPages,
        searchWord,
        filters
      );
    } else {
      getTopScore(setMovies, page, setLoading, setPages);
    }
  }, [page, searchWord, filters]);

  return (
    <BasicLayout>
      <Container>
        <Row>
          {movies.map((movie) => {
            return (
              <Col className="col-12 col-md-4 col-lg-3">
                <CardMovie movie={movie} type="principal" />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="md-12 d-flex justify-content-center">
            <MyPagination setterPage={setPage} pages={pages} page={page} />
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  );
};

export default TopScore;
