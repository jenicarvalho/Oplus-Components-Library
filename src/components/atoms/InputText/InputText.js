import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default class InputText extends PureComponent {

  state = {
    value: ''
  };  

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  static propTypes = {
    /** Define o placeholder do input * */
    placeholder: PropTypes.string,
    /** Função onChange* */
    handleChange: PropTypes.func
  }

  static defaultProps = {
    placeholder: 'Valor padrão',
    handleChange: () => {},
  }

  render() {
    const {  placeholder } = this.props;
    return (
      <Container>
        <input type="text" onChange={this.handleChange} value={this.state.value} placeholder={placeholder} />
      </Container>
    );
  }
}
