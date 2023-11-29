/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoItems = ({ items }) => {
  return (
    <>
      <div className="container">
        {items.map((item) => (
          <TodoItem key={item} todoName={item.name} todoDate={items.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
