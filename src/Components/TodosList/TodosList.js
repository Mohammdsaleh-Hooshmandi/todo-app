import styled from "styled-components";
import ListItem from "./ListItem";
import Card from "../Common/Card";

const ItemsWrapper = styled.ul`
  list-style: none;

  ${Card} {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const TodosList = (props) => {
  return (
    <ItemsWrapper>
      <Card>
        {props.todos.map((todo) => (
          <ListItem key={todo.id} id={todo.id} onRemove={props.onRemoveTodo}>
            {todo.task}
          </ListItem>
        ))}
      </Card>
    </ItemsWrapper>
  );
};

export default TodosList;
