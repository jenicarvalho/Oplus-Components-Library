import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default class InputText extends PureComponent {

  static propTypes = {
    /** Define o value do input * */
    value: PropTypes.string,
    /** Define o placeholder do input * */
    placeholder: PropTypes.string
  }

  static defaultProps = {
    value: '',
    placeholder: 'Valor padrão'
  }

  render() {
    const { value, placeholder } = this.props;
    return (
      <Container>
        <input type="text" value={value} placeholder={placeholder} />
      </Container>
    );
  }
}
