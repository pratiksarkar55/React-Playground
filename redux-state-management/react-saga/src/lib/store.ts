import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Todo } from "./type";
import { getTodos } from "./api";
import { put, takeEvery } from "redux-saga/effects";

function* getTodosAction() {
  const todos: Todo[] = yield getTodos();
  yield put({ type: "TODOS_FETCH_SUCCEEDED", payload: todos });
}

function* rootSaga() {
  yield takeEvery("TODOS_FETCH_REQUESTED", getTodosAction);
}

const reducer = (
  state: Todo[] = [],
  action: { type: string; payload: Todo[] }
) => {
  switch (action.type) {
    case "TODOS_FETCH_SUCCEEDED":
      return action.payload;
    default:
      return state;
  }
};
const sagaMoiddleware = createSagaMiddleware();
const customMiddleWare =
  (store: any) =>
  (next: any) =>
  (action: any): any => {
    // console.log("store", store);
    // console.log("next", next);
    // console.log("action", action);
    return next(action); // passes the action to the next middleware in line or, if there are no more middlewares, to the reducer.
  };
export const store = createStore(
  reducer,
  applyMiddleware(sagaMoiddleware, customMiddleWare)
);
sagaMoiddleware.run(rootSaga);
