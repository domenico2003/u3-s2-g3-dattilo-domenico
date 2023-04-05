import { Container } from "react-bootstrap";
import HomeMain from "./secondaryComponents/main/HomeMain";
import MyFooter from "./secondaryComponents/MyFooter";

let TVShows = (props) => {
  return (
    <>
      <Container fluid className="bg-prova text-white px-5">
        <HomeMain />
        <MyFooter />
      </Container>
    </>
  );
};

export default TVShows;
