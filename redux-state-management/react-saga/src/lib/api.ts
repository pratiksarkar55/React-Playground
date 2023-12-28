import { Todo } from "./type";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodos = async (): Promise<Todo[]> => {
  return fetch(BASE_URL + "/todos").then((data) => data.json());
};
