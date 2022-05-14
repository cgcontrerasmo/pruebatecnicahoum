import { Carousel } from "bootstrap";
import { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import MyPagination from "../../atoms/pagination/MyPagination";
import BasicLayout from "../../templates/basicLayout/BacisLayout";
import { getTopScore } from "../../utilities/moviesServices";
import "./TopScore.scss";

const TopScore = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(10);

  useEffect(() => {
    getTopScore(setMovies, page, setLoading, setPages);
  }, [page]);

  useEffect(() => {
    console.log(page);
  }, [page]);

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
