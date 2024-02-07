import { useState } from "react";
import { ThemeProvider as Provider } from "styled-components";
import lightTheme from "./light";
import darkTheme from "./dark";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const changeThemeHandler = () => {
    setTheme((prevTheme) =>
      prevTheme.id === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <Provider theme={{ ...theme, onChangeTheme: changeThemeHandler }}>
      {children}
    </Provider>
  );
};

export default ThemeProvider;
