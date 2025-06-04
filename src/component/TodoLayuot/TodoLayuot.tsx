import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";
import Form from "../Form/Form";
import style from "./TodoLayuot.module.css"

function TodoLayuot() {
  return (
    <div className={`${style.layuot} border`}>
      <Form />
      <TodoList />
      <Filter />
    </div>
  );
}

export default TodoLayuot;
