import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import { getSimilarMovies } from "../../utilities/moviesServices";
import "./SimilarMovies.scss";

const SimilarMovies = ({ movieId }) => {
  const imageRoute = "https://image.tmdb.org/t/p/w500";
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(10);

  useEffect(() => {
    getSimilarMovies(setSimilarMovies, movieId, setLoading, page);
  }, [movieId]);

  useEffect(() => {
    console.log(similarMovies);
  }, [similarMovies]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {similarMovies.map((similarMovie) => {
          return (
            <Col className="col-1 mx-0 px-0">
              <CardMovie movie={similarMovie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SimilarMovies;
