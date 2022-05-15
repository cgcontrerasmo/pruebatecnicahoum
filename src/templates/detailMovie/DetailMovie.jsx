import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../atoms/header/Header";
import "./DetailMovie.scss";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../utilities/moviesServices";
import SimilarMovies from "../../organisms/similarMovies/SimilarMovies";
import Chip from "../../atoms/chip/Chip";
import ModalLoading from "../../atoms/modalLoading/ModalLoading";

const DetailMovie = () => {
  const imageRoute = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    getMovieDetails(setMovieDetails, id, setLoading);
  }, [id]);

  return (
    <>
      {loading ? (
        <ModalLoading showModal={loading} />
      ) : (
        <Container className="DetailMovie">
          <Header type="detail" />
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={12} md={8} className="d-flex justify-content-start">
                <h1>{movieDetails.original_title}</h1>
              </Col>
              <Col
                className="d-flex justify-content-sm-start justify-content-md-end"
                xs={12}
                md={4}
              >
                {movieDetails.tagline}
              </Col>
            </Row>
            <hr />
            <Row>
              <h4>Ficha técnica:</h4>
            </Row>
            <Row>
              <Col xs={12} md={2}>
                <p>Id imbd: {movieDetails.imdb_id}</p>
              </Col>
              <Col xs={12} md={3}>
                <p>Fecha de lanzamiento: {movieDetails.release_date}</p>
              </Col>
              <Col xs={12} md={2}>
                <p>Duración: {movieDetails.runtime} minutos</p>
              </Col>
              <Col xs={12} md={2}>
                <p>Puntuación: {movieDetails.vote_average}/10</p>
              </Col>
              <Col xs={12} md={2}>
                <p>{movieDetails.vote_count} personas</p>
              </Col>
            </Row>
            <Row>
              <Image
                src={
                  movieDetails.backdrop_path
                    ? `${imageRoute}${movieDetails.backdrop_path}`
                    : "/images/defaultImagePrincipal.png"
                }
                alt={movieDetails.original_title}
              />
            </Row>
            <Row className="mt-5">
              <Row>
                <h4>Descripción</h4>
              </Row>
              <Row>
                <p>{movieDetails.overview}</p>
              </Row>
            </Row>
            <hr />
            <Row>
              <Col className="d-flex" xs={12}>
                <h4>Categorías:</h4>
                <Row className="mx-2 align-items-center">
                  {movieDetails.genres?.map((genre) => {
                    return (
                      <Col key={genre.id}>
                        <Chip label={genre.name} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <h4>Producida por:</h4>
            </Row>
            <Row className="d-flex justify-content-center">
              {movieDetails.production_companies?.map((company) => {
                return (
                  <Col xs={12} md={2} key={company.id}>
                    <Row className="justify-content-center">{company.name}</Row>
                    <Row className="DetailMovie__containerImage justify-content-center my-3">
                      <Image
                        className="DetailMovie__containerImage__image"
                        src={
                          company.logo_path
                            ? `${imageRoute}${company.logo_path}`
                            : "/images/noneProductor.jpg"
                        }
                        alt={company.name}
                      />
                    </Row>
                  </Col>
                );
              })}
            </Row>
            <hr />
            <Row>
              <Col>
                <h3>Películas relacionadas:</h3>
              </Col>
            </Row>
            <Col>
              <SimilarMovies movieId={id} />
            </Col>
          </Container>
        </Container>
      )}
    </>
  );
};

export default DetailMovie;
