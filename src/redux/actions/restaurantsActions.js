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

// export const actionFilterSearchAsync = (searchParam) => {
//   return async (dispatch) => {
//     const arrayDishes = collection(firestore, collectionRestaurants);
//     const querySnapshot = await getDocs(arrayDishes);
//     const restaurants = [];
//     try {
//       querySnapshot.forEach((doc) => {

//         const restaurant = {
//           id: doc.id,
//           platos: [],
//         };

//         doc.data().platos.forEach((dish) => {
//           if (dish.name.toLowerCase().includes(searchParam.toLowerCase())) {
//             restaurant.platos.push(dish);
//           }
//         });

//         if (restaurant.platos.length > 0) {
//           restaurants.push(restaurant);
//         }

//         console.log(doc.id, " => ", restaurant.platos);
//       });

//       console.log(restaurants);
//       dispatch(actionFilterRestaurantsSync(restaurants));
//     } catch (error) {
//       console.error(error);
//       dispatch(actionFilterRestaurantsSync([]));
//     }
//   };
// };
