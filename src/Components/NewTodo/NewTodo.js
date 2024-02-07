import { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import Input from "./TodoInput";
import AddButton from "../Common/AddButton";
import Card from "../Common/Card";

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NewTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
      task: enteredTodo,
    };
    props.onAddNewTodo(newTodo);
    setEnteredTodo("");
  };

  const inputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  return (
    <Card>
      <Wrapper onSubmit={submitHandler}>
        <AddButton disabled={enteredTodo.length === 0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </AddButton>

        <Input onChange={inputChangeHandler} value={enteredTodo} />
      </Wrapper>
    </Card>
  );
};

export default NewTodo;
