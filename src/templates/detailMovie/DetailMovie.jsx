import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../atoms/header/Header";
import BasicLayout from "../basicLayout/BacisLayout";
import "./DetailMovie.scss";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../utilities/moviesServices";
import SimilarMovies from "../../organisms/similarMovies/SimilarMovies";
import Chip from "../../atoms/chip/Chip";

const DetailMovie = () => {
  const imageRoute = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(10);

  useEffect(() => {
    getMovieDetails(setMovieDetails, id, setLoading);
  }, [id]);

  useEffect(() => {
    console.log(movieDetails);
  }, [id]);

  return (
    <Container>
      <Header type="detail" />
      <Row>
        <Col>
          <h1>{movieDetails.original_title}</h1>
        </Col>
        <Col>{movieDetails.tagline}</Col>
      </Row>
      <Row>
        <p>Id imbd: {movieDetails.imdb_id}</p>
      </Row>
      <Row>
        <Col>
          <p>Fecha de lanzamiento: {movieDetails.release_date}</p>
        </Col>
        <Col>
          <p>Duración: {movieDetails.runtime} minutos</p>
        </Col>
        <Col>
          <Row>Puntuación: {movieDetails.vote_average}/10</Row>
          <Row>{movieDetails.vote_count} personas</Row>
        </Col>
      </Row>
      <Row>
        <Image src={`${imageRoute}${movieDetails.backdrop_path}`} />
      </Row>
      <Row>{movieDetails.overview}</Row>
      <Row>
        <Col className="col-sm-1">Categorías:</Col>
        <Col>
          <Row>
            {movieDetails.genres?.map((genre) => {
              return <Chip label={genre.name} />;
            })}
          </Row>
        </Col>
      </Row>
      <Row>
        <h4>Producida por:</h4>
      </Row>
      <Row className="justify-content-center">
        {movieDetails.production_companies?.map((company) => {
          return (
            <Col className="col-sm-2">
              <Row>{company.name}</Row>
              <Row>
                {company.logo_path !== null && (
                  <Image src={`${imageRoute}${company.logo_path}`} />
                )}
              </Row>
            </Col>
          );
        })}
      </Row>
      <Row>
        <h3>Películas relacionadas:</h3>
      </Row>
      <SimilarMovies movieId={id} />
    </Container>
  );
};

export default DetailMovie;
