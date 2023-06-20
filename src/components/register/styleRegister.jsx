import styled from "styled-components";

export const StyledTextField = styled.div`
  && {
    &:hover .MuiInput-underline:before {
      border-bottom: 2px solid yellow;
    }
    &:hover .MuiInput-underline:after {
      border-bottom: 2px solid yellow;
    }
    & .MuiInput-underline {
      width: 100%;
      width: 312px;
    }
  }
`;

export const Form = styled.form`
  margin-left: 14px;
  margin-top: 113px;
  position: absolute;
`;

export const Button = styled.button`
  background-color: yellow;
  margin-top: 241px;
  width: 100%;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  margin-top: 39px;
  position: absolute;
  margin-left: 12px;
`;
