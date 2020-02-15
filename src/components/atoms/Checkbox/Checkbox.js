import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default class Checkbox extends PureComponent {

  state = {
    active: this.props.checked
  };

  handleChange = () => {
    this.setState({ active: !this.state.active });
  }

  static propTypes = {
    /** Define o label do input * */
    label: PropTypes.string,
    /** Define se está selecionado ou não * */
    checked: PropTypes.bool
  }

  static defaultProps = {
    label: 'Valor padrão',
    checked: false,
  }

  render() {
    const { label } = this.props;

    return (
      <Container>
        <label>
          <input type="checkbox" onChange={this.handleChange} checked={this.state.active} />
          {label}
        </label>
      </Container>
    );
  }
}
