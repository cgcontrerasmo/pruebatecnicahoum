import { Col, Container, Image, Row } from "react-bootstrap";
import "./CardMovie.scss";
import { useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

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
      <Row className={type === "principal" ? "containerImg" : ""}>
        <Image
          src={
            movie.poster_path
              ? `${imageRoute}${movie.poster_path}`
              : "/images/defaulImage.webp"
          }
          alt={movie.original_title}
        />
      </Row>
      {type === "principal" && (
        <Row className="mx-1">
          <Col className="d-flex justify-content-center">
            {movie.release_date?.substring(0, 4) || "No date"}
          </Col>
          <Col>
            <Row>
              <Col>
                <BsStarFill className="star" />
              </Col>
              <Col xs={8} className="d-flex justify-content-start">
                {movie.vote_average}
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Row>
        <Col className="CardMovie__containerTitle justify-content-center mx-3 my-3">
          {movie.original_title}
        </Col>
      </Row>
    </Container>
  );
};

export default CardMovie;
