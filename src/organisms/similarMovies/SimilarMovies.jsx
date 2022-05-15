import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import { getSimilarMovies } from "../../utilities/moviesServices";
import "./SimilarMovies.scss";

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(setSimilarMovies, movieId, 1);
  }, [movieId]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {similarMovies.map((similarMovie) => {
          return (
            <Col className="col-2 mx-2 px-0" key={similarMovie.id}>
              <CardMovie movie={similarMovie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SimilarMovies;
