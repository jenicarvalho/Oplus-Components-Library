import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default class Badge extends PureComponent {
  static propTypes = {
    /**  Texto da badge * */
    badgeText: PropTypes.string,
    /**  Background da badge * */
    badgeColor: PropTypes.string,
    /**  Cor do texto da badge * */
    badgeTextColor: PropTypes.string
  };

  static defaultProps = {
    badgeText: "Texto Padrão",
    badgeColor: "#00a5fb",
    badgeTextColor: "#fff"
  };

  render() {
    const { badgeColor, badgeText, badgeTextColor } = this.props;
    return (
      <Container style={{ backgroundColor: badgeColor, color: badgeTextColor }}>
        {badgeText}
      </Container>
    );
  }
}
