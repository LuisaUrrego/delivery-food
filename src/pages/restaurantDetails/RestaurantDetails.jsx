import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantId } from '../../redux/reducers/restaurantIdReducer';
import stars from "../../assets/favoritos.png";
import { StyleRestaurantDetails } from './StyleRestaurantDetails';
import back from "../../assets/chevron-left.svg"
import { useNavigate } from 'react-router-dom';
import { setPlatoName } from '../../redux/reducers/platoNameReducer';

const RestaurantDetails = () => {

  const restaurantSelected = useSelector((state) => state.restaurantId);
  const restaurantList = useSelector((store) => store.restaurants.restaurants);
  const [detailsRestaurant, setDetailsRestaurant] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleback = () =>{
    navigate(`/Menu/Home`);
  }

  const handleFood = (nameFood) =>{
    dispatch(setPlatoName(nameFood))
    console.log(nameFood);
    navigate(`/FoodDetails`);
  }



  useEffect(() => {

    restaurantList.map((item) => {

      if (item.id == restaurantSelected.resturantId) {
        setDetailsRestaurant(item);

      }
    }
    )

    console.log(restaurantSelected);
  }, []);


  return (
    <StyleRestaurantDetails>

    <nav>
      <img onClick={handleback} src={back} alt="back" />
    </nav>

      {
        detailsRestaurant ? (
          <div>
            <div className='restaurantContainer'>
              <figure>
                <img src={detailsRestaurant.imagen} alt={detailsRestaurant.nombre} />
              </figure>
              <div>
                <h3>{detailsRestaurant.nombre}</h3>
                <figure>
                  {
                    Array.from({ length: detailsRestaurant.estrellas }).map((_, index) => (
                      <img className="stars" key={index} src={stars} alt="stars" />
                    ))
                  }
                </figure>

                <p>{detailsRestaurant.horario}</p>
              </div>

            </div>
            <div className='categoryContainer'>
                <span className='category'>
                  <h3>{detailsRestaurant.categoria}</h3>
                </span>
              </div>
          </div>

        ) :
          <div className="loading">Loading...</div>
      }

      {
        detailsRestaurant ? (

          <main>
            {
              detailsRestaurant.platos.map(item => {
                return <article className='platoCard'     
                  onClick={() => {
                  handleFood(item.nombre)}}>
                  <img className="platoImage" src={item.imagen} alt={item.nombre} />
                  <h3>{item.nombre}</h3>
                  <p>{item.precio}</p>
                </article>
              })
            }
          </main>) :
          <div className="loading">Loading...</div>
      }

    </StyleRestaurantDetails>
  )
}

export default RestaurantDetails
