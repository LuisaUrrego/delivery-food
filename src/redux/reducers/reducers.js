import { combineReducers } from '@reduxjs/toolkit';
import restaurantsReducers from './restaurantsReducers';
import restaurantIdReducer from './restaurantIdReducer';
import platoNameReducer from "./platoNameReducer"
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
  restaurants: restaurantsReducers,
  restaurantId: restaurantIdReducer,
  platoName: platoNameReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReducer;