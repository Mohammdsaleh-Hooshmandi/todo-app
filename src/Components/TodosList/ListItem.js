import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 1.6rem;
  padding: 0.5rem 0;

  span {
    overflow: auto;
  }

  .remove-btn {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ListItem = (props) => {
  return (
    <Item>
      <span>{props.children}</span>

      <button
        className="remove-btn"
        onClick={props.onRemove.bind(null, props.id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </Item>
  );
};

export default ListItem;
