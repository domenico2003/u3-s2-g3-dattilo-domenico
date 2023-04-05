import { Alert, Carousel, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleGallery = (props) => {
  let ImageCarousel = (imgForRow) => {
    const imagesRows = [];
    const numberOfRows = Math.ceil(props.risp.length / imgForRow);

    // split images into rows of 6
    for (let i = 0; i < numberOfRows; i++) {
      const rowImages = props.risp.slice(
        i * imgForRow,
        i * imgForRow + imgForRow
      );
      imagesRows.push(rowImages);
    }

    return imagesRows;
  };

  let navigate = useNavigate();
  return (
    <>
      <article>
        <h4 className="mb-3 ">{props.name}</h4>
        <Carousel className="d-block d-sm-none">
          {props.risp ? (
            ImageCarousel(1).map((row, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {row.map((obj) => (
                    <Col xs={12} key={obj.imdbID} className="text-center">
                      <img
                        src={obj.Poster}
                        alt={obj.imdbID}
                        className="img-carusel"
                        onClick={() => navigate(`/movieDetails/${obj.imdbID}`)}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))
          ) : (
            <Alert variant="danger">
              !film non trovato , inserisci il nome corretto
            </Alert>
          )}
        </Carousel>
        <Carousel className="d-none d-sm-block d-md-none">
          {props.risp ? (
            ImageCarousel(2).map((row, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {row.map((obj) => (
                    <Col sm={6} key={obj.imdbID}>
                      <img
                        src={obj.Poster}
                        alt={obj.imdbID}
                        className="img-carusel"
                        onClick={() => navigate(`/movieDetails/${obj.imdbID}`)}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))
          ) : (
            <Alert variant="danger">
              !film non trovato , inserisci il nome corretto
            </Alert>
          )}
        </Carousel>
        <Carousel className="d-none d-md-block d-xl-none">
          {props.risp ? (
            ImageCarousel(4).map((row, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {row.map((obj) => (
                    <Col md={3} key={obj.imdbID}>
                      <img
                        src={obj.Poster}
                        alt={obj.imdbID}
                        className="img-carusel"
                        onClick={() => navigate(`/movieDetails/${obj.imdbID}`)}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))
          ) : (
            <Alert variant="danger">
              !film non trovato , inserisci il nome corretto
            </Alert>
          )}
        </Carousel>
        <Carousel className="d-none d-xl-block">
          {props.risp ? (
            ImageCarousel(6).map((row, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {row.map((obj) => (
                    <Col md={2} key={obj.imdbID}>
                      <img
                        src={obj.Poster}
                        alt={obj.imdbID}
                        className="img-carusel"
                        onClick={() => navigate(`/movieDetails/${obj.imdbID}`)}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))
          ) : (
            <Alert variant="danger">
              !film non trovato , inserisci il nome corretto
            </Alert>
          )}
        </Carousel>
      </article>
    </>
  );
};

export default SingleGallery;
