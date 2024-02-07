import { useState } from "react";
import { createGlobalStyle } from "styled-components";

import ThemeProvider from "./Theme/ThemeProvider";
import NewTodo from "./Components/NewTodo/NewTodo";
import TodosList from "./Components/TodosList/TodosList";
import Header from "./Components/Layout/Header";
import Main from "./Components/Layout/Main";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
	}

  html {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.color_3};
    background-color: ${(props) => props.theme.color_1};
  }
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const removeTodo = (removedTodoId) => {
    setTodos((prevState) =>
      prevState.filter((todo) => todo.id !== removedTodoId)
    );
  };

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />

      <Main>
        <NewTodo onAddNewTodo={addTodo} />
        {todos.length !== 0 && (
          <TodosList todos={todos} onRemoveTodo={removeTodo} />
        )}
      </Main>
    </ThemeProvider>
  );
};

export default App;
