import React, { Component } from "react";

import { Container } from "./styles";

export default class NavLinks extends Component {
  render() {
    return (
      <Container>
        <a href="/">Home</a>
        <a href="/">Profiles</a>
        <a href="/">Projects</a>
        <a href="/">Companies</a>
        <a href="/">Jobs</a>
      </Container>
    );
  }
}
