import { Alert, Badge, ListGroup, Spinner } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <>
      <h2 className="text-center mb-4">commenti :</h2>
      {props.comments ? (
        props.comments.length === 0 ? (
          <Alert variant="info">Non sono ancora presenti commenti!</Alert>
        ) : (
          <ListGroup className="lista-commenti rounded-3">
            {props.comments.map((commento) => {
              return (
                <ListGroup.Item key={commento._id}>
                  <div className="d-flex justify-content-between">
                    <p>
                      {commento.author}{" "}
                      <Badge
                        bg={commento.rate < 3 ? "danger" : "success"}
                        className="ms-2"
                      >
                        {commento.rate}
                      </Badge>{" "}
                    </p>
                    <p>{new Date(commento.createdAt).toLocaleString()}</p>
                  </div>
                  <p>{commento.comment}</p>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )
      ) : (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 loading-div">
          <Spinner animation="grow" variant="success" />
        </div>
      )}
    </>
  );
};

export default CommentList;
