import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
// import userReducer from "../reducers/userReducer";
import restaurantsReducers from '../reducers/restaurantsReducers';
// const reducer = {
//   user: userReducer,
// };
const store = configureStore({
  reducer: {
    restaurantsReducers
  },
  // devTool: process.env.NODE_ENV !== "production",
  middleware:[thunk]
});

export default store;