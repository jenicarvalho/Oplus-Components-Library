import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import LogoDefault from "../../../images/logo.png";
import LogoWhite from "../../../images/logo-branco.png";

export default class Logo extends PureComponent {
  static propTypes = {
    /**  Usar logo white * */
    white: PropTypes.bool
  };

  static defaultProps = {
    white: false
  };

  render() {
    const { white } = this.props;

    return <img src={white ? LogoWhite : LogoDefault} alt="Logo Oplus" />;
  }
}
