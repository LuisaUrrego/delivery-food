import location from '../../assets/Vector.svg'
import anoucementOne from "../../assets/Img.png"
import anoucementTwo from "../../assets/Img (1).png"
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listRestaurants } from '../../redux/actions/restaurantsActions';
import italyFlag from "../../assets/italia.png"
import RestaurantCard from './RestaurantCard';




const Home = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector((store) => store.restaurantsReducers.restaurants);
  const [listaDeRestaurantes, setListaDeRestaurantes] = useState([]);

  const getRestaurants = () => {    
    dispatch(listRestaurants());
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
      setListaDeRestaurantes(restaurantList);
    console.log(restaurantList);
  },[restaurantList]);

  return (
    <div>
      <nav>
      <img src={location} alt="location" />
      <div>
        <p>DELIVER TO</p>
        <h4>882 Well St, New-York</h4>
      </div>
      </nav>
      <section>
        <img src={anoucementOne} alt="promotion" />
        <img src={anoucementTwo} alt="promotion" />
      </section>
      <div>
        <p>Restaurants and cafes</p>
      </div>
      <section>
        <ul>
          <li><button>All</button></li>
          <li><button>Gourmet</button></li>
          <li><button> {/* <img src={italyFlag} alt="italy flag" /> */} Italian food</button></li>
          <li><button>Mexican food</button></li>
          <li><button>Fast food</button></li>
        </ul>
        </section>
        

      <main>
        {listaDeRestaurantes.map((item) => {
         return <RestaurantCard key={item.id} listaDeRestaurantes={item}/>
        })
        }
      </main>
      
    </div>
  )
}

export default Home