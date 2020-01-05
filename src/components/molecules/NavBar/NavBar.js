import React, { Component } from "react";
import { FiMail, FiUsers, FiBell } from "react-icons/fi";

import { Nav, Container, NavLinks, Flex, Name } from "./styles";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../../atoms/Logo/Logo";
import Notification from "../../atoms/Notification/Notification";
import Avatar from "../../atoms/Avatar/Avatar";

export default class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Container>
          <Flex>
            <Logo white />
            <NavLinks>
              <a href="/">Home</a>
              <a href="/">Profiles</a>
              <a href="/">Projects</a>
              <a href="/">Companies</a>
              <a href="/">Jobs</a>
            </NavLinks>
          </Flex>
          <Flex>
            <Notification quantityNumber={2} iconColor="#fff" iconFont="21px">
              <FiUsers />
            </Notification>
            <Notification quantityNumber={3} iconColor="#fff" iconFont="21px">
              <FiMail />
            </Notification>
            <Notification quantityNumber={1} iconColor="#fff" iconFont="21px">
              <FiBell />
            </Notification>
            <Avatar
              src="https://randomuser.me/api/portraits/men/20.jpg"
              width="40px"
              height="40px"
            />
            <Name>
              Olá, Jeniffer Carvalho
              <FiChevronDown />
            </Name>
          </Flex>
        </Container>
      </Nav>
    );
  }
}
