import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import userReducer from "../reducers/userReducer";
import restaurantsReducers from '../reducers/restaurantsReducers';
const reducer = {
  user: userReducer,
  restaurantsReducers
};
const store = configureStore({
  reducer,
  // reducer: {
  //   restaurantsReducers
  // },
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  middleware:[thunk]
    }),
});

export default store;