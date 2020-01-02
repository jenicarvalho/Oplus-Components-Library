import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default class Notification extends PureComponent {
  static propTypes = {
    /**  Quantidade de notificações * */
    quantityNumber: PropTypes.number,
    iconColor: PropTypes.string,
    iconFont: PropTypes.string,
    margin: PropTypes.string
  };

  static defaultProps = {
    quantityNumber: 0,
    iconColor: "#ff7d01",
    iconFont: "18px",
    margin: "0 5px 0 10px"
  };

  render() {
    const {
      children,
      quantityNumber,
      iconColor,
      iconFont,
      margin
    } = this.props;
    return (
      <Container>
        <div style={{ color: iconColor, fontSize: iconFont, margin }}>
          {children}
        </div>
        {quantityNumber !== 0 && <span>{quantityNumber}</span>}
      </Container>
    );
  }
}
