import { combineReducers } from '@reduxjs/toolkit';
import restaurantsReducers from './restaurantsReducers';
import restaurantIdReducer from './restaurantIdReducer';
import platoNameReducer from "./platoNameReducer"
import shoppingCartReducer from './shoppingCartReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  restaurants: restaurantsReducers,
  restaurantId: restaurantIdReducer,
  platoName: platoNameReducer,
  shoppingCart: shoppingCartReducer,
  user: userReducer,
});

export default rootReducer;