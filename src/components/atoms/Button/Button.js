import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default class Button extends PureComponent {
  static propTypes = {
    /**  Texto do botão * */
    buttonText: PropTypes.string,
    /**  Background do botão * */
    buttonColor: PropTypes.string
  };

  static defaultProps = {
    buttonText: "Botão Padrão",
    buttonColor: "#ff7d01"
  };

  render() {
    const { buttonColor, buttonText } = this.props;
    return (
      <Container style={{ backgroundColor: buttonColor }}>
        {buttonText}
      </Container>
    );
  }
}
