const thunk = require("redux-thunk").default;
const legacyStore = require("redux");
const createStore = legacyStore.legacy_createStore;
const applyMiddleware = require("redux").applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const axios = require("axios");
const iniitalState = {
  loading: true,
  data: [],
  error: "",
};

const REQUEST_INITIALIZED = "REQUEST_INITIALIZED";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILED = "REQUEST_FAILED";

//action creators
function initializeRequest() {
  return {
    type: REQUEST_INITIALIZED,
    payload: "",
  };
}
//action creators
function successRequest(data) {
  return {
    type: REQUEST_SUCCESS,
    payload: data,
  };
}
//action creators
function errorRequest(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

const reducer = (prevState = iniitalState, action) => {
  switch (action.type) {
    case "REQUEST_INITIALIZED":
      return { ...prevState, loading: false };

    case REQUEST_SUCCESS:
      return { ...prevState, data: action.payload };

    case REQUEST_FAILED:
      return { ...prevState, error: action.payload };

    default:
      return prevState;
  }
};
let unsubscribe;
//async action creators due to redux-thunk middleware
function asyncFunction() {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const users = response.data.map((obj) => {
          return obj.title;
        });
        dispatch(initializeRequest());
        dispatch(successRequest(users));
        unsubscribe();
      })
      .catch((err) => {
        dispatch(errorRequest(err.meesage));
      });
  };
}

const store = createStore(reducer, applyMiddleware(thunk, logger));
unsubscribe = store.subscribe(() => {
  console.log("Store", store.getState());
});
store.dispatch(asyncFunction());
