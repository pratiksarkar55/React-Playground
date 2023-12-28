const redux = require("redux");
const produce = require("immer").produce;
const bindActionCreatores = require("redux").bindActionCreators;
const combineReducers = require("redux").combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const { legacy_createStore } = redux;
const createStore = legacy_createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
//action creator
//returns an action object.
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}
function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    quantity: 1,
  };
}
function restockIcecream(qty) {
  return {
    type: ICECREAM_RESTOCKED,
    quantity: qty,
  };
}
// const initialState = {
//   numberOfCakes: 10,
//   numberofIceCreams: 20,
// };

const initalCakeState = {
  numberOfCakes: 10,
};

const initialIcecreamState = {
  numberofIceCreams: 20,
};

const cakeReducer = (prevState = initalCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...prevState,
        numberOfCakes: prevState.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...prevState,
        numberOfCakes: prevState.numberOfCakes + action.quantity,
      };
    default:
      return prevState;
  }
};

const icecreamReducer = (prevState = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...prevState,
        numberofIceCreams: prevState.numberofIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return produce(
        prevState,
        (draft) => draft.numberofIceCreams + action.quantity
      );
    // action is called in both the reducers.Only it acts based on switch case
    case CAKE_ORDERED:
      return produce(prevState, (draft) => draft.numberofIceCreams--);
    default:
      return prevState;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("inital state", store.getState());

//listner for store change
const unsubscribe = store.subscribe(() => {});
const action = bindActionCreatores(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockCake(3);
action.orderIcecream();
action.restockIcecream(1);
unsubscribe();
