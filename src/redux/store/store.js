import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import userReducer from "../reducers/userReducer";
import { restaurants } from '../reducers/reducers';
import rootReducer from '../reducers/reducers';
const reducer = {
  user: userReducer,
  rootReducer,
  restaurants
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  middleware:[thunk]
    }),
});

export default store;