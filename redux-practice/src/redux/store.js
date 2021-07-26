import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger,thunk)
    // other store enhancers if any
  )
);

// import cakeReducer from "./cake/cakeReducer";

// const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store;
