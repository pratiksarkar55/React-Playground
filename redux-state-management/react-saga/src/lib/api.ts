import { Todo } from "./type";

const BASE_URL = "http://localhost:3500";

export const getTodos = async (): Promise<Todo[]> => {
  return fetch(BASE_URL + "/todos").then((data) => data.json());
};
