import styled from "styled-components";

export const Container = styled.button`
  color: #fff;
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 2px 2px 10px #ddd;
  }
`;
