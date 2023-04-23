import { configureStore } from "@reduxjs/toolkit";
//const { getDefaultMiddleware } = require("@reduxjs/toolkit");
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: { cakeReducer, icecreamReducer, userReducer },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
