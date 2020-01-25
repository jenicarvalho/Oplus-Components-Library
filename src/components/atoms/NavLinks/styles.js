import styled from "styled-components";

export const Container = styled.nav`
  display: flex;

  a {
    display: block;
    padding: 25px 15px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 300;
    transition: all 0.3s ease;

    &:hover {
      background: #e96300;
    }
  }
`;
