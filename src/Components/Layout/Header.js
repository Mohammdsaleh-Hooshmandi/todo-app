import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";
import bgImage from "../../assets/bg-image.jpg";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";

const HeaderWrapper = styled.header`
  height: 30vh;
  background: url(${bgImage}) center no-repeat;
  background-size: cover;
  padding-top: 6rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 45rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  & .heading {
    font-size: 5rem;
    font-weight: 700;
    color: hsl(0, 0%, 98%);
  }

  & > div button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .heading {
      font-size: 3rem;
    }
  }
`;

const Header = () => {
  const { id, onChangeTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <div>
        <h1 className="heading">Todo</h1>

        <button type="button" onClick={onChangeTheme}>
          <img
            src={id === "light" ? moon : sun}
            alt={`${id === "light" ? "moon" : "sun"} icon`}
          />
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
