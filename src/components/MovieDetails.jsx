import { useState, useEffect } from "react";

import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormComment from "./secondaryComponents/main/FormComment";
import CommentList from "./secondaryComponents/main/CommentList";

const MovieDetails = (props) => {
  const [filmObj, setFilmObj] = useState(null);
  let [comments, setComments] = useState(null);
  let params = useParams();
  useEffect(() => {
    myFetchFilm();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  let myFetchFilm = () => {
    fetch(`http://www.omdbapi.com/?apikey=91c06893&i=${params.filmId}`)
      .then((risp) => risp.json())
      .then((dato) => setFilmObj(dato));
  };

  let fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + params.filmId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMmQ3MDBlNzg3MDAwMTRkODkzNzgiLCJpYXQiOjE2ODA2MTY4MTYsImV4cCI6MTY4MTgyNjQxNn0.RM5ZqHurjdUU37OM3j96dDbdt7JKCIcmC55cbX91suQ",
          },
        }
      );

      if (response.ok) {
        const commentsArr = await response.json();

        setComments(commentsArr);
        console.log(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {filmObj ? (
        <Container fluid className="text-white">
          <h1 className="text-center my-5 ">{filmObj.Title}</h1>
          <Row className="justify-content-center ">
            <Col xs={10}>
              <Row className="card-film ">
                <Col
                  xs={12}
                  xl={4}
                  className=" d-flex justify-content-center align-items-center"
                >
                  <img src={filmObj.Poster} alt={filmObj.imdbID} />
                </Col>
                <Col
                  xs={12}
                  xl={8}
                  className="align-items-center align-items-xl-start"
                >
                  <h3 className="text-center">Description:</h3>
                  <p className="fs-5 text-white-50">{filmObj.Plot}</p>
                  <hr />
                  <div>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Released : </span>{" "}
                      {filmObj.Released}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Writer : </span>{" "}
                      {filmObj.Writer}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Duration : </span>{" "}
                      {filmObj.Runtime}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Actors : </span>{" "}
                      {filmObj.Actors}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Awards : </span>{" "}
                      {filmObj.Awards}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Countrys : </span>{" "}
                      {filmObj.Country}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Director : </span>{" "}
                      {filmObj.Director}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Genre : </span>{" "}
                      {filmObj.Genre}
                    </p>
                    <p className=" fs-5 text-white-50">
                      {" "}
                      <span className="h3 text-white"> Language : </span>{" "}
                      {filmObj.Language}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={10}>
              <Row className="mb-6 mt-4 justify-content-center">
                <Col xs={10} lg={6} className="mb-5">
                  <FormComment
                    asin={filmObj.imdbID}
                    fetchComments={fetchComments}
                  />
                </Col>
                <Col xs={10} lg={6}>
                  <CommentList comments={comments} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 loading-div">
          <Spinner animation="grow" variant="success" />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
