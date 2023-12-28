import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./lib/store";
import { useEffect } from "react";
import { Todo } from "./lib/type";
import { getActiveUsers } from "./selectors/toDoSelector";

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
function TodoApp() {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(getActiveUsers);
  useEffect(() => {
    dispatch({ type: "TODOS_FETCH_REQUESTED" });
  }, []);
  return (
    <div className="App">
      {todos &&
        todos.map((todo) => {
          return (
            <article
              key={todo.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="todo">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  id={todo.id.toString()}
                  onChange={
                    () => {}
                    //  updateTodo({ ...todo, completed: !todo.completed })
                  }
                />
                <label htmlFor={todo.id.toString()}>{todo.title}</label>
              </div>
              <div
                style={{
                  top: "-10px",
                  position: "relative",
                }}
              >
                {" "}
                <button
                  className="trash"
                  onClick={() => {
                    //deleteTodo({ id: todo.id })
                  }}
                >
                  Delete
                </button>
              </div>
            </article>
          );
        })}
    </div>
  );
}

export default App;
