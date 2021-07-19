import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React from "react";

const breadcrumb = {
  color: "black",
  background: "#f1cf91",
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 1vh 5vw;
`;

function Home(props) {
  let content = {
    English: {
      breadcrumb: "Home",
      button: "Find Recipes",
    },
    Français: {
      breadcrumb: "Page d'accueil",
      button: "Trouver des recettes",
    },
  };

  props.language === "Français"
    ? (content = content.Français)
    : (content = content.English);

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active style={breadcrumb}>
          {content.breadcrumb}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="home center">
        <br />
        <br />
        <img
          alt="a fancy plate of food"
          src="/homepage.jpeg"
          className="homepage-image"
        />
        <br />
        <br />
        <Card.Link href="/ingredients">
          <Button variant="primary">{content.button}</Button>
        </Card.Link>
      </div>
    </Container>
  );
}

export default Home;
