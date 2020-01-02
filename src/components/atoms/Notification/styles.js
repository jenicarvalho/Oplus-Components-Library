import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  font-family: sans-serif;
  width: max-content;

  span {
    position: absolute;
    background: red;
    color: #fff;
    width: 13px;
    height: 13px;
    text-align: center;
    line-height: 12px;
    font-size: 9px;
    border-radius: 50%;
    top: -5px;
    right: -5px;
    border: 1px solid #fff;
  }
`;
