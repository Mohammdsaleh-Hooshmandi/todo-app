import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.color_2};
  box-shadow: 0 1rem 1rem ${(props) => props.theme.color_4};
  padding: 2rem;
  border-radius: 1rem;
`;

export default Card;
