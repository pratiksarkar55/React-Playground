const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const userActions = require("./features/user/userSlice").userAction;

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(1));
store.dispatch(userActions());
unsubscribe();
