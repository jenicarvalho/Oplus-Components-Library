import React, { Component } from "react";
import { FiMail } from "react-icons/fi";

import { Nav, Container } from "./styles";
import Logo from "../../atoms/Logo/Logo";
import Notification from "../../atoms/Notification/Notification";

export default class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Container>
          <Logo white />
          <Notification quantityNumber={2} iconColor="#fff" iconFont="22px">
            <FiMail />
          </Notification>
        </Container>
      </Nav>
    );
  }
}
