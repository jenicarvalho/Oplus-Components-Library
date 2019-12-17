import React, { Component } from "react";

import { Container } from "./styles";

class Card extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

Card.description = "Renderiza a foto do perfil";
Card.released = "v.0.1.22";
Card.url = "components/atoms/Card/Card";

export default Card;
