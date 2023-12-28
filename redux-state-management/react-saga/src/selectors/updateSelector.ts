import { Todo } from "../lib/type";
import { createSelector } from "reselect";
// Selectors
//
const getUsers = (state: Todo[]) => state;
export const updateUsers: Todo[] = createSelector(
  getUsers,
  (toDos: Todo[]) => toDos
);
