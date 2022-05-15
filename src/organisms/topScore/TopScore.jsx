import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import ModalLoading from "../../atoms/modalLoading/ModalLoading";
import MyPagination from "../../atoms/pagination/MyPagination";
import ShowFiltersApply from "../../molecules/showFiltersApply/ShowFiltersApply";
import BasicLayout from "../../templates/basicLayout/BacisLayout";
import { getTopScore, getMoviesSearch } from "../../utilities/moviesServices";
import "./TopScore.scss";

const TopScore = () => {
  const filters = useSelector((state) => state.filters);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(10);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (filters.filters.searchWord !== "") {
      getMoviesSearch(setMovies, page, setLoading, setPages, filters.filters);
    } else {
      getTopScore(setMovies, page, setLoading, setPages);
    }
  }, [page, filters]);

  return (
    <>
      {loading ? (
        <ModalLoading showModal={loading} />
      ) : (
        <BasicLayout>
          <Container>
            {filters.filters.searchWord !== "" && <ShowFiltersApply />}
            <Row>
              <Col className="d-flex md-12 d-lg-none justify-content-center">
                <MyPagination setterPage={setPage} pages={pages} page={page} />
              </Col>
            </Row>
            <Row>
              {movies.map((movie) => {
                return (
                  <Col className="col-12 col-md-4 col-lg-3" key={movie.id}>
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
      )}
    </>
  );
};

export default TopScore;
