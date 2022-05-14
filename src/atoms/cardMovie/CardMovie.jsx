import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardMovie.scss";
import { useNavigate } from "react-router-dom";

const CardMovie = ({ movie, type }) => {
  const imageRoute = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();
  return (
    <Container
      key={movie.id}
      className="CardMovie mx-0 px-0 my-2"
      fluid
      onClick={() => {
        navigate(`../detail/${movie.id}`);
      }}
    >
      <Row>
        <Image src={`${imageRoute}${movie.poster_path}`} />
      </Row>
      {type === "principal" && (
        <Row className="mx-1">
          <Col>{movie.release_date.substring(0, 4)}</Col>
          <Col>{movie.vote_average}</Col>
        </Row>
      )}
      <Row>
        <Col className="d-flex justify-content-center">
          <p>{movie.original_title}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CardMovie;
