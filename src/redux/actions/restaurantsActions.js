import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../Firebase/firebaseConfig';
import { setRestaurants } from '../reducers/restaurantsReducers';

const collectionRestaurants = collection(firestore, "restaurantes");

export const listRestaurants = () => {
  return async (dispatch) => {
    try {
      const snapshot = await getDocs(collectionRestaurants);
      const restaurantArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch(setRestaurants(restaurantArray));
    } catch (e) {
      console.error("Error listing document:", e);
    }
  };
};