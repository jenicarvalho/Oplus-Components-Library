import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  font-family: sans-serif;
  width: max-content;

  span {
    position: absolute;
    background: red;
    color: #fff;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    font-size: 11px;
    border-radius: 50%;
    top: -9px;
    right: -9px;
    border: 2px solid #fff;
  }
`;
