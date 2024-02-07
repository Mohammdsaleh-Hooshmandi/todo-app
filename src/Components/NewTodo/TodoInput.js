import styled from "styled-components";

const Input = styled.input.attrs(() => {
  return {
    type: "text",
    placeholder: "Create new todo...",
  };
})`
  font-size: 1.6rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  background-color: transparent;
  color: ${(props) => props.theme.Very_Dark_Grayish_Blue};

  &:focus {
    border-color: black;
  }

  &::placeholder {
    color: ${(props) => props.theme.Dark_Grayish_Blue};
  }
`;

export default Input;
