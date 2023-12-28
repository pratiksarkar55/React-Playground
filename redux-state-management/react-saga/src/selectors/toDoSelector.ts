import { createSelector } from "reselect";
import { Todo } from "../lib/type";
// Selectors
//
const getUsers = (state: Todo[]) => state;
export const getActiveUsers: Todo[] = createSelector(
  getUsers,
  (toDos: Todo[]) => {
    console.log("inside todo selectors");
    return toDos.filter((toDo) => {
      return toDo.completed;
    });
  }
);
