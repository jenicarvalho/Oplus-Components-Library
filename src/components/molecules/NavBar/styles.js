import styled from "styled-components";

export const Nav = styled.div`
  background-color: #ff7d01;
  padding: 0px 15px;
  font-family: sans-serif;

  .avatar {
    margin: 0 10px 0 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

export const NavLinks = styled.nav`
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

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
