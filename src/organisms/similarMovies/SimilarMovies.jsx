import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardMovie from "../../atoms/cardMovie/CardMovie";
import { getSimilarMovies } from "../../utilities/moviesServices";

const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(setSimilarMovies, movieId, 1);
  }, [movieId]);

  return (
    <Row className="d-flex justify-content-center">
      {similarMovies.map((similarMovie) => {
        return (
          <Col className="mx-2 px-0" xs={12} md={2} key={similarMovie.id}>
            <CardMovie movie={similarMovie} />
          </Col>
        );
      })}
    </Row>
  );
};

export default SimilarMovies;
