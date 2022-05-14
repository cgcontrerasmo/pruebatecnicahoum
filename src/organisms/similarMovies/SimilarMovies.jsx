import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import { getSimilarMovies } from "../../utilities/moviesServices";
import "./SimilarMovies.scss";

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSimilarMovies(setSimilarMovies, movieId, setLoading, 1);
  }, [movieId]);

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
