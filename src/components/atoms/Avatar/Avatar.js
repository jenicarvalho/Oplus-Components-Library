import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

class Avatar extends PureComponent {
  static propTypes = {
    /** Define a url da imagem * */
    src: PropTypes.string,
    /** Define a largura do componente * */
    width: PropTypes.string,
    /** Define a altura do componente * */
    height: PropTypes.string
  };

  static defaultProps = {
    src:
      "https://www.uclg-planning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg",
    width: "50px",
    height: "50px"
  };

  render() {
    const { src, width, height } = this.props;
    return (
      <Container style={{ width, height }}>
        <img src={src} alt="Avatar" style={{ width, height }} />
      </Container>
    );
  }
}

Avatar.description = "Renderiza a foto do perfil";
Avatar.released = "v.0.1.22";
Avatar.url = "components/atoms/Avatar/Avatar";

export default Avatar;
