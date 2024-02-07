import styled from "styled-components";

const AddButton = styled.button.attrs(() => {
  return {
    type: "submit",
  };
})`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(
    to right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default AddButton;
